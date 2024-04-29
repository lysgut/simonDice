let iniciar = document.getElementById("startButton")
let cantGame = 1
let combination = []
let instance = 0;
botones = [document.getElementById("b0"),document.getElementById("b1"),document.getElementById("b2"),document.getElementById("b3")]

function random(x){
    return Math.floor(Math.random * x)
}
function ableButtons(x){
    if(x==false){
    for(let i=0;i<4; i++ ){
        botones[i].disabled = true
    }
} else if(x==true){
    for(let i=0;i<4; i++ ){
        botones[i].disabled = false
    }
}
}
function game(x){
    combination.unshift(random(4))
    console.log(combination)
    return(combination)
}

function saying(){
    for(e of combination){
        setTimeout(() => {
            botones[e].style.backgroundColor = black;
        }, 1000);
    }
}

function noPlay(){
    ableButtons(false)
    cantGame += 1
    game(cantGame)
    saying()
    instance ++
}

function play(){
    ableButtons(true)
    
}


iniciar.addEventListener("click", function(){
    while(true){
        console.log(instance)
        noPlay()
        console.log(instance)
        play()
    }

}
)