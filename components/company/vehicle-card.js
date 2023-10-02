function parseCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

class VehicleCard extends HTMLElement {
  constructor() {
    super();

    const rawData = this.getAttribute("data");
    const data = JSON.parse(rawData);
    const company = new URLSearchParams(window.location.search).get("company");

    this.innerHTML = `
      <style>
        .vehicle-card {
          position: relative;

          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          
          color: inherit;

          width: 100%;
          padding: 1.5rem;
          border-radius: 8px;

          cursor: pointer;
          text-decoration: none;
        }

        .vehicle-card:focus-visible {
          outline: 1px solid var(--background);
          box-shadow: 0px 0px 0px 4px var(--primary-opaque);
        }

        .vehicle-card header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          width: 100%;
          text-align: start;
        }

        .vehicle-card footer {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-top: 0.5rem;
          width: 100%;
        }

        .vehicle-card footer .tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .vehicle-card footer h4 {
          font-size: 1rem;
          font-weight: 700;
        }

        .vehicle-card footer small {
          font-size: .75rem;
          font-weight: 500;
        }

        @keyframes ping {
          75%,
          to {
            transform:scale(2);
            opacity:0;
          }
        }

        .vehicle-card #eletric-ping {
          position: relative;
          top: 2px;
          display: inline-flex;

          width: 1rem;
          height: 1rem;

          transform: scale(0.75);
        }

        .vehicle-card #eletric-ping * {
          display: inline-flex;

          width: 1rem;
          height: 1rem;
          border-radius: 999px;

          background-color: #09E85E;
        }        

        .vehicle-card #eletric-ping .ripple {
          position: absolute;
          opacity: 0.75;

          width: 100%;
          height: 100%;

          animation: ping 1s cubic-bezier(0,0,.2,1) infinite;
        }
      </style>
    
      <a class="vehicle-card card" href="/vehicle/index.html?company=${company}&vehicle=${data.id}">

        <header>
          <div>
            <h3>${data.title} 
            ${data.fuel === "elétrico" ? `
              <span id="eletric-ping">
                <div class="ripple"></div>
                <div class="ping"></div>
              </span>
            ` : ''}</h3>
            <span>Veículo ${data.fuel}</span>
          </div>
          <div class="colors">
            ${data.colors
              .map((color) => `<span style="border-color: ${color};"></span>`)
              .join("")}
          </div>
        </header>
        <img src="/assets/companies/${company}/vehicles/${data.image}" alt="">
        <footer>
          <div class="tags">
            ${data.tags
              .map(
                ({ icon, name }) =>
                  `<app-benefit-tag icon="${icon}" text="${name}"></app-benefit-tag>`
              )
              .join("")}
          </div>
          <h4>${parseCurrency(data.month_value)}<small>/mês</small></h4>
        </footer>
      </a>
    `;
  }
}

customElements.define("app-vehicle-card", VehicleCard);
