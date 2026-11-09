window.addEventListener("DOMContentLoaded", () => {
  const lookupBtn = document.getElementById("lookup");
  const lookupCitiesBtn = document.getElementById("lookup-cities");
  const result = document.getElementById("result");
  const countryInput = document.getElementById("country");

  function doLookup(extra = ""){
    const country = encodeURIComponent(countryInput.value.trim()); //encode the country input to be URL safe

    fetch(`world.php?country=${country}${extra}`) //ajax request to world.php with the country parameter
      .then((response) => {
        if (!response.ok) throw new Error("Request failed");
        return response.text();
      })
      .then((data) => {
        result.innerHTML = data;
      })
      .catch((error) => {
        result.textContent = "Something went wrong: " + error.message;
      });
  }

  lookupBtn.addEventListener("click", () => doLookup());
  lookupCitiesBtn.addEventListener("click", () => doLookup("&lookup=cities"));
});