
var $cnvs = document.getElementById("cnvs");
var context = $cnvs.getContext('2d');
var centerX = $cnvs.width / 2;
var centerY = $cnvs.height / 2;

var radius = 30;

context.beginPath();
context.arc(centerX,centerY,radius,0,2*Math.PI);
context.fillStyle = '#DEC0DE';
context.fill();
context.lineWidth = 2;
context.strokeStyle = '#003300';
context.stroke();
context.beginPath();

$('.btn-sbmt').on('click', function(){

    var $name = $('.name').val();
    var $string = $('.string').val();

    context.beginPath();
    context.font = '8pt Calibri';
    context.fillStyle = "red";
    context.textAlign = 'center';
    context.fillText($name, centerX, centerY);
    context.fill();

    
    for(var i = $string.length-1; i>=0; i--){
        context.beginPath();
        context.arc(i*200,i*250,radius,0,2*Math.PI);
        context.fillStyle = getRandomNewColor();
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = '#003300';
        context.stroke();

        context.beginPath();
        context.font = '10pt Calibri';
        context.fillStyle = "BLACK";
        context.textAlign = 'center';
        context.fillText($string[i], i*200, i*250);
        context.fill();

        context.beginPath();
        context.moveTo(i*200+radius,i*250);
        context.lineTo(centerX-radius,centerY);
        context.stroke();
    }

});


function getRandomNewColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    var arr = [];
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    if(arr.indexOf(color)==-1 ){
        arr.push(color);
        return color;
    }else{
        getRandomNewColor();
    }
} 
