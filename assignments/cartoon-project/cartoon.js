document.body.style.backgroundColor = "#d88aa2";
document.body.style.textAlign = "center";

const ctx = document.getElementById("cartoonCanv").getContext("2d");
ctx.width = 900;
ctx.height = 500;
ctx.style.border = "5px solid black";



// sky
ctx.fillStyle = "#91d2fa";
ctx.fillRect(0, 0, 800, 500);

// sun
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(90, 70, 0, 2*Math.PPI);
ctx.fill();

// ground
ctx.fillStyle = "#79e55e";
ctx.fillRect(0, 430, 800, 200);

// text in canvas
ctx.fillStyle = "black";
ctx.font = "35px Arial";
ctx.textAlign = "center";
ctx.fillText("A bright day with a peaceful house.", 400, 90);

// house
ctx.fillStyle = "#ebad87";
ctx.fillRect(350, 200, 180, 140);

// ctx.fillStyle = "#624125";

