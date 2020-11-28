$(function() {
    var drawLine = false;

    var theCanvas = document.getElementById('map');
    var finalPos = {x:0, y:0};
    var startPos = {x:0, y:0};
    var ctx = theCanvas.getContext('2d');
    theCanvas.width = 420;
    theCanvas.height = 300;
    var startX;
    var startY;
    var finalX;
    var finalY;
    var lineDistance;

    var canvasOffset = $('#map').offset();

    function line(cnvs) {
        cnvs.beginPath();
        cnvs.moveTo(startPos.x, startPos.y);
        cnvs.lineTo(finalPos.x, finalPos.y);
        cnvs.stroke();
    }

    function clearCanvas()
    {
       ctx.clearRect(0, 0, theCanvas.width, theCanvas.height);
    }

    $('#map').mousemove(function(e) {
        if (drawLine === true) {
            finalPos = {x: e.pageX - canvasOffset.left, y:e.pageY - canvasOffset.top};

            clearCanvas();
            line(ctx);
            
            //console.log(finalPos.x,finalPos.y );
            
        }
    });

    $('#map').mousedown(function(e) {
        drawLine = true;
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        startPos = { x: e.pageX - canvasOffset.left, y: e.pageY - canvasOffset.top};
        
        startX=startPos.x;
        startY=startPos.y;
        console.log(startX,startY );
    });

    $(window).mouseup(function() {
    	finalX=finalPos.x;
        finalY=finalPos.y;
        console.log(finalX,finalY );
        
        lineDistance=Math.hypot(startX-finalX, startY-finalY);
        
        console.log(lineDistance);
        
        clearCanvas();
        // Replace with var that is second canvas
        line(ctx);
        finalPos = {x:0, y:0};
        startPos = {x:0, y:0};
        drawLine = false;
    });
});