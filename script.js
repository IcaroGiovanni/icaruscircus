// Set the date we're counting down to
const countDownDate = new Date("Feb 28, 2026 21:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements
    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "<h2 style='font-family: Creepster; color: red;'>O ESPETÁCULO JÁ COMEÇOU</h2>";
    }
}, 1000);

// Modal functions
function openDetails(type) {
    const modal = document.getElementById("modal");
    const body = document.getElementById("modal-body");
    
    let content = "";
    
    switch(type) {
        case 'location':
            content = `
                <h2 style="font-family: Creepster; color: red; font-size: 2rem; margin-bottom: 20px;">Como Chegar</h2>
                <p>O circo será montado no segredo mais bem guardado da cidade.</p>
                <p style="margin-top: 20px; font-weight: bold;">[ENDEREÇO DA FESTA AQUI]</p>
                <a href="#" style="background: #8B0000; color: white; padding: 10px 20px; border-radius: 20px; text-decoration: none; display: inline-block; margin-top: 20px;">Abrir no Google Maps</a>
            `;
            break;
        case 'traje':
            content = `
                <h2 style="font-family: Creepster; color: red; font-size: 2rem; margin-bottom: 20px;">Traje: Circus Horror</h2>
                <p>Venha como sua pior pesadelo circense: Palhaços assassinos, domadores fantasmagóricos ou aberrações de outro mundo.</p>
                <p style="margin-top: 20px; color: #ff0000;">TRAJE OBRIGATÓRIO (OU SEJA UM DELES)</p>
            `;
            break;
        case 'rsvp':
            content = `
                <h2 style="font-family: Creepster; color: red; font-size: 2rem; margin-bottom: 20px;">Confirmar Presença</h2>
                <p>Sua vida depende disso... ou quase isso.</p>
                <p style="margin-top: 20px;">Envie uma mensagem para o Ícaro para garantir que seu nome não esteja na lista negra.</p>
                <a href="https://wa.me/SEUNUMERO" style="background: #25d366; color: white; padding: 10px 20px; border-radius: 20px; text-decoration: none; display: inline-block; margin-top: 20px;">Confirmar via WhatsApp</a>
            `;
            break;
    }
    
    body.innerHTML = content;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
