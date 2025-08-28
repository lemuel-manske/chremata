import { test, expect } from '@playwright/test';

test('it should add an expense with valid amount and due date', async ({
  page,
}) => {
  await page.goto('/');

  test.step('fill "add an expense" form', async () => {
    const form = page.getByRole('form', { name: 'Add Expense' });

    const amountField = form.getByRole('textbox', { name: 'Amount' });

    await amountField.fill('81.52');

    const dueDate = form.getByRole('textbox', { name: 'Due Date' });

    await dueDate.fill('2023-12-31');

    const addExpenseButton = page.getByRole('button', { name: 'Add Expense' });

    await addExpenseButton.click();
  });

  const successMessage = page.getByRole('dialog').filter({
    hasText: 'Expense added successfully',
  });

  await expect(successMessage).toBeVisible();
});
