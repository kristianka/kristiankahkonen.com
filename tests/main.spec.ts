import { test, expect } from "@playwright/test";

// change to http://localhost:3000 if run outside docker locally
const url = "http://localhost";

test.describe("kristiankahkonen.com", async () => {
    // Go to the main page
    test.beforeEach(async ({ page }) => {
        await page.goto(url);
    });

    // Basic test that page does not crash
    test("It loads", async ({ page }) => {
        const title = await page.title();
        await expect(title).toBe("Portfolio - Kristian Kähkönen");

        // await expect(page.locator('text="KristianKähkönen"')).toHaveCount(1);
    });
});
