function fetchData() {
 return new Promise((resolve) => {
     setTimeout(() => {
         resolve("Data fetched successfully");
     }, 2000);
 });
} 
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5; // 50% chance to succeed
        if (success) {
          resolve("Data fetched successfully");
        } else {
          reject("Failed to fetch data");
        }
      }, 2000);
    });
  }
  
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Data fetched successfully");
            } else {
                reject("Failed to fetch data")
            }
        }, 2000);
    })
}
async function testFetchData() {
    try {
        const message = await fetchData();
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}
//Test the function
testFetchData();

async function getCountryData() {
    const apiURL = "https://restcountries.com/v3.1/all";
    const countryDataDiv = document.getElementById('country-data');
    const errorMessageDiv = document.getElementById('error-message');
  
    try {
      const response = await fetch(apiURL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data); // Log the data to the console
  
      // Display the data on the webpage
      countryDataDiv.innerHTML = data.map(country => `
        <div>
          <h2>${country.name.common}</h2>
          <p>Population: ${country.population}</p>
          <p>Region: ${country.region}</p>
          <p>Subregion: ${country.subregion}</p>
        </div>
      `).join('');
    } catch (error) {
      console.error('Fetch error:', error);
      errorMessageDiv.textContent = `Error: ${error.message}`;
    }
  }
  
  // Call the function
  getCountryData();