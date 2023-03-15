import './css/styles.css';

const DEBOUNCE_DELAY = 300;
function fetchCountries(name) {
  return featch(
    'https://restcountries.com/v3.1/name/{name}?fullText=true&fields=name,capital,population,flags.svg,languages'
  ).then;
}
