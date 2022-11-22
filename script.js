main = document.getElementById('main');

main.innerHTML = [1,2,3,4,5,6,7,8,9].map((el)=>{
  return `<div onclick="clickDiv(this)" class="item" id="${el}"></div>`
  }).toString().replaceAll(",","")

item = "O"

function clickDiv(t) {
  item == "O" ? "X" : "O";
  
if (win || t.innerHTML) {
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

msg = document.getElementById("winMsg");
  it = document.querySelectorAll("[class=item]");
win = false

function getWin(w) {

if (it[0].innerHTML == w && 
it[1].innerHTML == w && 
it[2].innerHTML == w){
  winMsg(w,0,1,2)
} else if(it[3].innerHTML == w && 
it[4].innerHTML == w && 
it[5].innerHTML == w){
  winMsg(w,3,4,5)
}else if(it[6].innerHTML == w && 
it[7].innerHTML == w && 
it[8].innerHTML == w){
  winMsg(w,6,7,8)
}else if(it[0].innerHTML == w && 
it[3].innerHTML == w && 
it[6].innerHTML == w){
  winMsg(w,0,3,6)
} else if(it[1].innerHTML == w && 
it[4].innerHTML == w && 
it[7].innerHTML == w){
  winMsg(w,1,4,7)
}else if(it[2].innerHTML == w && 
it[5].innerHTML == w && 
it[8].innerHTML == w){
  winMsg(w,2,5,8)
}else if(it[0].innerHTML == w && 
it[4].innerHTML == w && 
it[8].innerHTML == w){
  winMsg(w,0,4,8)
}else if(it[2].innerHTML == w && 
it[4].innerHTML == w && 
it[6].innerHTML == w) {
      winMsg(w,2,4,6)
   } else {
      getDraw()
   }
}

function winMsg(w,a,b,c) {
  
  msg.innerHTML = w +" - ganhou!"
    msg.style.display = "flex"
  it[a].style.backgroundColor = "tomato";
  it[b].style.backgroundColor = "tomato";
  it[c].style.backgroundColor = "tomato";
  
document.getElementById('btn').style.display = "flex";
  win = true
}

function getDraw() {
cont = 0;
   for (let i of it) {
      if (i.innerHTML != "") {
         cont++;
      }
   }
  if (cont == 9) {
msg.innerHTML ="Empatou!"
    msg.style.display = "flex"
document.getElementById('btn').style.display = "flex";

  win = true
   }
}

function newGame() {
   for (let i of it) {
    i.innerHTML = "" ;
i.style.backgroundColor = "#333"
   }
   win = false
document.getElementById('btn').style.display = "none"
  msg.style.display = "none"
}
