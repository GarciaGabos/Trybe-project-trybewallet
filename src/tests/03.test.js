import '@testing-library/jest-dom';
import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet'
import userEvent from '@testing-library/user-event';

const validDescription = 'teste de descrição';

describe('T', () => {

  it('R', () => {
    renderWithRouterAndRedux(<Wallet />);
    const emailDisplay = screen.getByTestId('email-field')
    const expenseDisplay = screen.getByTestId('total-field')
    expect(emailDisplay).toBeVisible();
    expect(expenseDisplay).toBeVisible();
  });  

  it('R', () => {
    renderWithRouterAndRedux(<Wallet />);
    const valueInput = screen.getByTestId('value-input')
    const descriptionInput = screen.getByTestId('description-input')
    const currencyInput = screen.getByTestId('currency-input')
    const methodInput = screen.getByTestId('method-input')
    const tagInput = screen.getByTestId('tag-input')
    const buttonAddExpense = screen.getByRole('button', {  name: /adicionar despesa/i})

    expect(valueInput).toBeVisible();
    expect(descriptionInput).toBeVisible();
    expect(currencyInput).toBeVisible();
    expect(methodInput).toBeVisible();
    expect(tagInput).toBeVisible();
    expect(buttonAddExpense).toBeVisible();
  }); 

  it('P', async() => {
    renderWithRouterAndRedux(<Wallet />);
    const buttonAddExpense = screen.getByRole('button', { name: /adicionar despesa/i });
    const descriptionInput = screen.getByTestId('description-input')

    await userEvent.type(descriptionInput, validDescription);
    userEvent.click(buttonAddExpense);

    await userEvent.type(descriptionInput, validDescription);
    userEvent.click(buttonAddExpense);

    await userEvent.type(descriptionInput, validDescription);
    userEvent.click(buttonAddExpense);


    await waitFor(async () => {
      const inputTest = await screen.findAllByText(/teste/i);
      expect(inputTest).toHaveLength(3);
    }, 
    {timeout: 1000});
  });  


  it('P', async () => {
    renderWithRouterAndRedux(<Wallet />);
    const descriptionInput = screen.getByTestId('description-input')   
    await userEvent.type(descriptionInput, validDescription);
    expect(descriptionInput).toHaveValue(validDescription);
  });
});