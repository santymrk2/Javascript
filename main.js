let USA = document.getElementById("USA");
let EU = document.getElementById("EU");
let UK = document.getElementById("UK");
let send = document.getElementById("buttom");
let cm = document.getElementById("medida");

const chooseLoc = function () {
if (USA===true) {
    console.log("You chose USA");
} else if (EU===true){
    console.log("You chose EU");
} else if (UK===true){
    console.log("You chose UK");
}
}

const medida = function () {
    if (cm===true) {
        console-log("Tu pie es de " + cm)
    }
}

const enviar = function () {
    if (send===true) {
        chooseLoc();
        medida();
    }
};

enviar();


