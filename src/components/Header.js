import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      cambio: 'BRL',
    };
  }

  render() {
    const { cambio } = this.state;
    const { userEmail, expenses } = this.props;
    const totalExpenses = expenses.reduce((total, expense) => (
      total + Number(expense.value) * Number(expense.exchangeRates[expense.currency].ask)
    ), 0);

    return (
      <>
        <div>Header</div>
        <p data-testid="email-field">
          Email:
          {String(userEmail)}
        </p>
        <p data-testid="total-field">
          {totalExpenses.toFixed(2)}
        </p>
        <p data-testid="header-currency-field">
          Moeda:
          {cambio}
        </p>
      </>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.objectOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (store) => ({
  userEmail: store.user.email,
  expenses: store.wallet.expenses,
});

// Header.propTypes = {
//   expenses: PropTypes.arrayOf(
//     PropTypes.objectOf(
//       PropTypes.number,
//     ),
//   ).isRequired,
// };

export default connect(mapStateToProps, null)(Header);
