let USA = document.getElementById("USA");
let EU = document.getElementById("EU");
let UK = document.getElementById("UK");
let send = document.getElementById("buttom");
let cm = document.getElementById("medida");

const chooseLoc = () => {
if (USA===true) {
    console.log("You chose USA");
    return USA;
} else if (EU===true){
    console.log("You chose EU");
    return EU;
} else if (UK===true) {
    console.log("You chose UK");
    return UK;
}
};


const medida = () => {
    if (cm>22 | cm<29) {
        console.log("Tu pie es de " + cm)
    } else {
        console.log("Debe ser un valor entre 22 y 29")
    }
};

const enviar = () => {
    if (send===true) {
        chooseLoc();
        medida();
    }
};

enviar();

