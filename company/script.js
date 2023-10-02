const company = new URLSearchParams(window.location.search).get(
  "company"
);

(async () => {
  const response = await fetch(
    `/assets/companies/${company}/vehicles/list.json`
  );
  const vehiclesList = await response.json();

  const vehiclesListElement = document.querySelector("#vehicles-list");

  vehiclesList
    .filter(({ id }) => id !== "main")
    .forEach((vehicle) => {
      vehiclesListElement.innerHTML += `<app-vehicle-card data='${JSON.stringify(
        vehicle
      )}'></app-vehicle-card>`;
    });

  const mainVehicle = vehiclesList.find(({ id }) => id === "main");
  const heroSection = document.getElementById("hero");
  heroSection.querySelector("h1").textContent = mainVehicle.title;
  heroSection.querySelector(".tags").innerHTML = mainVehicle.tags
    .map(
      ({ icon, name }) =>
        `<app-benefit-tag icon="${icon}" text="${name}"></app-benefit-tag>`
    )
    .join("");
  heroSection.querySelector("p").textContent = mainVehicle.description;
})();