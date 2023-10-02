class DiscoveryVehicleSection extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <style>
        #discovery-vehicle {
          padding: 5.25rem 0;
        }

        #discovery-vehicle .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        #discovery-vehicle .container .texts-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          gap: 1rem;

          max-width: 29.75rem;
        }

        #discovery-vehicle .container .texts-container h2 {
          font-size: 2.5rem;
          font-weight: 700;
        }

        #discovery-vehicle .container .texts-container p {
          font-size: 1.125rem;
          line-height: 2rem;
        }

        #discovery-vehicle .container .texts-container button {
          margin-top: 1.5rem;
        }
        
        #discovery-vehicle .container > img {
          max-width: 50vw;
        }
        
        @media only screen and (max-width: 990px) {
          #discovery-vehicle .container > img {
            max-width: 40vw;
          }
        }
        
        @media only screen and (max-width: 800px) {
          #discovery-vehicle .container > img {
            width: 100%;
            max-width: 30rem;
          }

          #discovery-vehicle .container {
            flex-direction: column;
          }

          #discovery-vehicle .container .texts-container {
            align-items: center;
            text-align: center;
          }
        }
      </style>
    
      <section id="discovery-vehicle">
        <div class="container">
          <img
            src="/assets/images/vehicles-grid.png"
            alt="Uma grade de veículos em sequência: um carro esportivo azul estacionado, uma moto preta com um motoqueiro em uma curva, um trator agronomo verde estacionado e um caminhão branco em uma rodovia. Eles simbolizam a versatilidade que a Easy Aluga oferece para empresas que querem ter seu próprio serviço de locação de veículos."
          />
          <div class="texts-container">
            <h2>Flexibilidade e opções que se adequam em seu estilo de vida.</h2>
            <p>Uma plataforma de locação de veículos projetada para atender às suas necessidades específicas, oferecendo uma experiência de aluguel de veículos personalizada e conveniente.</p>
            <a href="/form/index.html">
              <button data-variant="solid">
                Cadastrar minha empresa
                <img src="/assets/icons/ph_lightbulb.svg" alt="" />
              </button>
            </a>
          </div>
        </div>
      </secti>
    `;
  }
}

customElements.define("app-discovery-vehicle-section", DiscoveryVehicleSection);
