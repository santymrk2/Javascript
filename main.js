var medida = Math.round(document.getElementById("size").value);

const calcUSA = () => {
    if (medida >= 22 && medida <= 29) {
        let talle_USA = medida - 17;
        document.getElementById("result").innerHTML - "El talle es de ";
    }
}

const calcEU = () => {
    if (medida >= 22 && medida <= 29) {
        let talle_EU = medida + 13.5;
        document.getElementById("result").innerHTML - "El talle es de " + talle_EU;
    }
}

const calcUK = () => {
    if (medida >= 22 && medida <= 29) {
        let talle_UK = medida - 19.5;
        document.getElementById("result").innerHTML - "El talle es de " + talle_UK;
    }
}

const chooseLoc = () => {
    let USA = document.getElementById("USA").checked;
    let EU = document.getElementById("EU").checked;
    let UK = document.getElementById("UK").checked;
    if (USA == true) {
        calcUSA;
    } else if (EU == true){
        calcEU;
    } else if (UK == true) {
        calcUK;
    }
};

let enviar = () => {
    chooseLoc();
};

document.getElementById("buttom").addEventListener("click", enviar);