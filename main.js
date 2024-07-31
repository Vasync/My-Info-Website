var x = document.getElementById("clicksound");
var video = document.getElementById('bgv');
var s = document.getElementById("cc");
var iplocal;
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "hot",
  user: "myusername",
  password: "mypassword"
});

function cc() {
    s.play();
}

function sound() {
    x.play();
}

function stared() {
    var ip = localStorage.getItem("ip");
        let currentStar = parseInt(localStorage.getItem("star"), 10) || 0;
        currentStar += 1;
    
        localStorage.setItem("star", currentStar);
    
        document.getElementById("countstar").innerHTML = "STAR: "+currentStar;
        x.play();
}

document.getElementById("countstar").innerHTML = "STAR: "+localStorage.getItem("star");