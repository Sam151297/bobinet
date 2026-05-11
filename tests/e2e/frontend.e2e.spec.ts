import { expect, test } from '@playwright/test'

test.describe('Frontend', () => {
  test('can go on homepage', async ({ page }) => {
    await page.goto('http://localhost:3000')

    await expect(page).toHaveTitle(/Calvez Bobinet/)

    await expect(page.getByRole('heading', { level: 1, name: /Vins vivants/i })).toBeVisible()

    await expect(page.getByRole('heading', { name: /Sur le domaine/i })).toBeVisible()

    await page.goto('http://localhost:3000/vins')
    await expect(page.getByRole('link', { name: /^Amateüs Bobi$/ }).first()).toBeVisible()
  })
})
