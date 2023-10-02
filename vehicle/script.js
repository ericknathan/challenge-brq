const params = new URLSearchParams(window.location.search);
const company = params.get("company");
const vehicleId = params.get("vehicle");

(async () => {
  const [vehiclesResponse, { parseCurrency }] = await Promise.all([
    fetch(`/assets/companies/${company}/vehicles/list.json`),
    import("/assets/scripts/global.js"),
  ]);

  const vehiclesList = await vehiclesResponse.json();
  const vehicle = vehiclesList.find((vehicle) => vehicle.id === vehicleId);

  const vehicleDataContainer = document.getElementById("vehicle-data");
  vehicleDataContainer.querySelector("h1").textContent = vehicle.title;
  vehicleDataContainer.querySelector("h2 > span").textContent = parseCurrency(
    vehicle.month_value
  );
  vehicleDataContainer.querySelector("p").textContent = vehicle.description;
  vehicleDataContainer.querySelector(
    "div > img"
  ).src = `/assets/companies/${company}/vehicles/${vehicle.image}`;
  vehicleDataContainer.querySelector(
    "img#brand-image"
  ).src = `/assets/brands/${vehicle.brand.toLowerCase().replace(" ", "-")}.svg`;
  vehicleDataContainer.querySelector(".tags").innerHTML = vehicle.tags
    .map(
      ({ icon, name }) =>
        `<app-benefit-tag icon="${icon}" text="${name}"></app-benefit-tag>`
    )
    .join("");
  vehicleDataContainer.querySelector(".colors").innerHTML = vehicle.colors
    .map((color) => `<span style="border-color: ${color};"></span>`)
    .join("");

  vehicleDataContainer.querySelector("a").href = `/company/index.html?company=${company}`;
})();
