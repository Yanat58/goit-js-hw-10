import { refs } from './get-refs';
import { countryList, countryInfo } from './markup-template';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function quantityCountries(countries) {
  if (countries.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    refs.infoCountry.innerHTML = '';
    refs.listCountry.innerHTML = '';
    return;
  }
  if (countries.length <= 10) {
    const listMarkup = countries.map(country => countryList(country)).join('');
    refs.listCountry.innerHTML = listMarkup;
    refs.infoCountry.innerHTML = '';
  }
  if (countries.length === 1) {
    const infoMarkup = countryInfo(countries[0]);
    refs.listCountry.innerHTML = '';
    refs.infoCountry.innerHTML = infoMarkup;
  }
}
