import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './js/get-refs';
import { fetchCountries } from './js/api-service';
import { countryList, countryInfo } from './js/markupTemplate';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY));

function onCountryInput(e) {
  refs.input.style.border = '2px solid rgb(54, 63, 189)';
  const countryName = refs.input.value.trim();
  if (countryName === '') {
    refs.infoCountry.innerHTML = '';
    refs.listCountry.innerHTML = '';
    return;
  }
  fetchCountries(countryName)
    .then(quantityCountries)
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
      refs.infoCountry.innerHTML = '';
      refs.listCountry.innerHTML = '';
      return error;
    })
    .finally(() => (refs.input.innerHTML = ''));
}

function quantityCountries(countries) {
  if (countries.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    refs.infoCountry.innerHTML = '';
    refs.listCountry.innerHTML = '';
    return;
  }
  if (countries.length >= 2 || countries.length <= 10) {
    const listMarkup = countries.map(country => countryList(country)).join('');
    refs.listCountry.innerHTML = listMarkup;
    refs.infoCountry.innerHTML = '';
  }
  if (countries.length === 1) {
    const infoMarkup = countries.map(country => countryInfo(country)).join('');
    refs.listCountry.innerHTML = '';
    refs.infoCountry.innerHTML = infoMarkup;
  }
}
