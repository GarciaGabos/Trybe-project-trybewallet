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
  case 'DELETE_EXPENSES':
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  default:
    return state;
  }
};

export default wallet;
