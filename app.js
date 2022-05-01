var sumArea = document.getElementById("sumArea");
var input = document.getElementById("isCorrect");

var a = document.createElement("p");
sumA = randomInt(1,100);
sumB = randomInt(1,100);
a.innerText = sumA + " + " + sumB;

sumArea.appendChild(a);

sonuc = sumA + sumB;

const sumBtn = document.getElementById("sum");

sumBtn.onclick = function() {
  if(sonuc == input.value){
    alert("Your answer is correct.");
  }

  else {
    alert("Your answer is wrong.");
  }
}




function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}