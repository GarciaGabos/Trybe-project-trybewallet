import { screen } from '@testing-library/react';
import React from 'react';
import jest from '@testing-library/jest-dom'
import WalletForm from '../components/WalletForm';
import { renderWithRedux } from '../tests/helpers/renderWith'
import userEvent from '@testing-library/user-event';

describe('Testando o componente WalletForm', () => {
  test('Testa se as opções estão disponíveis', () => {
    renderWithRedux(<WalletForm />);
    const selectTag = screen.getByTestId('tag-input');
    const selectMethod = screen.getByTestId('method-input');
    const selectCurrency = screen.getByTestId('currency-input');
    const descriptionInput = screen.getByTestId('description-input');
    const valueInput = screen.getByTestId('value-input');
    const buttonAddExpense = screen.getByText(/adicionar despesa/i);

    expect(selectTag && selectMethod && selectCurrency && descriptionInput && valueInput).toBeInTheDocument();

    userEvent.type(valueInput, '35');
    expect(valueInput).toHaveValue('35');

    // userEvent.selectOptions(selectCurrency, 'BRL');
    // expect(selectCurrency).toHaveValue('BRL');

    userEvent.selectOptions(selectMethod, 'Dinheiro');
    expect(selectMethod).toHaveValue('Dinheiro');

    userEvent.selectOptions(selectTag, 'Alimentação');
    expect(selectTag).toHaveValue('Alimentação');

    userEvent.type(descriptionInput, 'lets go');
    expect(descriptionInput).toHaveValue('lets go');

    userEvent.click(buttonAddExpense);
    expect(buttonAddExpense).toBeInTheDocument();
  });
})

// import React from 'react';
// import { renderWithRouterAndRedux } from './helpers/renderWith';
// import Wallet from '../pages/Wallet';

// describe('T', () => {
//   it('T', () => {
//     const {getByTestId} = renderWithRouterAndRedux(
//       <Wallet />
//       );

//     const valueInput = getByTestId('value-input')
//     const emailField = getByTestId('email-field')
//     const totalField = getByTestId('total-field')
//     const currencyField = getByTestId('header-currency-field')
//     const descriptionInput = getByTestId('description-input')
//     const currencyInput = getByTestId('currency-input')
//     const methodInput = getByTestId('method-input')
//     const tagInput = getByTestId('tag-input')

//     expect(valueInput).toBeInTheDocument();
//     expect(emailField).toBeInTheDocument();
//     expect(totalField).toBeInTheDocument();
//     expect(currencyField).toBeInTheDocument();
//     expect(descriptionInput).toBeInTheDocument();
//     expect(currencyInput).toBeInTheDocument();
//     expect(methodInput).toBeInTheDocument();
//     expect(tagInput).toBeInTheDocument();

//   })
// }) 