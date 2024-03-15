import { test, expect } from '@playwright/test';

/**
 * 1. Open the page
 * 2. Click at Get started
 * 3. Mouse hover the language dropdown
 * 4. Click at Java
 * 5. Check URL
 * 6. Check the text "Installing Playwright" is not being displayed
 * 7. Check the text below is displayed
 *
 * Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.
 */

test('Check Java page', async ({ page }) => {
  // Open the page
  await page.goto('https://playwright.dev/');

  // Click at Get started Button
  await page.getByRole('link', { name: 'Get started' }).click();

  //check the page
  await expect(page).toHaveTitle('Installation | Playwright');
  await expect(page.getByText('Installation')).toBeTruthy();

  // Mouse hover the language dropdown
  await page.getByRole('button', { name: 'Node.js' }).hover();
  // Click at Java
  await page.getByText('Java', { exact: true }).click();

  // Check the url
  await expect(page.url()).toBe('https://playwright.dev/java/docs/intro');

  // Check the text "Installing Playwright" is NOT displayed
  await expect(
    page.getByText('Installing Playwright', { exact: true })
  ).not.toBeVisible();

  const javaDescription =
    "Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.";

  await expect(page.getByText(javaDescription)).toBeVisible();
});
