import React from 'react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';

describe('T', () => {
  it('T', () => {
    const {getByTestId} = renderWithRouterAndRedux(
      <Wallet />
      );

    const valueInput = getByTestId('value-input')
    const emailField = getByTestId('email-field')
    const totalField = getByTestId('total-field')
    const currencyField = getByTestId('header-currency-field')
    const descriptionInput = getByTestId('description-input')
    const currencyInput = getByTestId('currency-input')
    const methodInput = getByTestId('method-input')
    const tagInput = getByTestId('tag-input')

    expect(valueInput).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(totalField).toBeInTheDocument();
    expect(currencyField).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(currencyInput).toBeInTheDocument();
    expect(methodInput).toBeInTheDocument();
    expect(tagInput).toBeInTheDocument();

  })
}) 