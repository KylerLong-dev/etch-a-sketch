
const sketchContainer = document.querySelector(".sketch-container");
const reset = document.querySelector(".reset");
const sliderNumber = document.querySelector(".number-slider");
const sliderDisplay = document.querySelector(".slider-value");
sliderDisplay.textContent = 16;

const createCells = (numberOfCells) => {
    sketchContainer.innerHTML = "";

    //calculate the size of each cell based on the container size and number of cells
    const containerSize = 256; 
    const cellSize = containerSize / numberOfCells; 
    document.documentElement.style.setProperty("--cell-size", `${cellSize}px`);

    for (let i = 0; i < numberOfCells*numberOfCells; i++) {
        const cellDiv = document.createElement("div");
        sketchContainer.appendChild(cellDiv);
        cellDiv.setAttribute("class", "cell");

        const getRandomColor = () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            cellDiv.style.backgroundColor = "#" + randomColor; 
        }
        
        cellDiv.addEventListener("mouseover", getRandomColor);
    }
}

createCells(16);

sliderNumber.addEventListener("input", (e) => {
    const sliderValue = sliderNumber.value;
    sliderDisplay.textContent = sliderValue;
    createCells(sliderValue);
});

reset.addEventListener("click", (e) => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.backgroundColor = "#f1f1f1";
    })
});



