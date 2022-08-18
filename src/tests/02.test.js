import '@testing-library/jest-dom';
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App'

const validEmail = 'test@mail.com';
const validPassword = '123456789'
const invalidEmail = 'teste!mail';
const invalidPassword = '1231'

describe('T', () => {
  it('P', () => {
    renderWithRouterAndRedux(<App />);
    const buttonEntrar = screen.getByTestId('login-submit-button');

    expect(buttonEntrar).toBeInTheDocument();

    const emailInput = screen.getByTestId('email-input')
    const passwordInput = screen.getByTestId('password-input')

    expect(passwordInput).toBeVisible();
    expect(emailInput).toBeVisible();

    userEvent.type(emailInput, validEmail);    
    expect(emailInput).toHaveValue(validEmail);

    userEvent.type(passwordInput, validPassword);
    expect(passwordInput).toHaveValue(validPassword);

  });
  it('R', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const buttonEntrar = screen.getByTestId('login-submit-button');

    const emailInput = screen.getByTestId('email-input')
    const passwordInput = screen.getByTestId('password-input')

    await userEvent.type(emailInput, validEmail);
    await userEvent.type(passwordInput, validPassword);
    userEvent.click(buttonEntrar);

    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');

  });
  it('D', async () => {
    renderWithRouterAndRedux(<App />);
    const buttonEntrar = screen.getByTestId('login-submit-button');

    expect(buttonEntrar).toBeInTheDocument();

    const emailInput = screen.getByTestId('email-input')
    const passwordInput = screen.getByTestId('password-input')

    expect(passwordInput).toBeVisible();
    expect(emailInput).toBeVisible();

    await userEvent.type(emailInput, invalidEmail);
    expect(emailInput).toHaveValue(invalidEmail);

    await userEvent.type(passwordInput, invalidPassword);
    expect(passwordInput).toHaveValue(invalidPassword);

    expect(buttonEntrar).toBeDisabled();

  });
}); 