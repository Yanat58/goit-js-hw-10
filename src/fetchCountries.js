function fetchCountries(name) {
  return featch(
    'https://restcountries.com/v3.1/name?fullText=true&fields=name,capital,population,flags,languages'
  ).then;
}
