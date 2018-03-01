
var clear = document.getElementById("cb");
var toggle = document.getElementById("tb");
var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var mode = "circle";
var lastX = null;
var lastY = null;

canvas.onclick = function(e){
    if (mode == "square") ctx.fillRect(e.offsetX, e.offsetY, 20,20);
    else {
      ctx.beginPath();
      ctx.arc(e.offsetX, e.offsetY, 9, 0 , 2 * Math.PI);
     if (lastX != null && lastY != null){
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
    }
    lastX = e.offsetX;
    lastY = e.offsetY;
      ctx.stroke();
      ctx.fill();
    }
}

clear.onclick = function(){
    ctx.clearRect(0,0,500,500);
}

toggle.onclick = function(){
    if (mode == "circle") mode = "square";
    else mode = "circle";
}
