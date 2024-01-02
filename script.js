let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;//player O
let count = 1;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0==true){
            box.innerText= "O";
            turn0 = false;
        }
        else{
            box.innerText= "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
        
    });
});

const enableBoxes = () => {
    turn0 = true;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;
};

const disableButton = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congrutulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableButton();
};

const checkWinner=()=>{
    for( let pattern of winPatterns){
        let post1 = boxes[pattern[0]].innerText;
        let post2 = boxes[pattern[1]].innerText;
        let post3 = boxes[pattern[2]].innerText; 
        if(post1!="" && post2!="" && post3!=""){
            if(post1===post2 && post2 === post3){
                showWinner(post1);
            }
            else if(count===9){
                msg.innerHTML = "This match is Draw!";
                msgContainer.classList.remove("hide");
            }
        }
    }
};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);