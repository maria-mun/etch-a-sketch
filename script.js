
const grid = document.querySelector(".grid");
const sizeInput = document.querySelector(".size.input");
const colorInput = document.querySelector(".color.input");
const colorIndicator = document.querySelector(".color-indicator");
const clearButton = document.querySelector(".button.clear");


let size = sizeInput.value;
makeGrid(size);
let color = colorInput.value;
drawColor(color);


sizeInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        deleteSquares();
        size = sizeInput.value;
        makeGrid(size);
        color = colorInput.value;
        drawColor(color);
    };
}); 


colorInput.addEventListener("change", () => {
    color = colorInput.value;
    colorIndicator.style.backgroundColor = color;
    drawColor(color);
});


clearButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach ((square) => {
        square.style.backgroundColor = "white";
    });
});


function drawColor (color) {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("click", () => {
            square.style.backgroundColor = color;
        });
    });
};


function makeGrid(size) {
    for (let i=0; i<size*size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.backgroundColor = "white";
        square.style.width = `${400/size }px`;
        square.style.height = `${400/size }px`;
        grid.appendChild(square);
    }
}


//
function deleteSquares () {
    const squares = document.querySelectorAll(".square");
    squares.forEach ((square) => {
        grid.removeChild(square);
    });
};