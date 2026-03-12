function carregarVideo(div) {
    div.innerHTML = `
        <iframe width="720" height="405" 
        src="https://www.youtube.com/embed/HV-m-0cUM6g?autoplay=1" 
        title="Just Another Day - Oingo Boingo" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    `;
}

// Variável para guardar em qual slide estamos (começa no 0, que é a primeira foto)
let currentCatSlide = 0;

// A função que o seu HTML está tentando chamar no onclick
function moveSlide(direction) {
    // Pega a trilha inteira onde os slides estão e os slides individuais
    const track = document.querySelector('.carousel_track');
    const slides = Array.from(document.querySelectorAll('.carousel_slide'));
    
    // Se não achar nada, para por aqui pra não dar erro
    if (!track || slides.length === 0) return;

    // Descobre a largura exata de uma foto do carrossel no momento
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Atualiza o número do slide somando a direção (+1 para frente, -1 para trás)
    currentCatSlide += direction;

    // Lógica para fazer o carrossel "dar a volta" (loop infinito)
    if (currentCatSlide < 0) {
        currentCatSlide = slides.length - 1; // Se voltar do primeiro, vai pro último
    } else if (currentCatSlide >= slides.length) {
        currentCatSlide = 0; // Se avançar do último, volta pro primeiro
    }

    // O truque de mágica: move a trilha inteira para o lado
    track.style.transform = `translateX(-${currentCatSlide * slideWidth}px)`;
}