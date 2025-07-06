import { test, expect } from "@playwright/test"

test('homepage has welcome text and about section', async ({ page }) => {
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' })

    await page.waitForSelector('h1', { state: 'visible' })

    await expect(page.getByRole('heading', { name: 'Welcome to My Next.js App' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'About' })).toBeVisible()
    await expect(page.getByText('This is a simple Next.js application')).toBeVisible()
});



