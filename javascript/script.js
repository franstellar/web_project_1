function carregarVideo(div) {
    div.innerHTML = `
        <iframe width="720" height="405" 
        src="https://www.youtube.com/embed/HV-m-0cUM6g?autoplay=1" 
        title="Just Another Day - Oingo Boingo" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    `;
}

let currentSlide = 0;

function moveSlide(direction) {
    const track = document.querySelector('.carousel_track');
    const slides = document.querySelectorAll('.carousel_slide');
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const amountToMove = -currentSlide * 100;
    track.style.transform = `translateX(${amountToMove}%)`;
}