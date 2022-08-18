import '@testing-library/jest-dom';
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App'

describe('T', () => {
  it('R', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId('email-input')
    const passwordInput = screen.getByTestId('password-input')
    const headingLogin = screen.getByRole('heading', { name: /login/i });
    const buttonEntrar = screen.getByTestId('login-submit-button');

    expect(emailInput).toBeVisible();
    expect(passwordInput).toBeVisible();
    expect(headingLogin).toBeVisible();
    expect(buttonEntrar).toBeVisible();
  });  
});
