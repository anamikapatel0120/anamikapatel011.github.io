let stone = document.getElementById("stone");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let boxes = document.querySelectorAll(".box");
let userScore = document.getElementById("user-score");
let compScore = document.getElementById("comp-score");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");

let uScore = 0;
let cScore = 0;

let choices = ["stone", "paper", "scissor"];

function compChoice() {
    for (let i = 0; i < 1; i++) {
        return choices[Math.floor(Math.random() * 3)];
    } 
}
var comp = compChoice();
console.log(comp);

let user;
function userChoice() {
    stone.addEventListener("click",()=>{
        user = "stone";
        console.log(user);
        drawGame();
    });
    paper.addEventListener("click",()=>{
        user = "paper";
        console.log(user);
        drawGame();
    });
    scissor.addEventListener("click",()=>{
        user = "scissor";
        console.log(user);
        drawGame();
    });
}

userChoice();

function drawGame(){
    const userChoiceVal = user;
    const compChoiceVal = comp;

    if(userChoiceVal === compChoiceVal){
        console.log("draw");
        btn.innerText = `Draw, your choice is ${user} and computer's choice is also ${comp}`;
        btn.style.backgroundColor = "#222823";
        const userChoiceVal = user;
        comp = compChoice(); // Update the computer's choice
        const compChoiceVal = comp;
    } else{
        winGame();
        const userChoiceVal = user;
        comp = compChoice(); // Update the computer's choice
        const compChoiceVal = comp;
    }
}

function winGame(){
    const userChoiceVal = user;
    const compChoiceVal = comp;
    if(userChoiceVal === "stone" && compChoiceVal === "paper"){
        btn.innerText = `your choice ${user} lose against computer's choice ${comp}`;
        btn.style.backgroundColor = "Red";
        cScore++;
        compScore.innerText = cScore;
    }
    else if(userChoiceVal === "stone" && compChoiceVal === "scissor"){
        btn.innerText = `your choice ${user} beats computer's choice ${comp}`;
        btn.style.backgroundColor = "Green";
        uScore++;
        userScore.innerText = uScore;
    }
    else if (userChoiceVal === "paper" && compChoiceVal === "stone") {
        btn.innerText = `your choice ${user} beats computer's choice ${comp}`;
        btn.style.backgroundColor = "Green";
        uScore++;
        userScore.innerText = uScore;
    }
    else if(userChoiceVal === "paper" && compChoiceVal === "scissor"){
        btn.innerText = `your choice ${user} lose against computer's choice ${comp}`;
        btn.style.backgroundColor = "Red";
        cScore++;
        compScore.innerText = cScore;
    }
    else if (userChoiceVal === "scissor" && compChoiceVal === "paper") {
        btn.innerText = `your choice ${user} beats computer's choice ${comp}`;
        btn.style.backgroundColor = "Green";
        uScore++;
        userScore.innerText = uScore;
    }
    else {
        btn.innerText = `your choice ${user} lose against computer's choice ${comp}`;
        btn.style.backgroundColor = "Red";
        cScore++;
        compScore.innerText = cScore;
    }
}


function resetGame() {
    compScore.innerText = 0;
    userScore.innerText = 0;
    btn.innerText = "Choose your move";
    btn.style.backgroundColor = "#222823";
    uScore = 0;
    cScore = 0;
    const userChoiceVal = user;
    comp = compChoice(); // Update the computer's choice
    console.log(comp);
    const compChoiceVal = comp;

}

btn2.addEventListener("click", resetGame);











