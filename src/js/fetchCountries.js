export const fetchCountries = name => {
  const ADDRESS_URL = 'https://restcountries.com/v3.1/name/';
  const countryInfo = 'fields=name,capital,population,flags,languages';

  return fetch(`${ADDRESS_URL}${name}?${countryInfo}`).then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
