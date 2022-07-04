function playSound(seletorAudio) {

    const element = document.querySelector(seletorAudio);

    if (element && element.localName === 'audio') {
        element.play();
    }
    else {
        alert('Element or selector not found');
    }

}

const listKey = document.querySelectorAll('.tecla');

for (let counter = 0; counter < listKey.length; counter++) {

    const key = listKey[counter];
    const instrument = key.classList[1];
    const idAudio = `#som_${instrument}`;

    key.onclick = function () {
        playSound(idAudio);

    }

    key.onkeydown = function (event) {

        if (event.code === 'Space' || event.code === 'Enter') {

            key.classList.add('ativa');
        }
    }

    key.onkeyup = function () {

        key.classList.remove('ativa');
    }

}

/*while (counter < listKeys.length) {

    const keys = listKeys[counter];
    const instrument = keys.classList[1];
    const idAudio = `#som_${instrument}`;

   // console.log(idAudio);

    keys.onclick = function () {
        playSound(idAudio);
    }

    counter++;

    //console.log(counter);
}*/

