import { test, expect } from "@playwright/test";
import * as creds from "./constants";

test.describe("Counter", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/login");
    await page.getByPlaceholder("User name").fill(creds.userName as string);
    await page.getByPlaceholder("Password").fill(creds.password as string);
    await page.getByRole("button", { name: "Submit" }).click();
  });

  test("Increase counter", async ({ page }) => {
    await page.getByRole("button", { name: "+" }).click();
    await expect(page.getByTestId("Count")).toHaveText(/1/);
  });

  test("Decrease counter", async ({ page }) => {
    await page.getByRole("button", { name: "+" }).click();
    await page.getByRole("button", { name: "+" }).click();
    await page.getByRole("button", { name: "+" }).click();
    await page.getByRole("button", { name: "-" }).click();
    await expect(page.getByTestId("Count")).toHaveText(/2/);
  });
});
