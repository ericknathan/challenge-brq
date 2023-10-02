const testimonial = {
  text: `Desde o momento em que acessei o site até o retorno do veículo alugado, fui constantemente impressionado pela facilidade e eficiência de todo o processo. O site é intuitivo, fácil de navegar e oferece uma ampla variedade de opções de veículos, permitindo que eu encontrasse o carro perfeito para minhas necessidades.`,
  user: {
    name: "Weslley Borges",
    position: "Head de Produtos na BRQ",
    image:
      "https://media.licdn.com/dms/image/D4D03AQEdqQoiLSXqQw/profile-displayphoto-shrink_800_800/0/1684282613038?e=1700697600&v=beta&t=tjwkjKvaLoXrPk6soTlj-REWn8ELXBETISPNUBnZS5c",
  },
};

class TestimoniesSection extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <style>
        #testimonies {
          display: flex;

          background-color: #F4F4F5;
        }

        #testimonies > div {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1rem;
          
          padding: 0 2.25rem;
        }

        #testimonies > div .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1rem;
          margin: 0 auto;
        }
        
        #testimonies > div .content > p {
          position: relative;
          font-size: 1.3125rem;
          width: 45ch;
        }

        #testimonies > div .content > p::before {
          content: '"';

          position: absolute;
          top: -4rem;
          left: -3.5rem;

          color: #27272A33;
          
          font-weight: 700;
          font-family: serif;
          font-size: 10rem;
        }

        #testimonies > div .content > #testimonial-user {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        #testimonies > div .content > #testimonial-user img {
          width: 3.875rem;
          height: 3.875rem;
          border: 2px solid #27272A;
          border-radius: 50%;
          aspect-ratio: 1 / 1;
        }

        #testimonies > div .content > #testimonial-user p {
          color: #18181B;

          font-weight: 500;
          font-size: 1.125rem;
        }

        #testimonies > div .content > #testimonial-user span {
          color: #3F3F46;

          font-size: 1.125rem;
        }

        #testimonies > video {
          max-width: 36.875rem;
          aspect-ratio: 5 / 3;
          object-fit: cover;
        }

        @media only screen and (max-width: 900px) {
          #testimonies {
            flex-direction: column;
            padding: 3rem 0;
            gap: 2.25rem;
          }

          #testimonies > div .content {
            max-width: 43rem;
          }

          #testimonies > div .content > p {
            width: 100%;
          }

          #testimonies > video {
            width: 100%;
            max-width: 45.5rem;
            aspect-ratio: 16 / 9;
            padding: 0 1.25rem;
            margin: 0 auto;
          }
        }
      </style>
    
      <section id="testimonies">
        <div>
          <div class="content">
            <p>${testimonial.text}</p>

            <div id="testimonial-user">
              <img src="${testimonial.user.image}" alt="" />
              <div>
                <p>${testimonial.user.name}</p>
                <span>${testimonial.user.position}</span>
              </div>
            </div>
          </div>
        </div>
        <video src="/assets/videos/testimony.mp4" autoplay loop muted></video>
      </secti>
    `;
  }
}

customElements.define("app-testimonies-section", TestimoniesSection);
