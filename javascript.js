let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn=document.querySelector(".newbtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let count=0;
let turn0=true;

const winPatterns=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0===true){
            box.innerText="O";
            turn0=false; 
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++;
        checkWinner();

        let isWinner = checkWinner();
        if(count==9 && !isWinner){
         gamedraw();
}
    });
});

const gamedraw=()=>{
    msg.innerText="Game was a draw.";
    msgContainer.classList.remove("hide");
    // disableBoxes();
    };
    

const disableBoxes=()=>{
for(let box of boxes){
    box.disabled=true;
}
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        msgContainer.classList.add("hide"); 
    }
    };

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner = () => {
for(let pattern of winPatterns){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;

    if(pos1val!== "" && pos2val!=="" && pos3val!==""){
      if(pos1val===pos2val && pos2val===pos3val){
        showWinner(pos1val);
        return true;
      }  
    }
}
};

const resetGame = ()=>{
turn0=true;
count=0;
enableBoxes();
msgContainer.classList.add("hide");
}
resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);