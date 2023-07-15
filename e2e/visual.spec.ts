import { test, expect } from "@playwright/test";
import * as creds from "./constants";

test("Visual test for counter", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  await page.getByPlaceholder("User name").fill(creds.userName as string);
  await page.getByPlaceholder("Password").fill(creds.password as string);
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByAltText("logo").waitFor();
  await expect(page).toHaveScreenshot();
});
