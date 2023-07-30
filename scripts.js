

const playHuman = (humanChoiser) => {
 console.log(humanChoiser) 
}

const playMachine = () => {
    const choise = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)

    return choise[randomNumber]
}