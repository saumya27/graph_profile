
var $cnvs = document.getElementById("cnvs");
var context = $cnvs.getContext('2d');
var centerX = $cnvs.width / 2;
var centerY = $cnvs.height / 2;

var radius = 30, count = 1 ;

$('.btn-sbmt').on('click', function(){

    context.clearRect(0, 0, $cnvs.width, $cnvs.height);

    var $name = $('.name').val(),
    $string = $('.string').val(),
    degree_increment = 360/$string.length, degree = 0;

    for(var i = $string.length-1; i>=0; i--){
        var rndm = Math.floor(Math.random()*($cnvs.height/2-150))+100

        var circle_x = centerX + rndm * Math.cos(Math.PI * degree / 180.0),
        circle_y = centerY + rndm * Math.sin(Math.PI * degree / 180.0),
        radius += 5*count;


        if($name.indexOf($string[i]) > -1){
            context.beginPath();
            context.moveTo(circle_x,circle_y);
            context.lineTo(centerX,centerY);
            context.stroke();    
        }

        context.beginPath();
        context.arc(circle_x,circle_y,radius,0,2*Math.PI);
        context.fillStyle = getRandomNewColor();
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = '#003300';
        context.stroke();

        context.beginPath();
        context.font = '10pt Calibri';
        context.fillStyle = "BLACK";
        context.textAlign = 'center';
        context.fillText($string[i], circle_x, circle_y);
        context.fill();
        degree += degree_increment;
    }

    context.beginPath();
    context.arc(centerX,centerY,radius,0,2*Math.PI);
    context.fillStyle = '#DEC0DE';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = '#003300';
    context.stroke();
    context.beginPath();

    context.beginPath();
    context.font = '8pt Calibri';
    context.fillStyle = "red";
    context.textAlign = 'center';
    context.fillText($name, centerX, centerY);
    context.fill();


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
