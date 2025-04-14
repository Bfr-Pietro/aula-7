let saldoAtual = 1000;
let saldoElement = document.getElementById("saldo");
let overlay = document.getElementById("overlay");
let overlayImg = document.getElementById("overlay-img");
let overlayText = document.getElementById("overlay-text");

let audio = document.getElementById("audiowin");

saldoElement.innerText = `${saldoAtual} reais`;

let podeFecharOverlay = false;

function mostrarAnimacao() {
    let numeroUsuario = parseInt(document.getElementById("numeroaposta").value);
    let numeroSorteado = Math.floor(Math.random() * 10) + 1;

    if (!numeroUsuario || numeroUsuario < 1 || numeroUsuario > 10) {
        alert("Digite um número válido entre 1 e 10!");
        return;
    }

    podeFecharOverlay = false;
    setTimeout(() => {
        podeFecharOverlay = true;
    }, 300);

    if (numeroUsuario === numeroSorteado) {
        saldoAtual *= 2;
        overlayImg.src = "assets/imgs/win.gif";
        overlayText.innerText = `🎉 Você acertou! O número era ${numeroSorteado}.\nSeu saldo agora é R$ ${saldoAtual}`;
        audio.play();
    } else {
        saldoAtual -= 100;
        if (saldoAtual < 0) saldoAtual = 0;
        overlayImg.src = "assets/imgs/seila.gif";
        overlayText.innerText = `💸 Você errou! O número era ${numeroSorteado}.\nVocê perdeu R$100.\nSaldo atual: R$ ${saldoAtual}`;
    }

    saldoElement.innerText = `${saldoAtual} reais`;
    overlay.classList.add("show");

    if (saldoAtual <= 0){
        window.alert('Você está sem saldo!')
    }
}

document.addEventListener("click", function () {
    if (podeFecharOverlay && overlay.classList.contains("show")) {
        overlay.classList.remove("show");
    }
});

function adicionar() {
    saldoAtual = saldoAtual + 1000;
}
