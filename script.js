let container = document.querySelector(".container");
let generate = document.querySelector(".generate");

let currentRing = container.firstElementChild;
console.log(currentRing);

generate.addEventListener("click", () => {
    if(!currentRing.className.includes("ring")){
        let rings = document.querySelectorAll(".ring");
        for (let ring of rings){
            ring.style.backgroundColor = "white";
        }
        currentRing = container.firstElementChild;
        return;
    }
    currentRing.style.backgroundColor = randomColor();
    currentRing = currentRing.firstElementChild;
    

})


function randomColor(){
    let red, green, blue;
    red = Math.floor(Math.random()*255);
    green = Math.floor(Math.random()*255);
    blue = Math.floor(Math.random()*255);
    return `rgb(${red}, ${green}, ${blue})`;
}