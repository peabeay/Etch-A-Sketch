const container = document.getElementById("container");
const boxHeight = "25px";
const boxWidth = "25px";


const maxBoxes = 64

for (let i = 1; i < maxBoxes; i++) {
    const box = document.createElement("div")
    box.style.backgroundColor = "blue";
    box.style.height = boxHeight;
    box.style.width = boxWidth;
    container.appendChild(box)
}



