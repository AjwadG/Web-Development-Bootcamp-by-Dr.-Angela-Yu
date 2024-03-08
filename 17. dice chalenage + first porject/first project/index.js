function dice() {
    return Math.ceil(Math.random() * 6);
}

var player1 = dice();
var player2 = dice();

document.getElementById("player1").setAttribute("src", "images/dice"+ player1 +".png");
document.getElementById("player2").setAttribute("src", "images/dice"+ player2 +".png");

if (player1 > player2){
    document.querySelector("h1").innerHTML = "🚩 PLayer 1 wins.";
}   else if (player2 > player1) {
    document.querySelector("h1").innerHTML = "PLayer 2 wins. 🚩";
}   else {
    document.querySelector("h1").innerHTML = "🚩 Draw 🚩";
}