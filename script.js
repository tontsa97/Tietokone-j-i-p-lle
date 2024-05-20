let time;
let countdownInterval;

const resetTimer = () => {
    clearTimeout(time);
    clearInterval(countdownInterval);
    time = setTimeout(remind, 300000);  // 5 minuuttia

    let remainingTime = 300;  // 5 minuuttia sekunteina
    document.getElementById('reminder').innerText = "Tietokoneesi on aktiivinen! Pidä hauskaa! 🎉";

    countdownInterval = setInterval(() => {
        remainingTime--;
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        document.getElementById('timer').innerText = `Jäljellä oleva aika: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

const remind = () => {
    document.getElementById('reminder').innerText = "Tietokoneesi on ollut käyttämättömänä jo jonkin aikaa! 🤡";
}

window.onload = resetTimer;
document.onmousemove = resetTimer;
document.onkeydown = resetTimer;
document.onclick = resetTimer;
document.onscroll = resetTimer;

document.getElementById('reset-timer').addEventListener('click', resetTimer);

resetTimer();  // Käynnistetään ajastin alussa
