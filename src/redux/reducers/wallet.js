// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  exchangeRates: {},
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'API_CURRENCIES':
    return {
      ...state,
      currencies: action.currencies,
    };
  case 'API_EXCHANGE_RATES':
    return {
      ...state,
      exchangeRates: action.exchangeRates,
    };
  case 'EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };

  default:
    return state;
  }
};

export default wallet;
