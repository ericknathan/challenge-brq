
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const steps = document.querySelectorAll(".stp");

    let currentStep = 0;
  
    // Função para atualizar a exibição do formulário
    function updateForm() {
      steps.forEach((step, index) => {
        if (index === currentStep) {
          step.style.display = "flex";
        } else {
          step.style.display = "none";
        }
      });
    }
  
    // Botão "Próximo"
    document.querySelectorAll(".next").forEach((button) => {
      button.addEventListener("click", function(event) {
        event.preventDefault();
        currentStep++;
        if (currentStep >= steps.length) {
          currentStep = steps.length - 1;
        } 
        updateForm();
      });
    });
  
    // Botão "Voltar"
    document.querySelectorAll(".previous").forEach((button) => {
      button.addEventListener("click", function(event) {
        event.preventDefault();
        currentStep--;
        if (currentStep < 0) {
          currentStep = 0;
        }
        updateForm();
      });
    });
  
    // Envio do formulário final
    form.addEventListener("submit", function(event) {
      event.preventDefault();
    });
  
    // Iniciar o formulário
    updateForm();
  });
  

const lastButton = document.getElementById("last");

lastButton.addEventListener("click", function(event) {
  window.location.href = "/company/index.html?company=auto-ride";
});