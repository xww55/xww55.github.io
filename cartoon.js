document.body.style.backgroundColor = "#d88aa2";
document.body.style.textAlign = "center";

const ctx = document.getElementById("cartoonCanv").getContext("2d");
ctx.canvas.width = 900;
ctx.canvas.height = 500;
ctx.canvas.style.border = "5px solid black";

// sky
ctx.fillStyle = "#b5e9ff";
ctx.fillRect(0, 0, 900, 500);

// sun
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(90, 70, 40, 0, 2*Math.PI);
ctx.fill();

// ground
ctx.fillStyle = "#79e55e";
ctx.fillRect(0, 370, 900, 200);

// text in canvas
ctx.fillStyle = "black";
ctx.font = "20px Arial";
ctx.textAlign = "center";
ctx.fillText("A bright day with a peaceful house.", 450, 50);

// house - rectangle
ctx.fillStyle = "#ffe0b5";
ctx.fillRect(350, 230, 270, 190);
// roof
ctx.fillStyle = "#624125";
ctx.beginPath();
ctx.moveTo(350, 230);   // left eave
ctx.lineTo(485, 100);   // peak
ctx.lineTo(620, 230);   // right eave
ctx.closePath();
ctx.fill();

// windows
ctx.fillStyle = "#97c4c9";
ctx.fillRect(400, 260, 50, 50);
ctx.fillRect(400, 340, 50, 50);
ctx.fillRect(520, 260, 50, 50);
ctx.fillRect(520, 340, 50, 50);
// door
ctx.fillStyle = "#624125";
ctx.fillRect(462, 340, 45, 80);

// door knob
ctx.fillStyle = "#ffcc00";
ctx.beginPath();
ctx.arc(498, 387, 5, 0, 2 * Math.PI);
ctx.fill();

// grass
let bunch = 100;
ctx.strokeStyle = "#396912";
ctx.lineWidth = 2;

// creates 5 bunches of grass
for (var i = 0; i < 5; i++) {
    ctx.save();
    
    ctx.translate(bunch, 440);
 
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-7, -25); ctx.stroke(); // left grass blade
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -33);  ctx.stroke(); // center blade
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(7, -25);  ctx.stroke(); // right blade
 
    bunch += 170;   // each bunch is located after distance +170
    ctx.restore();
}
