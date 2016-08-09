// Canvas v=baic properties
var $cnvs = document.getElementById("cnvs"),
context = $cnvs.getContext('2d'),
centerX = $cnvs.width / 2,
centerY = $cnvs.height / 2;

// click handler
$('.btn-sbmt').on('click', function(){
    var radius = 30;
    context.clearRect(0, 0, $cnvs.width, $cnvs.height);

    var $name = $('.name').val(),
    $string = $('.string').val(),
    degree_increment = 360/$string.length, degree = 0,
    letters =  new Object;

    // make the letters and count map
    for(x = 0, length = $string.length; x < length; x++) {
        var char = $string[x];
        letters[char] = (isNaN(letters[char]) ? 1 : letters[char] + 1);
    }

    // loop in the characters of a string
    for(key in letters) {
        console.log(key + ' :: ' + letters[key]);
        var rndm = Math.floor(Math.random()*($cnvs.height/2-150))+100;

        var circle_x = centerX + rndm * Math.cos(Math.PI * degree / 180.0),
        circle_y = centerY + rndm * Math.sin(Math.PI * degree / 180.0);
        radius += 20*letters[key];
        console.log('radius',radius);

        // make the line betweend name and character which is present
        if($name.indexOf(key) > -1){
            context.beginPath();
            context.moveTo(circle_x,circle_y);
            context.lineTo(centerX,centerY);
            context.stroke();    
        }

        //make character circles with random colors
        context.beginPath();
        context.arc(circle_x,circle_y,radius,0,2*Math.PI);
        context.fillStyle = getRandomNewColor();
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = '#003300';
        context.stroke();

        //write the character value in the circle
        context.beginPath();
        context.font = '10pt Calibri';
        context.fillStyle = "BLACK";
        context.textAlign = 'center';
        context.fillText(key, circle_x, circle_y);
        context.fill();

        degree += degree_increment;
    }

    // make the center circle
    context.beginPath();
    context.arc(centerX,centerY,50,0,2*Math.PI);
    context.fillStyle = '#DEC0DE';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = '#003300';
    context.stroke();
    context.beginPath();

    //write the name in center circle
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
