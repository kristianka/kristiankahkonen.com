import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock DirectusClient before importing services
vi.mock("../../src/services/DirectusClient", () => ({
    default: {
        request: vi.fn(),
        setToken: vi.fn().mockReturnValue(Promise.resolve())
    }
}));

import { getAboutMe, getEducations, getCertifications } from "../../src/services/AboutRequests";
import client from "../../src/services/DirectusClient";

describe("AboutRequests", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe("getAboutMe", () => {
        it("returns about me data", async () => {
            const mockAboutMe = {
                id: 1,
                name: "John Doe",
                bio: "Software Developer"
            };

            vi.mocked(client.request).mockResolvedValue(mockAboutMe);
            const result = await getAboutMe();
            expect(result).toEqual(mockAboutMe);
        });

        it("returns null on error", async () => {
            vi.mocked(client.request).mockRejectedValue(new Error("Not found"));
            const result = await getAboutMe();
            expect(result).toBeNull();
        });

        it("handles network errors", async () => {
            vi.mocked(client.request).mockRejectedValue(new Error("Network error"));
            const result = await getAboutMe();
            expect(result).toBeNull();
        });
    });

    describe("getEducations", () => {
        it("returns education data", async () => {
            const mockEducations = [
                { id: "1", school: "TAMK", degree: "Bachelor" },
                { id: "2", school: "University of Helsinki", degree: "Master" }
            ];

            vi.mocked(client.request).mockResolvedValue(mockEducations);
            const result = await getEducations();

            expect(result).toEqual(mockEducations);
            expect(result).toHaveLength(2);
        });

        it("returns empty array when no educations", async () => {
            vi.mocked(client.request).mockResolvedValue([]);
            const result = await getEducations();
            expect(result).toEqual([]);
        });

        it("returns empty array on error", async () => {
            vi.mocked(client.request).mockRejectedValue(new Error("API Error"));
            const result = await getEducations();
            expect(result).toEqual([]);
        });
    });

    describe("getCertifications", () => {
        it("returns sorted certifications", async () => {
            const mockCertifications = [
                { id: "1", name: "Cert C", order: 3 },
                { id: "2", name: "Cert A", order: 1 },
                { id: "3", name: "Cert B", order: 2 }
            ];

            vi.mocked(client.request).mockResolvedValue(mockCertifications);
            const result = await getCertifications();

            expect(result).toHaveLength(3);
            expect(result[0].order).toBe(1);
            expect(result[1].order).toBe(2);
            expect(result[2].order).toBe(3);
        });

        it("handles empty certifications", async () => {
            vi.mocked(client.request).mockResolvedValue([]);
            const result = await getCertifications();
            expect(result).toEqual([]);
        });

        it("returns empty array on error", async () => {
            vi.mocked(client.request).mockRejectedValue(new Error("API Error"));
            const result = await getCertifications();
            expect(result).toEqual([]);
        });
    });
});
