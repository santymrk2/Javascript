let USA = document.getElementById("USA");
let EU = document.getElementById("EU");
let UK = document.getElementById("UK");
let send = document.getElementById("buttom");
let cm = document.getElementById("medida");

const chooseLoc = () => {
if (USA===true) {
    console.log("You chose USA");
} else if (EU===true){
    console.log("You chose EU");
} 
else if (UK===true) {
    console.log("You chose UK");
}
};

const medida = () => {
    if (cm>22 | cm<29) {
        console.log("Tu pie es de " + cm)
    }
};

const enviar = () => {
    if (send===true) {
        chooseLoc();
        medida();
    }
};

enviar();

