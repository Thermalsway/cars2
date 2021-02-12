canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 120;
rover_height = 70;
rover_height2=70;
rover_width2=120;
rover_image2="https://i.postimg.cc/9rqYz9HM/car1.png";
rover_x2=10;
rover_y2=100;

background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";

rover_image = "https://i.postimg.cc/9rqYz9HM/car1.png";

rover_x = 10;
rover_y = 10;

function add() {
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
    background_imgTag.src = background_image;   // load image

    rover_imgTag = new Image(); //defining a variable with a new image
    rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
    rover_imgTag.src = rover_image;   // load image
    rover_imgTag2 = new Image(); //defining a variable with a new image
    rover_imgTag2.onload = uploadrover2; // setting a function, onloading this variable
    rover_imgTag2.src = rover_image2;   // load image
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
function uploadrover2(){


    ctx.drawImage(rover_imgTag2, rover_x2, rover_y2, rover_width2, rover_height2);
}



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("up");
        }
        if(keyPressed == '40')
        {
            down();
            console.log("down");
        }
        if(keyPressed == '37')
        {
            left();
            console.log("left");
        }
        if(keyPressed == '39')
        {
            right();
            console.log("right");
        }
        if(keyPressed == '87'){
            up2();
        }
        if(keyPressed == '65'){
            left2();
        }
        if(keyPressed == '68'){
            right2();
        }
        if(keyPressed == '83'){
            down2();
        }
}

function up()
{
    if(rover_y >=0)
    {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
         uploadBackground();
         uploadrover();
         uploadrover2();
    }
}
function down()
{
    if(rover_y <=500)
    {
        rover_y =rover_y+ 10;
        console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
         uploadrover();
         uploadrover2();
    }
}
function left()
{
    if(rover_x >= 0)
    {
        rover_x =rover_x - 10;
        console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
         uploadrover();
         uploadrover2();
    }
}
function right()
{
    if(rover_x <= 700)
    {
        rover_x =rover_x + 10;
        console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
        uploadrover2();
   }
}
function up2()
{
    if(rover_y2 >=0)
    {
        rover_y2 = rover_y2 - 10;
        console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
         uploadBackground();
         uploadrover2();
         uploadrover();
    }
}
function down2()
{
    if(rover_y2 <=500)
    {
        rover_y2 =rover_y2+ 10;
        console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
         uploadrover2();
         uploadrover();
    }
}
function left2()
{
    if(rover_x2 >= 0)
    {
        rover_x2 =rover_x2 - 10;
        console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
         uploadrover2();
         uploadrover();
    }
}
function right2()
{
    if(rover_x2 <= 700)
    {
        rover_x2 =rover_x2   + 10;
        console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover2();
        uploadrover();
   }
}