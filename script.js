let selection = document.getElementById("dropDownIterations");

function drawSquere(x,y,r){
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
    
        ctx.fillRect(x, y, r, r);
      }
}

function drawSegment(x, y, r ,n){
    let iterations = selection.value;
    if(n > iterations){
        return;
    }

    drawSquere(x + r/3, y + r/3, r/3);

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(i != 1 || j != 1){
                drawSegment(x + r*i / 3 , y + r*j / 3, r / 3 , n+1);
            }
        }
    }
}

function draw() {
    let r = 600;
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    drawSegment(0, 0, r, 0);
}

draw();
selection.onchange = draw;
