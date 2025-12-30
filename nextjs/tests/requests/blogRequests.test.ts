import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock DirectusClient before importing services
vi.mock("../../src/services/DirectusClient", () => ({
    default: {
        request: vi.fn(),
        setToken: vi.fn().mockReturnValue(Promise.resolve())
    }
}));

import {
    getBlogs,
    getBlogById,
    getBlogAuthor,
    getFeaturedBlogs,
    getLatestBlog
} from "../../src/services/BlogRequests";
import client from "../../src/services/DirectusClient";

describe("BlogRequests", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe("getBlogs", () => {
        it("returns sorted published blogs", async () => {
            const mockBlogs = [
                { id: "1", title: "Blog 1", published: true, date_created: "2024-01-01" },
                { id: "2", title: "Blog 2", published: true, date_created: "2024-01-03" },
                { id: "3", title: "Blog 3", published: false, date_created: "2024-01-02" }
            ];

            vi.mocked(client.request).mockResolvedValue(mockBlogs);

            const result = await getBlogs();

            expect(result).toHaveLength(2);
            expect(result[0].id).toBe("2"); // newest first
            expect(result[1].id).toBe("1");
        });

        it("filters out unpublished blogs", async () => {
            const mockBlogs = [
                { id: "1", title: "Blog 1", published: false, date_created: "2024-01-01" }
            ];

            vi.mocked(client.request).mockResolvedValue(mockBlogs);

            const result = await getBlogs();

            expect(result).toHaveLength(0);
        });

        it("returns empty array on error", async () => {
            vi.mocked(client.request).mockRejectedValue(new Error("API Error"));

            const result = await getBlogs();

            expect(result).toEqual([]);
        });

        it("handles empty response", async () => {
            vi.mocked(client.request).mockResolvedValue([]);

            const result = await getBlogs();

            expect(result).toEqual([]);
        });
    });

    describe("getBlogById", () => {
        it("returns blog when found and published", async () => {
            const mockBlog = { id: "1", title: "Test Blog", published: true };

            vi.mocked(client.request).mockResolvedValue(mockBlog);

            const result = await getBlogById("1");

            expect(result).toEqual(mockBlog);
        });

        it("returns null for unpublished blog", async () => {
            const mockBlog = { id: "1", title: "Test Blog", published: false };

            vi.mocked(client.request).mockResolvedValue(mockBlog);

            const result = await getBlogById("1");

            expect(result).toBeNull();
        });

        it("returns null when id is empty", async () => {
            const result = await getBlogById("");

            expect(result).toBeNull();
            expect(client.request).not.toHaveBeenCalled();
        });

        it("returns null on error", async () => {
            vi.mocked(client.request).mockRejectedValue(new Error("Not found"));

            const result = await getBlogById("1");

            expect(result).toBeNull();
        });
    });

    describe("getBlogAuthor", () => {
        it("returns author when found", async () => {
            const mockAuthor = { id: "1", first_name: "John", last_name: "Doe" };

            vi.mocked(client.request).mockResolvedValue(mockAuthor);

            const result = await getBlogAuthor("1");

            expect(result).toEqual(mockAuthor);
        });

        it("returns null when id is undefined", async () => {
            const result = await getBlogAuthor(undefined);

            expect(result).toBeNull();
            expect(client.request).not.toHaveBeenCalled();
        });

        it("returns null on error", async () => {
            vi.mocked(client.request).mockRejectedValue(new Error("Not found"));

            const result = await getBlogAuthor("1");

            expect(result).toBeNull();
        });
    });

    describe("getFeaturedBlogs", () => {
        it("returns up to 3 featured published blogs", async () => {
            const mockBlogs = [
                { id: "1", published: true, tags: ["featured"], date_created: "2024-01-01" },
                { id: "2", published: true, tags: ["featured"], date_created: "2024-01-04" },
                { id: "3", published: true, tags: ["featured"], date_created: "2024-01-03" },
                { id: "4", published: true, tags: ["featured"], date_created: "2024-01-02" }
            ];

            vi.mocked(client.request).mockResolvedValue(mockBlogs);

            const result = await getFeaturedBlogs();

            expect(result).toHaveLength(3);
            expect(result[0].id).toBe("2"); // newest first
            expect(result[1].id).toBe("3");
            expect(result[2].id).toBe("4");
        });

        it("filters out non-featured blogs", async () => {
            const mockBlogs = [
                { id: "1", published: true, tags: ["other"], date_created: "2024-01-01" },
                { id: "2", published: true, tags: ["featured"], date_created: "2024-01-02" }
            ];

            vi.mocked(client.request).mockResolvedValue(mockBlogs);

            const result = await getFeaturedBlogs();

            expect(result).toHaveLength(1);
            expect(result[0].id).toBe("2");
        });

        it("filters out unpublished featured blogs", async () => {
            const mockBlogs = [
                { id: "1", published: false, tags: ["featured"], date_created: "2024-01-01" }
            ];

            vi.mocked(client.request).mockResolvedValue(mockBlogs);

            const result = await getFeaturedBlogs();

            expect(result).toHaveLength(0);
        });

        it("returns empty array on error", async () => {
            vi.mocked(client.request).mockRejectedValue(new Error("API Error"));

            const result = await getFeaturedBlogs();

            expect(result).toEqual([]);
        });
    });

    describe("getLatestBlog", () => {
        it("returns the most recent published blog", async () => {
            const mockBlogs = [
                { id: "1", published: true, date_created: "2024-01-01" },
                { id: "2", published: true, date_created: "2024-01-03" },
                { id: "3", published: true, date_created: "2024-01-02" }
            ];

            vi.mocked(client.request).mockResolvedValue(mockBlogs);

            const result = await getLatestBlog();

            expect(result).toHaveLength(1);
            expect(result[0].id).toBe("2");
        });

        it("filters out unpublished blogs", async () => {
            const mockBlogs = [
                { id: "1", published: false, date_created: "2024-01-03" },
                { id: "2", published: true, date_created: "2024-01-01" }
            ];

            vi.mocked(client.request).mockResolvedValue(mockBlogs);

            const result = await getLatestBlog();

            expect(result).toHaveLength(1);
            expect(result[0].id).toBe("2");
        });

        it("returns empty array when no published blogs", async () => {
            const mockBlogs = [{ id: "1", published: false, date_created: "2024-01-01" }];

            vi.mocked(client.request).mockResolvedValue(mockBlogs);

            const result = await getLatestBlog();

            expect(result).toEqual([]);
        });

        it("returns empty array on error", async () => {
            vi.mocked(client.request).mockRejectedValue(new Error("API Error"));

            const result = await getLatestBlog();

            expect(result).toEqual([]);
        });
    });
});
