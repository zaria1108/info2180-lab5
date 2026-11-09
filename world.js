window.addEventListener("DOMContentLoaded", () => {
  const lookupBtn = document.getElementById("lookup");
  const result = document.getElementById("result");
  const countryInput = document.getElementById("country");

  lookupBtn.addEventListener("click", () => {
    const country = encodeURIComponent(countryInput.value.trim()); //encode the country input to be URL safe

    fetch(`world.php?country=${country}`) //ajax request to world.php with the country parameter
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
  });
});