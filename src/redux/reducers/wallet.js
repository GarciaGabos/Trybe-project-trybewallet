// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  exchangeRates: {},
  expenses: [],
  editor: false,
  numberExpenses: 0,
  idToEdit: 0,
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
      expenses: [...state.expenses].filter((expense) => expense.id !== action.id),
    };
  case 'UPDATE_EXPENSE':
    return {
      ...state,
      expenses: [...action.expenses],
      editor: false,
      idToEdit: null,
    };
  case 'ID_TO_EDIT':
    return { ...state, idToEdit: action.id, editor: true };
  default:
    return state;
  }
};

export default wallet;
