import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import emailSaver from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loginButtonDisabled: true,
      emailName: '',
      emailPassword: '',
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value },
    () => this.loginConditions());
  };

  loginConditions = () => {
    const minLength = 6;
    const emailConditions = /\S+@\S+\.\S+/;
    const { emailName, emailPassword } = this.state;
    if (emailConditions.test(emailName) && emailPassword.length >= minLength) {
      this.setState({ loginButtonDisabled: false });
    } else {
      this.setState({ loginButtonDisabled: true });
    }
  }

  onLoginClick = () => {
    const { history, email } = this.props;
    const { emailName } = this.state;
    email(emailName);
    history.push('/carteira');
  }

  render() {
    const { loginButtonDisabled, emailName, emailPassword } = this.state;
    return (
      <form>
        <input
          name="emailName"
          type="text"
          data-testid="email-input"
          onChange={ this.onInputChange }
          value={ emailName }
        />
        <input
          name="emailPassword"
          type="text"
          data-testid="password-input"
          onChange={ this.onInputChange }
          value={ emailPassword }
        />
        <button
          name="loginButton "
          type="button"
          data-testid="login-submit-button"
          disabled={ loginButtonDisabled }
          onClick={ this.onLoginClick }
        >
          Entrar

        </button>
      </form>);
  }
}

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  email: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  email: (emailLogin) => dispatch(emailSaver(emailLogin)),
});

export default connect(null, mapDispatchToProps)(Login);
