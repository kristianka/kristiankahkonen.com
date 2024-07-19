import { test, expect } from "@playwright/test";

// dev is in localhost:3000, Docker is in localhost
// docker url is passed on command line
const url = process.env.URL || "http://localhost:3000";

test.describe("kristiankahkonen.com", async () => {
    // Go to the main page
    test.beforeEach(async ({ page }) => {
        await page.goto(url);
    });

    // Basic test that page loads
    test("Site loads", async ({ page }) => {
        const title = await page.title();
        await expect(title).toBe("Kristian Kähkönen");
    });

    // Site has probably crashed if this fails
    test("Header loads and dark mode toggle shows", async ({ page }) => {
        // Check that the header is visible and loaded
        const header = await page.locator("header");
        await expect(header).toBeVisible();

        const headerLink = await page.getByTestId("headerNameHomeLink");
        await expect(headerLink).toBeVisible();
        await expect(headerLink).toHaveText(/Kristian\s*Kähkönen/);

        // Dark mode toggle is visible
        const modeToggle = await page.getByTestId("headerModeToggle");
        await expect(modeToggle).toBeVisible();
    });

    test("Navigation links work", async ({ page }) => {
        // Home
        const homeLink2 = await page.getByTestId("headerHomeLink");
        await expect(homeLink2).toBeVisible();
        await homeLink2.click();
        await expect(page.url()).toBe(`${url}/`);
        await page.goto(url);

        // Blog
        const blogLink = await page.getByTestId("headerBlogLink");
        await expect(blogLink).toBeVisible();
        await blogLink.click();
        await expect(page).toHaveURL(/.*blog/);
        await page.goto(url);

        // Projects
        const projectsLink = await page.getByTestId("headerProjectsLink");
        await expect(projectsLink).toBeVisible();
        await projectsLink.click();
        await expect(page).toHaveURL(/.*projects/);
        await page.goto(url);

        // Resume
        const aboutLink = await page.getByTestId("headerAboutLink");
        await expect(aboutLink).toBeVisible();
        await aboutLink.click();
        await expect(page).toHaveURL(/.*about/);
        await page.goto(url);

        // Contact
        const contactLink = await page.getByTestId("headerContactLink");
        await expect(contactLink).toBeVisible();
        await contactLink.click();
        await expect(page).toHaveURL(/.*contact/);
    });

    test("Job title animations work", async ({ page }) => {
        const initialTitle = await page.getByTestId("jobTitleAnimation").allInnerTexts();
        await expect(initialTitle).toContain("Software Engineer");

        // Wait for the title to change
        await page.waitForTimeout(3500);

        // Verify the subtitle changes
        const changedTitle = await page.getByTestId("jobTitleAnimation").allInnerTexts();
        await expect(changedTitle).not.toContain(initialTitle);
    });
});
