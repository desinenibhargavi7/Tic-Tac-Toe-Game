let boxes = document.querySelectorAll(".box");

let resetbtn = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#new-btn");

let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; // player 0


// Winning patterns
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


// When a box is clicked
boxes.forEach((box) => {

    box.addEventListener("click", () => {

        console.log("box was clicked");

        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }

        // Disable clicked box
        box.disabled = true;

        // Check winner
        checkWinner();
    });

});


// Show winner
const showWinner = (winner) => {

    msg.innerText = `Congratulations, Winner is ${winner}`;

    msgcontainer.classList.remove("hide");

    // Disable all boxes
    boxes.forEach((box) => {
        box.disabled = true;
    });
};


// Check winner
const checkWinner = () => {

    for (let pattern of winPatterns) {

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;


        // Check that boxes are not empty
        if (
            pos1val != "" &&
            pos2val != "" &&
            pos3val != ""
        ) {

            // Check same values
            if (
                pos1val === pos2val &&
                pos2val === pos3val
            ) {

                console.log("Winner", pos1val);

                showWinner(pos1val);
            }
        }
    }
};


// Reset game
const resetGame = () => {

    turn0 = true;

    msgcontainer.classList.add("hide");

    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
};


// New Game button
newGameBtn.addEventListener("click", resetGame);


// Reset Game button
resetbtn.addEventListener("click", resetGame);
