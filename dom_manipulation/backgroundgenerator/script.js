var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

(function() {
	setGradient();
	css.textContent = body.style.background + ";";
})()

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
  }

function randomColor() {
	var color = "#"
	for (let i = 0; i < 3; i++) {
		var num = Math.floor(Math.random() * 255);
		num = componentToHex(num);
		color += num;
	}
	return color;
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomGradient() {
	var first = randomColor();
	var second = randomColor();
	color1.value = first;
	color2.value = second;
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randomGradient);