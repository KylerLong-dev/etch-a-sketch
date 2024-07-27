//Create a div evelement with a class of cell and append to sketch-container
//Style the cell in css 

const sketchContainer = document.querySelector(".sketch-container");

for (let i = 0; i < 16; i++) {
    const cellDiv = document.createElement("Div");
    sketchContainer.appendChild(cellDiv);
    cellDiv.setAttribute("class", "cell");
}