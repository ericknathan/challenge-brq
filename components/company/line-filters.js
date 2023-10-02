class LineFilters extends HTMLElement {
  constructor() {
    super();

    const vehicleModels = [
      "T-Cross",
      "Golf",
      "Jetta",
      "Virtus",
      "Nivus",
      "Tiguan",
    ];

    const vehicleBrands = [
      "Volkswagen",
      "Audi",
      "Mercedes Benz",
      "Ford",
      "Tesla",
      "Jeep",
    ];

    const cities = [
      "São Paulo",
      "Barueri",
      "Osasco",
      "Santana de Parnaíba",
      "Carapicuíba",
      "Cotia",
      "Jandira",
      "Itapecerica da Serra",
      "Embu das Artes",
      "Embu Guaçu",
      "Taboão da Serra",
      "Cajamar",
      "Francisco Morato",
      "Jundiaí",
      "Várzea Paulista"
    ]

    this.innerHTML = `
      <style>
        #filters {
          display: flex;
          gap: 1rem;

          min-height: 4rem;
          width: 100%;
        }

        #filters fieldset {
          display: flex;
          flex-wrap: wrap;
          flex: 1;

          height: 100%;
          border-radius: 8px;
        }

        #filters fieldset > div {
          position: relative;
          border-right: 1px solid #f4f4f5;
          height: 4rem;
          flex: 1;
          min-width: 215px;
        }

        #filters fieldset > div > label {
          position: absolute;
          top: 1rem;
          left: 1.5rem;

          color: #71717a;

          font-size: 0.625rem;
          font-weight: 500;
          text-transform: uppercase;
        }

        #filters fieldset > div select,
        #filters fieldset > div input[type="text"] {
          position: absolute;
          inset: 0;

          width: 100%;
          height: 100%;
          padding: 1rem 1.5rem 0 1.5rem;

          border: none;
          background: transparent;

          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          text-indent: 1px;
          text-overflow: "";
        }

        #filters fieldset > div select:invalid {
          color: gray;
        }

        #filters fieldset > div select option {
          color: black;
        }


        #filters fieldset > div#date-inputs {
          flex: 1.25;
          min-width: 260px;
        }

        #filters fieldset > div select:focus,
        #filters fieldset > div input[type"text"]:focus {
          outline: none;
        }

        #filters fieldset > div#date-inputs div:focus-within,
        #filters fieldset > div select:focus-visible,
        #filters fieldset > div input[type="text"]:focus-visible {
          outline: 3px solid var(--primary-opaque);
          border-radius: 4px;
        }

        #filters fieldset > div#date-inputs div {
          display: flex;
          height: 100%;
        }

        #filters fieldset > div input[type="date"]:focus {
          outline: none;
        }

          #filters fieldset > div input[type="date"] {
          width: 50%;
          height: 100%;
          padding: 1rem 1.5rem 0 1.5rem;

          border: none;
          background: transparent;
        }

        #filters fieldset > div input[type="date"]:first-child {
          padding-right: 0;
        }

        #filters fieldset > div input[type="date"]:last-child {
          padding-left: 0;
          margin-left: -0.5rem;
        }

        #filters input::-webkit-outer-spin-button,
        #filters input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        #filters input::-webkit-calendar-picker-indicator,
        #filters datalist::-webkit-calendar-picker-indicator {
          display: none;
          background-color: transparent;
          opacity: 0;
        }

        #filters fieldset > div > i {
          position: absolute;
          top: 50%;
          right: 1.5rem;
          transform: translateY(-50%);

          font-size: 1.25rem;

          pointer-events: none;
        }

        #filters > button {
          padding-left: 4rem;
          padding-right: 4rem;
        }

        @media (max-width: 750px) {
          #filters {
            flex-direction: column;
          }
        }
      </style>
    
      <form action="" id="filters">
        <fieldset class="card">
          <div>
            <label for="brand">Marca produtora</label>
            <select name="brand" id="brand" required>
              <option value="" disabled selected hidden>Selecione uma marca</option>
              ${vehicleBrands
                .map(
                  (brand) =>
                    `<option value="${brand.toLowerCase()}">${brand}</option>`
                )
                .join("")}
            </select>
            <i class="ph-caret-down"></i>
          </div>
          <div>
            <label for="model">Modelo do carro</label>
            <select name="model" id="model" required>
              <option value="" disabled selected hidden>Selecione um modelo</option>
              ${vehicleModels
                .map(
                  (model) =>
                    `<option value="${model.toLowerCase()}">${model}</option>`
                )
                .join("")}
            </select>
            <i class="ph-caret-down"></i>
          </div>
          <div>
            <label for="place">Localidade</label>
            <input type="text" id="place" list="place-options" placeholder="Nome da cidade" />
            <datalist id="place-options">
              ${
                cities
                  .map((city) => `<option value="${city}"></option>`)
                  .join("")
              }
            </datalist>
            <i class="ph-map-pin"></i>
          </div>
          <div id="date-inputs">
            <label for="date-from">Data de locação e devolução</label>
            <div>
              <input type="date" name="date-from" id="date-from" />
              <input type="date" name="date-to" id="date-to" />
            </div>
            <i class="ph-calendar-blank"></i>
          </div>
        </fieldset>
        <button data-variant="solid" type="button">
          Pesquisar <i class="ph-magnifying-glass"></i>
        </button>
      </form>
    `;
  }
}

customElements.define("app-line-filters", LineFilters);
