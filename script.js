let iniciar = document.getElementById("startButton");
let cantGame = 1;
let combination = [];
let instance = 0;
let botones = [document.getElementById("b0"), document.getElementById("b1"), document.getElementById("b2"), document.getElementById("b3")];

function random(x) {
    return Math.floor(Math.random() * x);
}

function ableButtons(x) {
    for (let i = 0; i < 4; i++) {
        botones[i].disabled = !x;
    }
}

function addCombination() {
    combination.unshift(random(4));
    console.log(combination);
    return combination;
}

function saying() {
    for (let i = 0; i < combination.length; i++) {
        let originalColor = botones[combination[i]].style.backgroundColor; 
        setTimeout(() => {
            botones[combination[i]].style.backgroundColor = "balck"; 
            setTimeout(() => {
                botones[combination[i]].style.backgroundColor = originalColor; 
            }, 1000); 
        }, i * 2000); 
    }
}


function noPlay() {
    ableButtons(false);
    cantGame += 1;
    addCombination();
    saying();
    instance++;
}

function play() {
    ableButtons(true);
}

iniciar.addEventListener("click", function () {
    console.log(instance);
    noPlay();
    console.log(instance);
    play();
});
