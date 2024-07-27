//Create a div evelement with a class of cell and append to sketch-container within for loop to create 16x16 grid
//Create toDraw function with eventListeners for mouse entering and leaving, resulting in random color generation 

const sketchContainer = document.querySelector(".sketch-container");
const reset = document.querySelector(".reset");

for (let i = 0; i < 16*16; i++) {
    const cellDiv = document.createElement("Div");
    sketchContainer.appendChild(cellDiv);
    cellDiv.setAttribute("class", "cell");

    const getRandomColor = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        cellDiv.style.backgroundColor = "#" + randomColor; 
    }
    
    cellDiv.addEventListener("mouseover", getRandomColor);

    const clearColor = () => {
        cellDiv.style.backgroundColor = "#f1f1f1";
    }
    
    reset.addEventListener("click", clearColor);
}



