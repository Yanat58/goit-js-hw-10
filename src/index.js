import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';
import API from './js/api-service';
import getRefs from './js/get-refs';

const DEBOUNCE_DELAY = 300;
const refs = getRefs();
// refs = {
//   input: document.querySelector('#search-box'),
//   listCountry: document.querySelector('.country-list'),
//   infoCountry: document.querySelector('.country-info'),
// };

refs.input.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY));

function onCountryInput() {
  const countryName = refs.input.value;
  if (countryName === '') {
    return;
  }
  API.fetchCountries(countryName)
    .then(quantityCountries)
    .catch(error => {
      console.log(error);
    });
}

function quantityCountries() {
  if (country.length > 10) {
    Notify.failure(
      'Too many matches found. Please enter a more specific name.'
    );
  }
  if (country.length > 2 && country.length <= 10) {
  }
  if (country.length > 11) {
  }
}
