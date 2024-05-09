function drawSquere(x,y,r){
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
    
        ctx.fillRect(x, y, r, r);
      }
}

function drawSegment(x, y, r ,n){
    if(n > 6){
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
    drawSegment(0, 0, r, 0);
}

draw();