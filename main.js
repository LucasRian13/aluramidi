function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeteclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeteclas. length; contador++) {

    const tecla = listaDeteclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//template string

   tecla.onclick = function () {
        tocaSom (idAudio)
    }

    tecla.onkeydonw = function () {
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

