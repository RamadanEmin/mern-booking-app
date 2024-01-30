import { test, expect } from '@playwright/test';

const UI_URL = "http://127.0.0.1:5173";

test.beforeEach(async ({ page }) => {
    await page.goto(UI_URL);

    await page.getByRole("link", { name: "Sign In" }).click();

    await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

    await page.locator("[name=email]").fill("ramadan@abv.bg");
    await page.locator("[name=password]").fill("pass1234");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByText("Sign in Successful!")).toBeVisible();
});

test('Should show hotel search results', async ({ page }) => {
    await page.goto(UI_URL);

    await page.getByPlaceholder('Where are you going?').fill('Dublin');
    await page.getByRole('button',{name:'Search'}).click();

    await expect(page.getByText('Hotels found in Dublin')).toBeVisible();
    await expect(page.getByText('Dublin Getaways')).toBeVisible();
});