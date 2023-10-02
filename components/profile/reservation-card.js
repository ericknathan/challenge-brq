class ReservationCard extends HTMLElement {
  constructor() {
    super();

    const rawData = this.getAttribute("data");
    const data = JSON.parse(rawData);
    const isEnabled = this.getAttribute("enabled") === 'true';

    this.innerHTML = `
      <style>
        .reservation-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          border-radius: 8px;
          padding: 0.5rem;
          width: 350px;
        }

        .reservation-card img {
          width: 100%;
          background-color: #0001;
          border-radius: 6px;
        }

        .reservation-card > table {
          width: 100%;
          border-collapse: collapse;
          border-radius: 6px;
        }

        .reservation-card > table td {
          padding: 0.25rem;
          border: 1px solid #0004;
        }

        .reservation-card > table td:first-child {
          font-weight: 600;
        }

        .reservation-card button {
          height: 3rem;
        }

        .reservation-card button[data-disabled="true"] {
          opacity: 0.5;
          cursor: default;
        }
      </style>
    
      <div class="card reservation-card">
        <img
          src="/assets/companies/auto-ride/vehicles/${data.image}"
          alt=""
        />
        <header>
          <h3>${data.title}</h3>
          <span>ID: ${Math.random().toString(36).substr(2, 9)}</span>
        </header>
        <table>
          <tr>
            <td>Retirada:</td>
            <td>${data.reservation.from}</td>
          </tr>
          <tr>
            <td>Devolução:</td>
            <td>${data.reservation.to}</td>
          </tr>
          <tr>
            <td>Pagamento:</td>
            <td>${data.reservation.payment}</td>
          </tr>
          <tr>
            <td>Local:</td>
            <td>${data.reservation.location}</td>
          </tr>
        </table>
        <button onclick="openModal" id="button-${data.id}" data-variant="solid" data-disabled="${!isEnabled}">${isEnabled ? 'Ver chave' : 'Veículo já devolvido'}</button>

        <dialog id="key-dialog-${data.id}">
          <h3>
            Chave
            <form method="dialog">
              <button>
                X
              </button>
            </form>
          </h3>

          <div class="key-card">
            <footer>
              <div>
                <span><strong>Veículo:</strong> Fiat Mobi</span>
                <span><strong>Chave:</strong> 15609049</span>
              </div>
              <div>
                <span><strong>Validade:</strong> 12/10/23</span>
              </div>
            </footer>
          </div>
          <div class="vehicle-props">
            <div>
              <i class="ph-fill ph-car-profile"></i>
              <span>
                <strong>Carro</strong>
                Trancado
              </span>
            </div>
            <div>
              <i class="ph-fill ph-lightbulb"></i>
              <span>
                <strong>Luz</strong>
                Ligada
              </span>
            </div>
            <div>
              <i class="ph-fill ph-siren"></i>
              <span>
                <strong>Alarme</strong>
                Desligado
              </span>
            </div>
            <div>
              <i class="ph-fill ph-backpack"></i>
              <span>
                <strong>Bagageiro</strong>
                Trancado
              </span>
            </div>
          </div>
        </dialog>
      </div>
    `;

    document.querySelector(`#button-${data.id}`).addEventListener('click', () => openModal(data.id));
  }

}

customElements.define("app-reservation-card", ReservationCard);

function openModal(id) {
  const dialog = document.getElementById(`key-dialog-${id}`);
  dialog.showModal();
}