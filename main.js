const calcUSA = () => {
    for (var i=22; i<29 || i>22; i) {

    }
}
const chooseLoc = () => {
    let USA = document.getElementById("USA").checked;
    let EU = document.getElementById("EU").checked;
    let UK = document.getElementById("UK").checked;
    if (USA===true) {
        console.log("You chose USA");
    } else if (EU===true){
        console.log("You chose EU");
    } else if (UK===true) {
        console.log("You chose UK");
    }
};


const chooseSize = () => {
    let cm = document.getElementById("size").value;
    if (cm >= 22 && cm <= 29) {
        console.log("Tu pie es de " + cm + " cm");
    } else {
        alert("Debe ser un valor entre 22 y 29");
    }
};

let enviar = () => {
    chooseLoc();
    chooseSize();
};

document.getElementById("buttom").addEventListener("click", enviar);
