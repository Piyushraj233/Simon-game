// let gameSeq = [];
// let userSeq = [];

// let btns = ["yellow", "red", "purple", "green"];

// let started = false;
// let level = 0;

// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function() {
//     if (started == false) {
//         console.log("game is started");
//         started = true;

//         levelUp();
//     }
// });

// function gameFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function() {
//         btn.classList.remove("flash");
//     }, 250);
// }

// function btnFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function() {
//         btn.classList.remove("flash");
//     }, 250);
// }

// function userFlash(btn) {
//     btn.classList.add("userflash");
//     setTimeout(function() {
//         btn.classList.remove("userflash");
//     }, 250);
// }

// function levelUp() {
//     userSeq = [];
//     level++;
//     h2.innerText = `level ${level}`;

//     let randInx = Math.floor(Math.random() * 3);
//     let randColor = btns[randInx];
//     let randBtn = document.querySelector(`.${randColor}`);
//     // console.log(randInx);
//     // console.log(randColor);
//     // console.log(randBtn);

//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     btnFlash(randBtn);
//     gameFlash(randBtn);
// }

// function checkAns(idx) {
//     // console.log("curr level:", level);
//     // let idx = level - 1;

//     if (userSeq[idx] === gameSeq[idx]) {
//         console.log("same value");
//         if (userSeq.length == gameSeq.length) {
//             setTimeout(levelUp, 1000);
//         }

//     } else {
//         h2.innerHTML = `Game Over! Your Score was <br> ${level}</br>  <br>Press any key to start.`;
//         document.querySelector("body").style.backgroundColor = "red";
//         setTimeout(function() {
//             document.querySelector("body").style.backgroundColor = "white"
//         }, 150);

//         reset();
//     }
// }



// function btnPress() {
//     console.log(this);
//     let btn = this;
//     userFlash(btn);

//     userColor = btn.getAttribute("id");
//     console.log(userColor);
//     userSeq.push(userColor);


//     checkAns(userSeq.length - 1);
// }

// let allBtns = document.querySelectorAll(".btn");
// for (btn of allBtns) {
//     btn.addEventListener("click", btnPress);
// }

// function reset() {
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
// }



//NEW PROGRAM TO SHOW THE HIGH SCORE ON FULL BODY(SCREEN)


let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let highScore = 0; // ✅ Track highest score

let h2 = document.querySelector("h2");
let restartBtn = document.createElement("button"); // ✅ Restart button
restartBtn.innerText = "Restart Game";
restartBtn.style.display = "none"; // hidden initially
document.body.appendChild(restartBtn);

document.addEventListener("keypress", function() {
    if (!started) {
        startGame();
    }
});

restartBtn.addEventListener("click", function() {
    startGame();
});
``

function startGame() {
    console.log("game is started");
    started = true;
    level = 0;
    gameSeq = [];
    userSeq = [];
    h2.innerText = "Game Started!";
    restartBtn.style.display = "none"; // hide restart button
    levelUp();
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 250);
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => btn.classList.remove("userflash"), 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randInx = Math.floor(Math.random() * btns.length); // ✅ fixed to use all 4 colors
    let randColor = btns[randInx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randBtn);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        // ✅ Update high score
        if (level > highScore) {
            highScore = level;
        }

        h2.innerHTML = `Game Over! Your Score: ${level} <br> Highest Score: ${highScore}`;
        document.body.style.backgroundColor = "red";
        setTimeout(() => document.body.style.backgroundColor = "white", 150);


        document.body.classList.add("game-over");
        setTimeout(() => document.body.classList.remove("game-over"), 250);
        restartBtn.style.display = "block";


        // show restart button
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}


// document.body.classList.add("game-over");
// setTimeout(() => document.body.classList.remove("game-over"), 1000);


function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}