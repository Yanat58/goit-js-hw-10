export function countryList({ flags, name }) {
  return `
  <li class="country-item">
  <img class="country-flags" src ="${flags.svg}" alt ="${name.common}" width="40" />
  <p class="country-item-name">${name.common}</p>
</li>
  `;
}

export function countryInfo({ flags, name, capital, population, languages }) {
  return `
  
  <div class="country">
  <img class="country-flags"
    src ="${flags.svg}" alt ="${name.common}" width="70"
  />
  <h2 class="country-name">${name.common}</h2>
 </div>
 <div class="country-text">
  <p><span class="country-title">Official name:</span> <span class="country-item-name" > ${
    name.official
  }</span></p>
  <p><span class="country-title">  Capital:</span> ${capital}</p>
  <p><span class="country-title"> Population: </span> ${population}</p>
  <p><span class="country-title"> Languages:</span> ${Object.values(
    languages
  )}</p>
 </div>
  `;
}
