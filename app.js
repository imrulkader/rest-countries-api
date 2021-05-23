fetch('https://restcountries.eu/rest/v2/all')
.then(res=> res.json())
.then(data => displayCountries(data))

const displayCountries = countries =>{
    const countriesDiv = document.getElementById('countries')
    // for (let i = 0; i < countries.length; i++) {
    //    const country = countries[i];
       
        // const p = document.createElement('p');
        // p.innerText = country.name;
        // const h3 = document.createElement('h3');
        // h3.innerText = country.capital;
        // countryDiv.appendChild(h3);
        // countryDiv.appendChild(p);
       
        countries.forEach(country => {
            const countryDiv = document.createElement('div');
            countryDiv.className = 'country'
            const countryInfo = `
            <h3 class='country-name'>${country.name}</h3>
            <p> ${country.capital} </p>
            <button onClick="displayCountryDetails('${country.name}')"> Details </button>
            `
            countryDiv.innerHTML = countryInfo
        
            countriesDiv.appendChild(countryDiv);
        });
   
}
const displayCountryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res=> res.json())
    .then(data=> renderCountryInfo(data[0]));
    
}
const renderCountryInfo = country => {
console.log(country);
const countryDiv = document.getElementById('countryDetail');
countryDiv.innerHTML = `
<h2>${country.name}</h2>
<h5>Population: ${country.population}</h5>
<h6>Area: ${country.area}</h6>
<img src="${country.flag}">
`
}

