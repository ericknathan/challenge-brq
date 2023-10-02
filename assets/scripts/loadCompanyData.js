(async () => {
  const company = new URLSearchParams(window.location.search).get("company");
  const response = await fetch("/assets/database/companies.json");

  const companiesList = await response.json();
  const companyData = companiesList.find(
    (companyItem) => companyItem.id === company
  );

  document.querySelector("body").style = `
    --primary: ${companyData.primary_color};
    --primary-opaque: ${companyData.primary_color}66;
    --primary-filter: ${companyData.filter};
  `;

  document.getElementById('company-name').innerText = companyData.name;
  document.getElementById('divider').style.display = 'block';
  document.getElementById('company-description').innerText = companyData.short_description;

  document.title = `Easy Aluga | ${companyData.name}`;

  localStorage.setItem(
    "@easy-aluga/company",
    JSON.stringify(companyData)
  );
})();
