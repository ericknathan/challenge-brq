const company = new URLSearchParams(window.location.search).get("company");

(async () => {
  const response = await fetch(
    `/assets/companies/${company}/vehicles/list.json`
  );
  const vehiclesList = await response.json();

  const filteredVehicles = vehiclesList
    .filter((vehicle) => vehicle.id !== "main")
    .slice(0, 3);
  const reservationsList = document.getElementById("reservations-list");

  filteredVehicles[0].reservation = {
    from: "23/05/2023",
    to: "26/05/2023",
    payment: "Visa **** **** 9857",
    location: "Aeroporto de Congonhas",
  };

  filteredVehicles[1].reservation = {
    from: "23/05/2023",
    to: "26/05/2023",
    payment: "Mastercard **** **** 1809",
    location: "Unidade Barra Funda",
  }
  
  filteredVehicles[2].reservation = {
    from: "23/05/2023",
    to: "26/05/2023",
    payment: "Amex **** **** 8291",
    location: "Unidade Barra Funda",
  }

  console.log(filteredVehicles);

  filteredVehicles.forEach((vehicle, index) => {
    reservationsList.innerHTML += `<app-reservation-card data='${JSON.stringify(
      vehicle
    )}' index='${index}' ${
      index === 0 ? 'enabled="true"' : ""
    }></app-reservation-card>`;
  });
})();
