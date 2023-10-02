class Header extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <style>
        header {
          display: flex;
          align-items: center;
        
          height: 6.25rem;
          border-bottom: 2px solid #1a4199;
        }
        
        header .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        header nav {
          display: flex;
          align-items: center;
          gap: 3.25rem;
        }
        
        header nav a {
          position: relative;
        
          color: #18181b;
        
          text-decoration: none;
          font-size: 1rem;
        }
        
        header nav a:focus {
          outline: none;
        }
        
        header nav a::after,
        header nav a::after {
          content: '';
          
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
        
          width: 0;
          height: 2px;
          border-radius: 2px;
          
          background-color: transparent;
        
          transition: all 0.2s ease-in-out;
        }
        
        header nav a:focus-visible::after,
        header nav a:hover::after {
          width: 3rem;
          background-color: #1a4199;
        }
        
        header button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.125rem;
        
          border-radius: 2.8125rem;
          padding: 0.5rem 1.375rem 0.5rem 0.5rem;
        
          background: none;
          border: 1px solid #71717a;
        
          font-size: 1rem;
        
          cursor: pointer;
        }

        header button:focus-visible {
          outline: none;
          box-shadow: 0px 0px 0px 2px #1a419966;
        }

        header a {
          text-decoration: none;
        }
        
        @media only screen and (max-width: 760px) {
          header nav {
            display: none;
          }
        }
      </style>
    
      <header>
        <div class="container">
          <a href="/">
            <img src="/assets/images/logo.svg" alt="" />
          </a>
          <nav>
            <a href="#our-clients">Nossos clientes</a>
            <a href="#testimonies">Depoimentos</a>
            <a href="#discovery-vehicle">Vantagens</a>
          </nav>
          <a href="/form/index.html">
            <button>
              <img src="/assets/images/avatar-fallback.svg" alt="" />
              <span>Entrar</span>
            </button>
          </a>
        </div>
      </header>
    `;
  }
}

customElements.define("app-header", Header);
