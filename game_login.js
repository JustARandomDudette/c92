var player1 = "";
var player2 = "";

function addUser() {
player1 = document.getElementById("text-player-1").value;
player2 = document.getElementById("text-player-2").value;

localStorage.setItem("Player 1 - Username", player1);
localStorage.setItem("Player 2 - Username", player2);

window.location = "play_screen.html";
}