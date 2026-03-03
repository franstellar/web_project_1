function carregarVideo(div) {
    div.innerHTML = `
        <iframe width="720" height="405" 
        src="https://www.youtube.com/embed/_b6opMEu-zM?autoplay=1" 
        title="Just Another Day - Oingo Boingo" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    `;
}