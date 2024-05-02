// Challenge: Picture Painter

var paintBrush = {
    x: 300,
    y: 150,
    img: getImage("avatars/marcimus")
};



var paintCanvas = function() {
    imageMode(CENTER);
    image(paintBrush.img, paintBrush.x, paintBrush.y);
};



mouseMoved = function () {
    paintBrush.x = mouseX;
    paintBrush.y = mouseY;
    paintCanvas();
};




