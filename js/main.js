function playSound(audioSelector) {
    const element = document.querySelector(audioSelector);

    if (element && element.localName === 'audio') {
            element.play();
    } else {
        console.log('Element or selector not found!');
    }
}

const keyList = document.querySelectorAll('.tecla');

for (let i = 0; i < keyList.length; i++) {

    const key = keyList[i];
    const instrument = key.classList[1];
    const idSound = `#som_${instrument}`;

    key.onclick = function () {
        playSound(idSound);
    } 

    key.onkeydown = function (event) {

        if (event.code === 'Space' || event.code === 'Enter') {
            key.classList.add('ativa');
    }
    
    key.onkeyup = function () {
        key.classList.remove('ativa');   
    }
}
}
console.log('Testando commits com Git e GitHub');