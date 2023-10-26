let resetButton=document.getElementById('reset');
var res=document.getElementById('result');
let boxes=document.querySelectorAll('td');
let playerX="X";
let playerO="O";
var currentPlayer=playerX;
var flag=false;
var movesCount=0;
var winningPoints=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6]];
res.innerText="Player X will start the game!";
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.innerText==="")
        {
            box.innerText=currentPlayer;
            movesCount++;
            checkWinner();
            if(flag===false)changePlayer();
        }
    })
})

function changePlayer(){
    currentPlayer=currentPlayer===playerX?playerO:playerX;
    res.innerText="player "+currentPlayer+" turn"
}

function checkWinner() {
    for(let i=0;i<winningPoints.length;i++){
        let [a,b,c]=[...winningPoints[i]];
        if(boxes[a].innerText===currentPlayer && boxes[b].innerText===currentPlayer && boxes[c].innerText===currentPlayer){
            res.innerText="player "+currentPlayer+" won the game";
            flag=true;
            resetButton.removeAttribute("disabled");
            resetButton.style.opacity="1";
        }
    }
    if(flag===false && movesCount==boxes.length){
        flag=true;
        res.innerText="It is a draw";
        resetButton.removeAttribute("disabled");
        resetButton.style.opacity="1";
    }
    
}

function restart() {
    boxes.forEach((box)=>{
        box.innerText="";
    })
    res.innerText="Player X will start the game!";
    currentPlayer=playerX;
    flag=false;
    movesCount=0;
    reset.setAttribute("disabled",true);
    reset.style.opacity="0";
}
