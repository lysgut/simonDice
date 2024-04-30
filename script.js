let iniciar = document.getElementById("startButton");
let gameStatus = document.getElementById("gameStatus"); // Obtener el elemento de texto para mostrar el estado del juego
let cantGame = 1;
let combination = [];
let playerSequence = [];
let sequenceIndex = 0;
let botones = [document.getElementById("b0"), document.getElementById("b1"), document.getElementById("b2"), document.getElementById("b3")];

botones.forEach(boton => {
    boton.addEventListener("mousedown", function() {
        this.style.backgroundColor = "black"; // Cambiar el color de fondo a negro al presionar
    });

    boton.addEventListener("mouseup", function() {
        // Restaurar el color de fondo original al soltar el clic dependiendo del ID del botón
        switch (this.id) {
            case "b0":
                this.style.backgroundColor = "red";
                break;
            case "b1":
                this.style.backgroundColor = "yellow";
                break;
            case "b2":
                this.style.backgroundColor = "green";
                break;
            case "b3":
                this.style.backgroundColor = "blue";
                break;
            default:
                this.style.backgroundColor = "initial"; // Valor por defecto
        }
    });
});


function random(x) {
    return Math.floor(Math.random() * x);
}

function ableButtons(x) {
    for (let i = 0; i < 4; i++) {
        botones[i].disabled = !x;
    }
}

function addCombination() {
    combination.push(random(4));
    console.log(combination);
    return combination;
}

function saying() {
    for (let i = 0; i < combination.length; i++) {
        let originalColor = botones[combination[i]].style.backgroundColor; 
        setTimeout(() => {
            botones[combination[i]].style.backgroundColor = "black"; 
            setTimeout(() => {
                botones[combination[i]].style.backgroundColor = originalColor; 
            }, 500); 
        }, i * 1000); 
    }
    setTimeout(() => {
        ableButtons(true);
        gameStatus.innerText = "¡Tu turno!";
    }, combination.length * 1000);
}

function checkSequence(buttonId) {
    if (buttonId === combination[sequenceIndex].toString()) {
        playerSequence.push(buttonId);
        sequenceIndex++;
        if (playerSequence.length === combination.length) {
            // El jugador ha ingresado toda la secuencia correctamente
            playerSequence = [];
            sequenceIndex = 0;
            setTimeout(function() {
                noPlay(); // Agregar la siguiente parte de la secuencia después de esperar un segundo
            }, 500); // Esperar un segundo (1000 milisegundos)
            play();
        }
    } else {
        // El jugador ha ingresado una secuencia incorrecta
        alert("¡Has perdido! Tu puntuación fue: " + (cantGame - 1));
        location.reload()
        combination = [];
        cantGame = 1;
    }
}

function noPlay() {
    ableButtons(false);
    cantGame++;
    addCombination();
    gameStatus.innerText = "Simon Dice...";
    saying();
}

function play() {
    ableButtons(true);
    gameStatus.innerText = "¡Tu turno!";
}

iniciar.addEventListener("click", function () {
    console.log("inicio")
    iniciar.style.display = "none"
    noPlay();
    play();
    
});

// Agregar event listeners a los botones
botones.forEach(button => {
    button.addEventListener("click", function () {
        checkSequence(this.getAttribute("value"));
    });
});
