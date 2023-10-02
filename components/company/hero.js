class HeroSection extends HTMLElement {
  constructor() {
    super();

    const company = new URLSearchParams(window.location.search).get("company");

    this.innerHTML = `
      <style>
        #hero {
          display: flex;
          align-items: center;
        
          border-radius: 10px;
          margin-top: 3rem;
        }
        
        #hero .content {
          padding: 3rem 0.25rem 3rem 3rem;
        }
        
        #hero .content h1 {
          font-size: 3rem;
          font-weight: bold;
        }

        #hero .content .tags {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin: 0.5rem 0;
        }
        
        #hero .content .buttons {
          display: flex;
          gap: 0.75rem;
        
          margin-top: 1.5rem;
        }
        
        #hero > img {
          padding: 3rem 3rem 3rem 0;
        }

        @media (max-width: 1050px) {
          #hero {
            flex-direction: column;
          }
        
          #hero .content {
            padding: 3rem 3rem 3rem 3rem;
          }
        
          #hero > img {
            padding: 0 3rem 3rem 3rem;
            max-width: 100%;
          }
        }
      </style>
    
      <div id="hero" class="card">
        <div class="content">
          <h1></h1>
          <div class="tags"></div>
          <p></p>
          <div class="buttons">
            <a href="/vehicle/index.html?company=${company}&vehicle=main"><button data-variant="solid">Alugar veículo</button></a>
            <a href="#vehicles-list"><button data-variant="link">Ver semelhantes</button></a>
          </div>
        </div>
        <img src="/assets/companies/${company}/vehicles/main.png" alt="" />
      </div>
    `;
  }
}

customElements.define("app-company-hero", HeroSection);
