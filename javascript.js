const container = document.getElementById("container");

const boxSide = 30
const maxBoxes = boxSide * boxSide
function boxResize(num) {
    return (500 / num);
}
const boxSize = boxResize(boxSide);

for (let i = 0; i < maxBoxes; i++) {
    const box = document.createElement("div")
    box.style.backgroundColor = "blue";
    box.style.height = boxSize + "px";
    box.style.width = boxSize + "px";
    container.appendChild(box)
}



