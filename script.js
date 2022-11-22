main = document.getElementById('main');

main.innerHTML = [1,2,3,4,5,6,7,8,9].map((el)=>{
  return `<div onclick="clickDiv(this)" class="item" id="${el}"></div>`
  }).toString().replaceAll(",","")

item = "O"

function clickDiv(t) {
  item == "O" ? "X" : "O";
  
if (win) {
   return;
}

  if (item == "O") {
     t.innerHTML = `X`
    item = "X"
    getWin("X")
  } else {
     t.innerHTML = `O`
    item = "O"
    getWin("O")
  }
}

  it = document.querySelectorAll("[class=item]");
win = false

function getWin(w) {

  console.log(w);
console.log(it[0].innerHTML);
 
if (
 // row
(it[0].innerHTML == w && 
it[1].innerHTML == w && 
it[2].innerHTML == w) ||
(it[3].innerHTML == w && 
it[4].innerHTML == w && 
it[5].innerHTML == w) ||
(it[6].innerHTML == w && 
it[7].innerHTML == w && 
it[8].innerHTML == w) ||
 // column
(it[0].innerHTML == w && 
it[3].innerHTML == w && 
it[6].innerHTML == w) ||
(it[1].innerHTML == w && 
it[4].innerHTML == w && 
it[7].innerHTML == w) ||
(it[2].innerHTML == w && 
it[5].innerHTML == w && 
it[8].innerHTML == w) ||
 // diagonal
(it[0].innerHTML == w && 
it[4].innerHTML == w && 
it[8].innerHTML == w) ||
(it[2].innerHTML == w && 
it[4].innerHTML == w && 
it[6].innerHTML == w)
) {
      alert(w +" ganhou!");
document.getElementById('btn').style.display = "flex";

  win = true
   } else {
      getDraw()
   }
}


function getDraw() {
cont = 0;
   for (let i of it) {
      if (i.innerHTML != "") {
         cont++;
      }
   }
  if (cont == 9) {
      alert("empatou!");
document.getElementById('btn').style.display = "flex";

  win = true
   }
}

function newGame() {
   for (let i of it) {
    i.innerHTML = "" ;
   }
   win = false
document.getElementById('btn').style.display = "none"
}
