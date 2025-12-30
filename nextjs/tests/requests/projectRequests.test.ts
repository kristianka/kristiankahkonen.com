import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock DirectusClient before importing services
vi.mock("../../src/services/DirectusClient", () => ({
    default: {
        request: vi.fn(),
        setToken: vi.fn().mockReturnValue(Promise.resolve())
    }
}));

import { getProjects } from "../../src/services/ProjectRequests";
import client from "../../src/services/DirectusClient";

describe("ProjectRequests", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe("getProjects", () => {
        it("returns sorted published projects", async () => {
            const mockProjects = [
                { id: "1", title: "Project C", status: "published", order: 3 },
                { id: "2", title: "Project A", status: "published", order: 1 },
                { id: "3", title: "Project B", status: "published", order: 2 }
            ];

            vi.mocked(client.request).mockResolvedValue(mockProjects);

            const result = await getProjects();

            expect(result).toHaveLength(3);
            expect(result[0].order).toBe(1);
            expect(result[1].order).toBe(2);
            expect(result[2].order).toBe(3);
        });

        it("filters out non-published projects", async () => {
            const mockProjects = [
                { id: "1", title: "Project 1", status: "published", order: 1 },
                { id: "2", title: "Project 2", status: "draft", order: 2 },
                { id: "3", title: "Project 3", status: "archived", order: 3 }
            ];

            vi.mocked(client.request).mockResolvedValue(mockProjects);

            const result = await getProjects();

            expect(result).toHaveLength(1);
            expect(result[0].id).toBe("1");
        });

        it("returns empty array when no published projects", async () => {
            const mockProjects = [{ id: "1", title: "Project 1", status: "draft", order: 1 }];

            vi.mocked(client.request).mockResolvedValue(mockProjects);

            const result = await getProjects();

            expect(result).toEqual([]);
        });

        it("returns empty array on error", async () => {
            vi.mocked(client.request).mockRejectedValue(new Error("API Error"));

            const result = await getProjects();

            expect(result).toEqual([]);
        });

        it("handles empty response", async () => {
            vi.mocked(client.request).mockResolvedValue([]);

            const result = await getProjects();

            expect(result).toEqual([]);
        });
    });
});
