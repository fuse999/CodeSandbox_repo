let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, 800, 600);

ctx.fillStyle = "#f00";
ctx.fillRect(20, 20, 100, 100);

ctx.fillStyle = "#f00";
ctx.fillRect(140, 20, 100, 100);
