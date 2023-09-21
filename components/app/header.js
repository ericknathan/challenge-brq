let loggedUser = {
  name: 'Entrar',
  avatar: './assets/images/avatar-fallback.svg',
}

async function loadCompanyData(companySlug) {
  
  const response = await fetch('./database/companies.json');
  const companiesList = await response.json();

  const companyData = companiesList.find(company => company.id === companySlug);

  document.getElementById('company-name').innerText = companyData.name;
  document.getElementById('divider').style.display = 'block';
  document.getElementById('company-description').innerText = companyData.short_description;
}

class Header extends HTMLElement {
  constructor() {
    super();

  const companySlug = new URLSearchParams(window.location.search).get('company');

    if(companySlug) {
      loggedUser = {
        name: 'Flávio Mendes',
        avatar: './assets/images/fake-user-avatar.png',
      }

      loadCompanyData(companySlug);
    }

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

        header .container > div {
          display: flex;
          align-items: center;
          gap: 0.75rem;

          width: 90%;
          max-width: 36rem;
        }

        header .container > div h1 {
          position: relative;
          
          font-size: 1.25rem;
          font-weight: 700;
        }

        header .container > div #divider {
          display: none;
          flex: 1;
          height: 1px;
          background-color: #A1A1AA;
        }

        header .container > div p {
          font-size: 1rem;
          font-weight: 400;
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

        header button img {
          padding: 2px;
          height: 2rem;
          width: 2rem;
          
          background-color: #1A4199;
          border-radius: 999px;
        }


        header button:focus-visible {
          outline: none;
          box-shadow: 0px 0px 0px 2px #1a419966;
        }
      </style>
    
      <header>
        <div class="container">
          <a href="../">
            <img src="./assets/images/logo.svg" alt="" />
          </a>
          <div>
            <h1 id="company-name"></h1>
            <div id="divider"></div>
            <p id="company-description"></p>
          </div>
          <button>
            <img src="${loggedUser.avatar}" alt="Foto de perfil do usuário ${loggedUser.name}" />
            <span>${loggedUser.name}</span>
          </button>
        </div>
      </header>
    `;
  }
}

customElements.define("app-header", Header);
