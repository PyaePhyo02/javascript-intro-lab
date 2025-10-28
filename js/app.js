// document.getElementById("myHeading") .innerHTML = "Justin"

// document.querySelector("nav ul li").setAttribute ('class', 'current page')

// document.querySelector("nav ul li a").setAttribute ('herf', 'https://mustbebuilt.co.uk')

const myHeading = document.getElementById ("myHeading")
myHeading.innerHTML = "Justin"

const myLink = document.querySelector("ul li ")
myLink.setAttribute ("class", "currentPage")

let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons); // Logs a NodeList of all elements with the class 'colPicker'

// for (let i = 0; i < colourButtons.length; i++) {
//     colourButtons[i].style.backgroundColor = "green";
// }

document.getElementById ("myTestBtn").addEventListener("click" ,function(ev){
    console.info(ev.target);
}) // function can take only one parametre 

const redBtn = document.querySelector (".red")
redBtn.addEventListener ("click", function(){
    console.info ("Red Button Clicked")
    document.body.setAttribute ("class", "redBack")
})


const greenBtn = document.querySelector(".green")
greenBtn.addEventListener("click", function(){
    console.info("Green Button CLicked")
    document.body.setAttribute("class", "greenBack")
})

const blueBtn = document.querySelector(".blue")
blueBtn.addEventListener ("click", function(){
    console.info ("Blue Button Clicked")
    document.body.setAttribute("class", "blueBack")
})

const resetBtn = document.querySelector(".reset")
resetBtn.addEventListener ("click", function(){
    console.info("Default button Clicked")
    // document.body.setAttribute("class", "resetBack") a wrong one 
    document.body.removeAttribute("class")
})

const nightmodeBtn = document.querySelector(".black")
nightmodeBtn.addEventListener ("click", function(){
    console.info("nightmode Button is Clicked")
    document.body.setAttribute("class", "blackBack")
})

