class HeroSection extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <style>
        #hero {
          position: relative;
        
          display: flex;
          align-items: center;
          justify-content: space-between;
        
          background: url(/assets/images/background.png) no-repeat center;
          background-size: cover;
          height: calc(92vh - 6.25rem);
        }
        
        #hero .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        #hero .container > div {
          flex: 1;
          max-width: 33rem;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        
        #hero .container .texts-container h1 {
          font-size: 3rem;
          font-weight: 700;
          line-height: 140%;
        }
        
        #hero .container .texts-container h1 span {
          position: relative;
        }
        
        #hero .container .texts-container h1 span img {
          position: absolute;
          width: 75%;
          height: auto;
          bottom: -4px;
          right: 4px;
        }
        
        #hero .container .texts-container p {
          color: #71717a;
          line-height: 150%;
        }
        
        #hero .container .buttons-container {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        #hero #hero-image {
          position: absolute;
          /* top: 50%; */
          right: 0;
          transform: translateY(-50%);
        
          max-height: 80%;
          max-width: 45%;
        
          object-fit: cover;
        
          transition: all 0.2s ease-in-out;
        }
        
        @media only screen and (max-width: 850px) {
          #hero #hero-image {
            max-width: 40%;
          }
        }

        @media only screen and (max-width: 760px) {
          #hero .container > div {
            margin: 0 auto;
          }
        
          #hero .container .texts-container h1 {
            font-size: 2.5rem;
          }
        
          #hero #hero-image {
            display: none;
          }
        }
      </style>
    
      <section id="hero">
        <div class="container">
          <div>
            <div class="texts-container">
              <h1 class="animate__animated animate__fadeInUp">
                Aventure-se em uma nova
                <span>
                  experiência
                  <img src="/assets/images/title-detail.svg" alt="" />
                </span>
                na locação de veículos
              </h1>
              <p class="animate__animated animate__fadeInUp animate__slow">
                Experimente o poder do aluguel de veículos perfeito com nossa
                solução. Leve o desempenho a novos patamares e aproveite a
                colaboração multifuncional como nunca antes.
              </p>
            </div>
            <div class="buttons-container">
              <a href="/form/index.html">
                <button data-variant="solid" class="animate__animated animate__fadeInLeft">
                  Cadastrar minha empresa
                  <img src="/assets/icons/ph_lightbulb.svg" alt="" />
                </button>
              </a>
              <a href="#our-clients">
                <button data-variant="link" class="animate__animated animate__fadeInLeft animate__fast">
                  Nossos clientes
                </button>
              </a>
            </div>
          </div>
        </div>
        <img
          class="animate__animated animate__fadeInRight" id="hero-image"
          src="/assets/images/car-image.png"
          alt="Um veículo automotivo pessoal branco com circulos de gradiente ao seu redor e a escrita 'Easy Aluga' em sua placa"
        />
      </section>
    `;
  }
}

customElements.define("app-hero-section", HeroSection);
