const chooseLoc = () => {
    let USA = document.getElementById("USA");
    let EU = document.getElementById("EU");
    let UK = document.getElementById("UK");
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

const chooseSize = () => {
    let cm = document.getElementById("medida");
    if (cm>= 22 | cm<= 29) {
        console.log("Tu pie es de " + cm)
    } else {
          console.log("Debe ser un valor entre 22 y 29")
    }
};

let enviar = () => {
    let send = document.getElementById("buttom");
    if (send===true) {
        chooseLoc();
        chooseSize();
    }
};

enviar();
