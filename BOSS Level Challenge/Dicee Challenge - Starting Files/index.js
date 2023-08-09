var num1 = Math.floor(Math.random()*6) + 1;
var num2 = Math.floor(Math.random()*6) + 1;
var image1 = "./images/dice" + num1 + ".png";
var image2 = "./images/dice" + num2 + ".png";

document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);

if(num1 < num2){
  document.querySelector(".container h1").textContent = "🚩 Player1 Wins";
}else if(num1 === num2){
  document.querySelector(".container h1").textContent = "Draw!";
}else{
  document.querySelector(".container h1").textContent = "Player2 Wins 🚩";
}