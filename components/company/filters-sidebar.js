function parseCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

class FiltersSidebar extends HTMLElement {
  constructor() {
    super();

    function createPriceGraph() {
      const width = 13.875;
      const gap = 2;
      const amount = 16;
    
      return `
      <svg width="252" height="100" viewBox="0 0 252 100" xmlns="http://www.w3.org/2000/svg">
        ${Array(amount)
          .fill(0)
          .map(
            (_, i) => {
              const randomHeight = Math.floor(Math.random() * (100 - 22 + 1)) + 22;

              return `<rect x="${i * (width + gap)}" y="${
                100 - randomHeight
              }" width="${width}" height="${randomHeight}" fill="var(--primary)" />`
            }
          )}
        </svg>
    
      `;
    }

    this.innerHTML = `
      <style>
        aside#filters-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          border-radius: 8px;
          padding: 1.5rem;
          width: 300px;
        }

        aside#filters-sidebar header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          border-bottom: 1px solid #d4d4d8;
        }

        aside#filters-sidebar header h2 {
          font-size: 1.025rem;
          font-size: 600;
        }

        aside#filters-sidebar header button {
          border: none;
          padding: 0;

          background-color: transparent;
          color: var(--primary);

          font-size: 1rem;
          font-weight: 500;

          cursor: pointer;
        }

        aside#filters-sidebar > div {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        aside#filters-sidebar > div > label {
          text-transform: uppercase;
          font-size: 0.875rem;
          font-weight: 500;
        }

        aside#filters-sidebar fieldset input[type="radio"] {
          opacity: 0;
          width: 0px;
          height: 0px;
        }

        aside#filters-sidebar #price-range-filter {
          --range-width: 50%;

          position: relative;
        }

        aside#filters-sidebar #price-range-filter svg {
          width: 100%;
          height: auto;
        }

        aside#filters-sidebar #price-range-filter .price-range-img-overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: calc(100% - 3.25rem);
          width: var(--range-width);

          background-color: #fff5;
          margin-top: 1.75rem;
        }

        aside#filters-sidebar input[type="range"] {
          accent-color: var(--primary);
          cursor: grab;
        }

        aside#filters-sidebar input[type="range"]:active {
          cursor: grabbing;
        }

        aside#filters-sidebar input[type="range"]:focus-visible {
          outline-offset: 3px;
          outline: 3px solid var(--primary-opaque);
          border-radius: 999px;
        }

        aside#filters-sidebar #price-range-filter-value {
          font-size: 0.625rem;
          font-weight: 500;
          left: calc(var(--range-width) - 42px);
          width: 64px;
          position: absolute;
          text-align: center;
          bottom: -0.75rem;
          z-index: 10;
          background-color: #fff;
        }

        aside#filters-sidebar fieldset {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;

          border: none;
        }

        aside#filters-sidebar fieldset > div {
          height: fit-content;
          display: flex;
        }

        aside#filters-sidebar fieldset label {
          display: block;

          border-radius: 99px;
          padding: 0.5rem 0.75rem;
          border: 1px solid #d4d4d8;

          font-size: 0.75rem;
          font-weight: 500;
          line-height: 1;

          cursor: pointer;
        }

        aside#filters-sidebar fieldset input[type="radio"]:focus-visible + label {
          outline: 1px solid #fff;
          box-shadow: 0px 0px 0px 3px var(--primary-opaque);
        }

        aside#filters-sidebar fieldset input[type="radio"]:checked + label {
          background-color: var(--primary);
          color: var(--background);
          border-color: var(--primary);
        }

        @media (max-width: 750px) {
          aside#filters-sidebar {
            width: 100%;
            
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-auto-flow: dense;
          }
        }

        @media (max-width: 545px) {
          aside#filters-sidebar {
            grid-template-columns: 1fr;
          }
        }

      </style>

      <aside id="filters-sidebar" class="card">
        <header>
          <h2>Filtros</h2>
          <button>Limpar</button>
        </header>
        <div id="rent-type-filter">
          <label for="rent-type">Tipo de aluguel</label>
          <fieldset>
            <div>
              <input type="radio" name="rent-type" id="rent-by-hour" />
              <label for="rent-by-hour">Por hora</label>
            </div>
            <div>
              <input type="radio" name="rent-type" id="rent-by-day" />
              <label for="rent-by-day">Por dia</label>
            </div>
            <div>
              <input type="radio" name="rent-type" id="rent-by-month" checked />
              <label for="rent-by-month">Por mês</label>
            </div>
          </fieldset>
        </div>
        <div id="price-range-filter">
          <label for="price-range">Intervalo de preço</label>
          ${createPriceGraph()}
          <div class="price-range-img-overlay"></div>
          <input
            type="range"
            name="price-range"
            id="price-range"
            step="1"
            min="0"
            max="16"
          />
          <span id="price-range-filter-value">R$ 8.000</span>
        </div>
        <div id="release-year-filter">
          <label for="release-year">Ano de lançamento</label>
          <input type="range" name="release-year" id="release-year" min="2000" max="2023" step="1" />
        </div>
        <div id="transmission-filter">
          <label for="transmission">Transmissão</label>
          <fieldset>
            <div>
              <input
                type="radio"
                name="transmission"
                id="all-transmission"
                checked
              />
              <label for="all-transmission">Todos</label>
            </div>
            <div>
              <input type="radio" name="transmission" id="manual" />
              <label for="manual">Manual</label>
            </div>
            <div>
              <input type="radio" name="transmission" id="automatic" />
              <label for="automatic">Automática</label>
            </div>
          </fieldset>
        </div>
        <div id="fuel-filter">
          <label for="fuel">Combustível</label>
          <fieldset>
            <div>
              <input type="radio" name="fuel" id="all-fuel" checked />
              <label for="all-fuel">Todos</label>
            </div>
            <div>
              <input type="radio" name="fuel" id="gasoline" />
              <label for="gasoline">Gasolina</label>
            </div>
            <div>
              <input type="radio" name="fuel" id="eletric" />
              <label for="eletric">Elétrico</label>
            </div>
            <div>
              <input type="radio" name="fuel" id="hybrid" />
              <label for="hybrid">Híbrido</label>
            </div>
            <div>
              <input type="radio" name="fuel" id="other" />
              <label for="other">Outro</label>
            </div>
          </fieldset>
        </div>
      </aside>        
    `;

    const priceRangeContainer = document.querySelector("#price-range-filter");
    const priceRangeInput = priceRangeContainer.querySelector(
      'input[type="range"]'
    );
    const priceRangeValue = priceRangeContainer.querySelector(
      "#price-range-filter-value"
    );

    function setOpacityWidth() {
      const width = (priceRangeInput.value / 16) * 100;
      priceRangeContainer.style.setProperty("--range-width", `${width + (width > 50 ? 1 : 0)}%`);
      priceRangeValue.textContent = parseCurrency(
        priceRangeInput.value * 1000
      ).replace(",00", "");
    }

    priceRangeInput.addEventListener("input", setOpacityWidth);
    priceRangeInput.addEventListener("change", setOpacityWidth);
  }
}

customElements.define("app-filters-sidebar", FiltersSidebar);
