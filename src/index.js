import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchCountries from './js/api-service';
import { refs } from './js/get-refs';

const DEBOUNCE_DELAY = 300;

// const refs = {
//   input: document.querySelector('#search-box'),
//   listCountry: document.querySelector('.country-list'),
//   infoCountry: document.querySelector('.country-info'),
// };
fetchCountries(name)
  .then(responce => console.log(responce.json))
  .catch(error => {
    console.log(error);
  });

// refs.input.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY));

// function onCountryInput() {
//   const countryName = refs.input.value;
//   if (countryName === '') {
//     return;
//   }
//   fetchCountries(countryName)
//     .then(quantityCountries)
//     .catch(error => {
//       console.log(error);
//     });
// }

// function quantityCountries() {
//   // refs.listCountry.innerHTML = countryLict;
//   // refs.infoCountry.innerHTML = countryInfo;

//   if (countries.length > 10) {
//     return Notify.info(
//       'Too many matches found. Please enter a more specific name.'
//     );
//   }
//   if (countries.length > 2 && countries.length <= 10) {
//     const markUp = countryLict(flag, name);
//     return countrys
//       .map(country => {
//         countryLict;
//       })
//       .join('');
//     refs.listCountry.innerHTML = markUp;
//   }
//   if ((countries.length = 1)) {
//     return countryLict;
//     return countryInfo;
//   }
// }

// function countryLict({ flags, name }) {
//   return `
//   <li class="country-choice">
//   <img class="country-flags" src ="${flags.svg}" alt ="${name.official}"" />
//   <h2 class="coutry-name">${name.official}}</h2>
// </li>
//   `;
// }

// function countryInfo({ flags, name, capital, population, languages }) {
//   return `
//   <div class="country-info">
//   <div class="country">
//   <img class="country-flags"
//     src ="${flags.svg}" alt ="${name.official}"
//   />
//   <h2 class="coutry-name">${name.official}</h2>
//  </div>
//   <p class="country-capital">Capita: ${capital}</p>
//   <p class="country-population">Population: ${population}</p>
//   <p class="country-languages">Languages: ${languages}</p>
//  </div>
//   `;
// }
