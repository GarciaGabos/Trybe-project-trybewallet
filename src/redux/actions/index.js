// Coloque aqui suas actions
export default function emailSaver(payload) {
  return {
    type: 'EMAIL_SAVER',
    email: payload };
}

// Ações envolvidas em pegar os tipos de moedas

const fetchAPIcurrencies = async () => {
  const currencies = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currenciesJson = await currencies.json();
  const withoutUSDT = Object.keys(currenciesJson).filter((element) => element !== 'USDT');
  // const arrayOfObj = Object.entries(currenciesJson).map((e) => ({ [e[0]]: e[1] }));
  // const USDTelement = arrayOfObj[1];
  // const arrayCorrect = arrayOfObj.filter((each) => each !== USDTelement);
  return withoutUSDT;
};

export const getCurrenciesAction = (currenciesFromAPI) => ({
  type: 'API_CURRENCIES',
  currencies: currenciesFromAPI,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    const response = await fetchAPIcurrencies();
    dispatch(getCurrenciesAction(response));
  };
}

// Ações envolvidas em pegar as taxas de câmbio;

const fetchAPIRates = async () => {
  const currencies = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currenciesJson = await currencies.json();
  // const arrayCorrec = Object.keys(currenciesJson).filter((element) => element !== 'USDT');
  // const arrayOfObj = Object.entries(currenciesJson).map((e) => ({ [e[0]]: e[1] }));
  // const USDTelement = arrayOfObj[1];
  // const arrayCorrec = arrayOfObj.filter((each) => each !== USDTelement);
  return currenciesJson;
};

export const fetchExchangeRatesAction = (exchangeFromAPI) => ({
  type: 'API_EXCHANGE_RATES',
  exchangeRates: exchangeFromAPI,
});

export function fetchExchangeRates() {
  return async (dispatch) => {
    const response = await fetchAPIRates();
    dispatch(fetchExchangeRatesAction(response));
  };
}

// Ação envolvida para salvar as expenses individuais;

export function expenseSaver(payload) {
  return {
    type: 'EXPENSES',
    expenses: payload };
}
