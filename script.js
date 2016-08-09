// Canvas baic properties
var $cnvs = document.getElementById("cnvs");
$cnvs.width = window.innerWidth - 20;
$cnvs.height = window.innerHeight - 100 ;

var context = $cnvs.getContext('2d'),
centerX = $cnvs.width / 2,
centerY = $cnvs.height / 2;



// click handler
$(document).on('click','.btn-sbmt', function(){    
    context.clearRect(0, 0, $cnvs.width, $cnvs.height);
    var $name = $('.name').val().toUpperCase(),
    $string = $('.string').val().toUpperCase(),
    degree = 0,
    letters =  {};

    // make the letters and count map
    for(x = 0, length = $string.length; x < length; x++) {
        var char = $string[x];
        letters[char] = (isNaN(letters[char]) ? 1 : letters[char] + 1);
    }
    var degree_increment = 360/(Object.keys(letters).length);
    // loop in the characters of a string
    for(key in letters) {
        var radius = 10;
        console.log(key + ' :: ' + letters[key]);
        var rndm = Math.floor(Math.random()*($cnvs.height/2-200))+150;

        var circle_x = centerX + rndm * Math.cos(Math.PI * degree / 180.0),
        circle_y = centerY + rndm * Math.sin(Math.PI * degree / 180.0);
        radius += 20*letters[key];
        console.log('radius',radius);

        // make the line betweend name and character which is present
        if($name.indexOf(key) > -1){
            context.beginPath();
            context.moveTo(circle_x,circle_y);
            context.lineTo(centerX,centerY);
            context.strokeStyle = '#000';
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
        context.font = '10pt Helvetica';
        context.fillStyle = "BLACK";
        context.textAlign = 'center';
        context.fillText(key, circle_x, circle_y);
        context.fill();

        degree += degree_increment;
    }

    // make the center star
    drawNameStar(centerX,centerY,7,80,45);

    //write the name in center circle
    context.beginPath();
    context.font = '10pt Helvetica';
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

function drawNameStar(cx,cy,spikes,outerRadius,innerRadius){
  var rot=Math.PI/2*3;
  var x=cx;
  var y=cy;
  var step=Math.PI/spikes;

  context.beginPath();
  context.moveTo(cx,cy-outerRadius)
  for(i=0;i<spikes;i++){
    x=cx+Math.cos(rot)*outerRadius;
    y=cy+Math.sin(rot)*outerRadius;
    context.lineTo(x,y)
    rot+=step

    x=cx+Math.cos(rot)*innerRadius;
    y=cy+Math.sin(rot)*innerRadius;
    context.lineTo(x,y)
    rot+=step
  }
  context.lineTo(cx,cy-outerRadius);
  context.closePath();
  context.lineWidth=5;
  context.strokeStyle='blue';
  context.stroke();
  context.fillStyle='skyblue';
  context.fill();
}
