// Set the date we're counting down to
const countDownDate = new Date("Mar 7, 2026 21:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function () {

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

    switch (type) {
        case 'location':
            content = `
                <h2 style="font-family: Creepster; color: red; font-size: 2.5rem; margin-bottom: 20px;">Onde a Magia Acontece</h2>
                <div style="background: rgba(139, 0, 0, 0.1); padding: 20px; border-radius: 15px; border: 1px dashed var(--primary-red); margin-bottom: 20px;">
                    <img src="local.png" alt="Outro Nipe Eventos" style="width: 100%; border-radius: 10px; margin-bottom: 15px; border: 1px solid var(--primary-red);">
                    <h3 style="color: var(--primary-red); margin-bottom: 10px;">Outro Nipe Eventos</h3>
                    <p style="font-size: 1.1rem; margin-bottom: 15px; line-height: 1.4;">
                        R. José Alves de Souza, 20<br>
                        Santa Terezinha, Belo Horizonte - MG<br>
                        CEP: 31360-120
                    </p>
                    <a href="https://www.google.com/maps/search/?api=1&query=Outro+Nipe+Eventos+R.+José+Alves+de+Souza+n20+Santa+Terezinha+Belo+Horizonte" 
                       target="_blank" 
                       style="background: var(--primary-red); color: white; padding: 12px 25px; border-radius: 50px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; font-weight: bold; transition: transform 0.3s ease;">
                        <span>📍</span> Abrir no Google Maps
                    </a>
                </div>
            `;
            break;
        case 'traje':
            content = `
                <p style="margin-bottom: 20px; color: #ff0000; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; text-align: center;">Elegância é obrigatória no nosso picadeiro!</p>
                <div style="margin-top: 5px; padding: 15px; background: rgba(255, 0, 0, 0.1); border: 1px solid rgba(255, 0, 0, 0.3); border-radius: 12px; text-align: left;">
                    <h3 style="color: #ff0000; font-size: 1.1rem; margin-bottom: 12px; text-transform: uppercase; display: flex; align-items: center; gap: 8px;">
                        <span>🚫</span> É EXTREMAMENTE PROIBIDO:
                    </h3>
                    <ul style="list-style: none; padding: 0; margin: 0; font-weight: bold; color: #fff; font-size: 1rem;">
                        <li style="margin-bottom: 8px; display: flex; align-items: center; gap: 10px;">
                            <span style="color: #ff0000;">❌</span> CAMISA DE TIME
                        </li>
                        <li style="display: flex; align-items: center; gap: 10px;">
                            <span style="color: #ff0000;">❌</span> CHINELO
                        </li>
                    </ul>
                </div>
            `;
            break;
        case 'rsvp':
            content = `
                <h2 style="font-family: Creepster; color: red; font-size: 2.5rem; margin-bottom: 20px;">Confirmar Presença</h2>
                <p style="font-size: 1.1rem; margin-bottom: 20px;">Sua presença é a peça principal deste show. Não deixe sua cadeira vazia!</p>
                <div style="margin: 25px 0;">
                    <a href="https://wa.me/5531983837441?text=Ol%C3%A1%20%C3%8Dcaro!%20J%C3%A1%20garanti%20meu%20ingresso%20para%20o%20ICARUS%20CIRCUS.%20Pode%20contar%20comigo%20nesse%20espet%C3%A1culo%20sombrio!%20%F0%9F%8E%A9%F0%9F%8E%A1" 
                       target="_blank"
                       style="background: #25d366; color: white; padding: 18px 35px; border-radius: 50px; text-decoration: none; display: inline-flex; align-items: center; gap: 10px; font-weight: bold; font-size: 1.1rem; transition: transform 0.3s ease; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);">
                        <span style="font-size: 1.5rem;">📱</span> Confirmar via WhatsApp
                    </a>
                </div>
                <p style="font-size: 0.9rem; opacity: 0.6;">Favor confirmar até o dia 28 de Fevereiro.</p>
            `;
            break;
    }

    body.innerHTML = content;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
