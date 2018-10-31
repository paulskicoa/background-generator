var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function setRandomColors() {
	// generate two random 6 char hex numbers for colors
	var randomHex1 = "#000000".replace(/0/g, function(){return (~~(Math.random()*16)).toString(16);});
	var randomHex2 = "#000000".replace(/0/g, function(){return (~~(Math.random()*16)).toString(16);});
	color1.value = randomHex1;
	color2.value = randomHex2;
	setGradient();
}

color1.value = "#ff0000";
color2.value = "#ffff00";
setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomColors);