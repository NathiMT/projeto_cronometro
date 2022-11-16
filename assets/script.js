let cronometro = document.querySelector(".cronometro");
let botaoIniciar = document.querySelector(".iniciar");
let botaoPausar = document.querySelector(".pausar");
let botaoMarcar = document.querySelector(".marcar");
let botaoReiniciar = document.querySelector(".reiniciar");
let adMinutos = document.querySelector(".minutos");
let adSegundos = document.querySelector(".segundos");
let adMiliseg = document.querySelector(".milisegundos")
let Interval;
let listaMarcacoes = document.querySelector(".marcacoes")
let numeracao = document.querySelector(".num")
let tempoMarcado = document.querySelector(".tempoMarcado")

window.onload = function() {
    let minutos = 00;
    let segundos = 00;
    let milisegundos = 00;
    let num = 00;

    function iniciarContagem() {
        milisegundos++;

        if(milisegundos <= 9) {
            adMiliseg.innerHTML = "0" + milisegundos;
        }
        else if(milisegundos > 9 && milisegundos <= 99) {
            adMiliseg.innerHTML = milisegundos;
        }
        else if(milisegundos > 99) {
            segundos++;
            adSegundos.innerHTML = "0" + segundos;
            milisegundos = 0;
            adMiliseg.innerHTML = "0" + 0;
        }

        if(segundos > 9 && segundos <= 59) {
            adSegundos.innerHTML = segundos;
        }
        else if(segundos > 59) {
            minutos++;
            adMinutos.innerHTML = "0" + minutos;
            segundos = 0;
            adSegundos.innerHTML = "0" + 0;
        }

        if(minutos > 9) {
            adMinutos.innerHTML = minutos;
        }
    }

    botaoIniciar.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(iniciarContagem, 10);
    }

    botaoPausar.onclick = function() {
        clearInterval(Interval);

        botaoIniciar.innerHTML = this.innerHTML === "Iniciar" ? "Iniciar" : "Continuar"
    }

    botaoReiniciar.onclick = function() {
        clearInterval(Interval);
        milisegundos = 00;
        segundos = 00;
        minutos = 00;
        adMiliseg.innerHTML = "0" + milisegundos;
        adSegundos.innerHTML = "0" + segundos;
        adMinutos.innerHTML = "0" + minutos;

        num = 00;

        botaoIniciar.innerHTML = "Iniciar";
        listaMarcacoes.style.display = "none";
    }

    botaoMarcar.onclick = function() {
        listaMarcacoes.style.display = "block";

        num++;
        numeracao.innerHTML = num;

        if(milisegundos <= 9 && segundos > 9 && minutos > 9) {
            tempoMarcado.innerHTML = `${minutos} : ${segundos} : 0${milisegundos}`;
        }
        else if(milisegundos <= 9 && segundos <= 9 && minutos > 9) {
            tempoMarcado.innerHTML = `${minutos} : 0${segundos} : 0${milisegundos}`;
        }
        else if(milisegundos <= 9 && segundos <= 9 && minutos <= 9) {
            tempoMarcado.innerHTML = `0${minutos} : 0${segundos} : 0${milisegundos}`;
        }
        else if(milisegundos > 9 && segundos <= 9 && minutos <= 9) {
            tempoMarcado.innerHTML = `0${minutos} : 0${segundos} : ${milisegundos}`;
        }
        else if(milisegundos > 9 && segundos <= 9 && minutos > 9) {
            tempoMarcado.innerHTML = `${minutos} : 0${segundos} : ${milisegundos}`;
        }
        else if(milisegundos > 9 && segundos > 9 && minutos <= 9) {
            tempoMarcado.innerHTML = `0${minutos} : ${segundos} : ${milisegundos}`;
        }
        else if(milisegundos <= 9 && segundos > 9 && minutos <= 9) {
            tempoMarcado.innerHTML = `0${minutos} : ${segundos} : 0${milisegundos}`;
        }
        else {
            tempoMarcado.innerHTML = `${minutos} : ${segundos} : ${milisegundos}`;
        }
    }
}