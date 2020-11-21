var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var button=document.querySelector(".btn1");

body.onload=setGradient;

function setGradient() {
  body.style.background="linear-gradient(to right, " + color1.value + "," + color2.value + ")";
  css.textContent=body.style.background + ";";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//3. BONUS: Add a random button which generates two random numbers for the colour inputs.
/* function randomColorGen(){
	let randomColor = Math.floor(Math.random()*16777215).toString(16);
	return "#" + randomColor;
}

function randomBackground(){
	color1.value = randomColorGen();
	color2.value = randomColorGen();
	setGradient();
}
button.addEventListener("click", randomBackground); */