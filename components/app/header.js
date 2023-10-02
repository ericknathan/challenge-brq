let loggedUser = {
  name: "Entrar",
  avatar: "/assets/images/avatar-fallback.svg",
};

class Header extends HTMLElement {
  constructor() {
    super();

    const company = new URLSearchParams(window.location.search).get("company");

    if (company || window.location.pathname.includes("profile")) {
      loggedUser = {
        name: "Flávio Mendes",
        avatar: "/assets/images/fake-user-avatar.png",
      };
    }

    import("/assets/scripts/loadCompanyData.js");

    this.innerHTML = `
      <style>
        header#app-header {
          display: flex;
          align-items: center;
        
          height: 6.25rem;
          border-bottom: 2px solid #1a4199;
        }
        
        header#app-header .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        header#app-header .container > div {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;

          width: 90%;
          max-width: 36rem;
        }

        header#app-header .container > div h1 {
          position: relative;
          
          font-size: 1.25rem;
          font-weight: 700;
        }

        header#app-header .container > div #divider {
          display: none;
          flex: 1;
          height: 1px;
          background-color: #A1A1AA;
        }

        header#app-header .container > div p {
          font-size: 1rem;
          font-weight: 400;
        }

        header#app-header a {
          text-decoration: none;
        }

        header#app-header a button {
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

        header#app-header a button img {
          padding: 2px;
          height: 2rem;
          width: 2rem;
          
          background-color: #1A4199;
          border-radius: 999px;
        }

        header#app-header a button:focus-visible {
          outline: none;
          box-shadow: 0px 0px 0px 2px #1a419966;
        }

        header#app-header a button span {
          width: max-width;
        }

        @media (max-width: 550px) {
          header#app-header .container > div p,
          header#app-header .container > div #divider {
            display: none;
            opacity: 0;
            position: absolute;
          }
        }
      </style>
    
      <header id="app-header">
        <div class="container">
          <a href="/">
            <img src="/assets/images/logo.svg" alt="" />
          </a>
          <div>
            <h1 id="company-name"></h1>
            <div id="divider"></div>
            <p id="company-description"></p>
          </div>
          <a href="/profile/index.html?company=${company}">
            <button>
              <img src="${loggedUser.avatar}" alt="Foto de perfil do usuário ${loggedUser.name}" />
              <span>${loggedUser.name}</span>
            </button>
          </a>
        </div>
      </header>
    `;
  }
}

customElements.define("app-header", Header);
