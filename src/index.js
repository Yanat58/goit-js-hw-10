import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './js/get-refs';
import { fetchCountries } from './js/api-service';
import { quantityCountries } from './js/quantity-countries';
import { countryList, countryInfo } from './js/markup-template';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY));
refs.listCountry.addEventListener('click', onCountryClick);

function onCountryInput(e) {
  const countryName = refs.input.value.trim();
  if (countryName === '') {
    clearMarkup();
    return;
  }

  fetchCountries(countryName)
    .then(quantityCountries)
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
      clearMarkup();
      return error;
    })
    .finally(() => (refs.input.innerHTML = ''));
}

function onCountryClick(e) {
  const countryItem = e.target.closest('.country-item');
  if (!countryItem) return;

  const countryName =
    countryItem.querySelector('.country-item-name').textContent; // Отримуємо назву країни з натиснутого елемента
  refs.input.value = countryName; // Записуємо назву країни в інпут

  fetchCountries(countryName)
    .then(countries => {
      if (countries.length === 1) {
        refs.infoCountry.innerHTML = countryInfo(countries[0]); // Показуємо детальну інформацію про країну
        refs.listCountry.innerHTML = ''; // Очищаємо список країн
      }
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
      clearMarkup();
    })
    .finally(() => (refs.input.innerHTML = ''));
}

function clearMarkup() {
  refs.infoCountry.innerHTML = '';
  refs.listCountry.innerHTML = '';
}
