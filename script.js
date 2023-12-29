let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");
const drawGame=()=>{
    console.log("Game Drawn");
    msg.innerText="Game Drawn";
    msg.style.backgroundColor="yellow";
};

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win!");
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Lost");
        msg.innerText="You Lost!";
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice=>{
    console.log("User's choice=",userChoice);
    const computerChoice=compChoice();
    console.log("Computer's choice=",computerChoice);

    if(userChoice===computerChoice){
        //draw
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=computerChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=computerChoice==="scissors"?false:true;
        }
        else{
            userWin=computerChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
});

const compChoice=()=>{
    const options=["rock","paper","scissors"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});