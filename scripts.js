
// A escolha da máquina 
const playMachine = () => {
    const MchocerIcon = document.querySelector("#alexa-choce-icon")
    const choce = ["rock", "paper", "scissors"]
    const choceIcon = ["&#9994;", "&#9995;", "&#9996;"]
    const randomNumber = Math.floor(Math.random() * 3)

    const machinechocer = [choce[randomNumber], choceIcon[randomNumber]]

    MchocerIcon.innerHTML = machinechocer[1] 

    return machinechocer
}

// Verificando quem ganhou
let humanScoreNumber = 0
let machineScoreNumber = 0

const playTheGame = (human, machine) => {
    const result = document.querySelector(".result")
    const yourScore = document.querySelector("#human")
    const machineScore = document.querySelector("#machine")

    if (human === machine) {
        result.innerHTML = "Deu Empate! &#129309;"

    } else if (human === "rock" && machine === "scissors" || 
              (human === "paper" && machine === "rock") || 
              (human === "scissors" && machine === "paper")) {
        
        result.innerHTML = "Você Ganhou! &#127942;"
        humanScoreNumber++
        yourScore.innerHTML = humanScoreNumber

    } else {
        result.innerHTML = "Você Perdeu! &#128531;"
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber

    }
}

// A escolha do Humano
const playHuman = (humanchocer, humanchocerIcon) => {
    const HchocerIcon = document.querySelector("#you-choce-icon")
    HchocerIcon.innerHTML = humanchocerIcon 

    playTheGame(humanchocer, playMachine()[0])
}