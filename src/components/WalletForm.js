import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      valorDespesa: 0,
      descriçãoDespesa: '',
      moedaUsada: 'Real',
      metodoPagamento: 'Dinheiro',
      tipoDespesa: 'Alimentação',
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

   onInputChange = ({ target }) => {
     const { name, value } = target;
     this.setState({ [name]: value });
   }

   render() {
     const {
       valorDespesa,
       descriçãoDespesa,
       moedaUsada,
       metodoPagamento,
       tipoDespesa,
     } = this.state;

     const {
       currencies,
     } = this.props;

     return (
       <>
         <div>WalletForm</div>
         <form>
           <label htmlFor="value-input">
             Valor da despesa:
             <input
               data-testid="value-input"
               type="number"
               name="valorDespesa"
               value={ valorDespesa }
               onChange={ this.onInputChange }
             />
           </label>

           <label htmlFor="description-input">
             Descrição da despesa:
             <textarea
               data-testid="description-input"
               name="descriçãoDespesa"
               value={ descriçãoDespesa }
               onChange={ this.onInputChange }
             />
           </label>

           <label htmlFor="currency-input">
             Moeda usada:
             <select
               data-testid="currency-input"
               name="moedaUsada"
               value={ moedaUsada }
               onChange={ this.onInputChange }
             >
               {
                 currencies.map((element) => (
                   <option
                     name="cadaMoeda"
                     value={ element }
                     key={ element }
                   >
                     { element }
                   </option>
                 ))
               }
             </select>
           </label>

           <label htmlFor="method-input">
             Método de pagamento:
             <select
               data-testid="method-input"
               name="metodoPagamento"
               value={ metodoPagamento }
               onChange={ this.onInputChange }
             >
               <option value="Dinheiro">Dinheiro</option>
               <option value="Cartão de crédito">Cartão de crédito</option>
               <option value="Cartão de débito">Cartão de débito</option>
             </select>
           </label>

           <label htmlFor="tag-input">
             Tipo de despesa:
             <select
               data-testid="tag-input"
               name="tipoDespesa"
               value={ tipoDespesa }
               onChange={ this.onInputChange }
             >
               <option value="Alimentação">Alimentação</option>
               <option value="Lazer">Lazer</option>
               <option value="Trabalho">Trabalho</option>
               <option value="Saúde">Saúde</option>
               <option value="Transporte">Transporte</option>
             </select>
           </label>

           {/* <button
            type="submit"
            data-testid="save-button"
            name="save"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button> */}
         </form>
       </>
     );
   }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = (store) => ({
  currencies: store.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
