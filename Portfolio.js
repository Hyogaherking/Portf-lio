// Navbar toggle functionality
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

// Fechar o menu ao clicar em um link no modo responsivo
document.querySelectorAll('.navlinks a').forEach(link => {
    link.addEventListener('click', function() {
        // Fechar o menu ao clicar em um link
        nav.classList.remove("open");
        togglebtn.classList.remove("click");
    });
});

// Animação do texto "Hi, I'm..."
document.addEventListener("DOMContentLoaded", function() {
    var options = {
        strings: ["Frontend Developer","Software Analyst and Developer","Digital Game Programmer"], // Texto da animação
        typeSpeed: 100, // Velocidade de digitação
        backSpeed: 50, // Velocidade de apagamento
        loop: true // Para repetir a animação
    };
    var typed = new Typed(".input", options);
});

// Função para atualizar a página ao clicar na logo
document.querySelectorAll('.logo').forEach(logo => {
    logo.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link
        location.reload(); // Atualiza a página
    });
});
