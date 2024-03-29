let searchBtn = document.querySelector(".searchBtn");
let countryInput = document.getElementById("countryInput");
let result = document.getElementById("resultBox");

searchBtn.addEventListener("click", () => {
  let countryName = countryInput.value;
  let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalUrl);
  // console.log(countryName);
  fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // console.log(data[0]);
      // console.log(data[0].altSpellings[1]);
      result.innerHTML = `<img src="${data[0].flags.svg}" class="flags-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
           <div class="data-wrapper">
              <h4>Capital:</h4>
              <span>${data[0].capital[0]}</span>
           </div>
        </div>
        <div class="wrapper">
           <div class="data-wrapper">
              <h4>Continent:</h4>
              <span>${data[0].continents[0]}</span>
           </div>
        </div>
        <div class="wrapper">
           <div class="data-wrapper">
              <h4>Population:</h4>
              <span>${data[0].population}</span>
           </div>
        </div>
        <div class="wrapper">
           <div class="data-wrapper">
              <h4>Currency:</h4>
              <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
           </div>
        </div>
        <div class="wrapper">
           <div class="data-wrapper">
              <h4>Common Languages:</h4>
              <span>${Object.values(data[0].languages)
               .toString()
               .split(",")
               .join(",")}</span>
           </div>
        </div>
        `;
    })
    .catch(() => {
      if(countryInput.value == 0){
         result.innerHTML = `<h3>The input field cannot be empty</h3>`;
      } else {
         result.innerHTML = `<h3>Please enter a valid Country name!</h3>`
      }
    });
});
