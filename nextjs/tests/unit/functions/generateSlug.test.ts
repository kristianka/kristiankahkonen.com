import { generateSlug } from "@/components/GenerateSlug";
import { describe, it, expect } from "vitest";

// some basic tests for generating slugs from strings
describe("generateSlug", () => {
    it("converts uppercase to lowercase", () => {
        expect(generateSlug("Hello World")).toBe("hello-world");
    });

    it("replaces spaces with hyphens", () => {
        expect(generateSlug("this is a test")).toBe("this-is-a-test");
    });

    it("handles special characters", () => {
        expect(generateSlug("hello/world:test")).toBe("hello-world-test");
    });

    it("handles accented characters", () => {
        expect(generateSlug("àáãäâèéëê")).toBe("aaaaaeeee");
        expect(generateSlug("ìíïîòóöôùúüûñç")).toBe("iiiioooouuuunc");
    });

    it("removes leading and trailing spaces", () => {
        expect(generateSlug("  hello world  ")).toBe("hello-world");
    });

    it("removes multiple consecutive hyphens", () => {
        expect(generateSlug("hello---world")).toBe("hello-world");
    });

    it("removes non-alphanumeric characters", () => {
        expect(generateSlug("hello@#$%world!")).toBe("helloworld");
    });

    it("handles mixed special characters and spaces", () => {
        expect(generateSlug("Café au Lait: A Guide")).toBe("cafe-au-lait-a-guide");
    });

    it("handles empty string", () => {
        expect(generateSlug("")).toBe("");
    });

    it("handles string with only special characters", () => {
        expect(generateSlug("!@#$%^&*()")).toBe("");
    });

    it("preserves existing hyphens", () => {
        expect(generateSlug("hello-world")).toBe("hello-world");
    });

    it("handles unicode characters correctly", () => {
        // õ is not in the replacement map, so it gets removed
        expect(generateSlug("Tõesti hea päev")).toBe("testi-hea-paev");
    });

    it("handles complex real-world blog titles", () => {
        expect(generateSlug("My First Blog Post: Getting Started!")).toBe(
            "my-first-blog-post-getting-started"
        );
        expect(generateSlug("C++ vs. Python: Which One?")).toBe("c-vs-python-which-one");
        expect(generateSlug("10 Tips & Tricks for 2024")).toBe("10-tips-tricks-for-2024");
    });
});
