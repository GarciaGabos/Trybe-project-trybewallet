import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      cambio: 'BRL',
      despesa: 0,
    };
  }

  render() {
    const { cambio, despesa } = this.state;
    const { userEmail } = this.props;
    return (
      <>
        <div>Header</div>
        <p data-testid="email-field">
          Email:
          { userEmail }
        </p>
        <p data-testid="total-field">
          Despesa total:
          {' '}
          { despesa }
        </p>
        <p data-testid="header-currency-field">
          Moeda:
          {' '}
          { cambio }
        </p>
      </>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (store) => ({
  userEmail: store.user.email,
});

export default connect(mapStateToProps, null)(Header);
