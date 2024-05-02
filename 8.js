// Project: Shooting star

var xPos = 379;
var yPos = 29;
var aPos = 10;
var bPos = 29;

draw = function() {
    background(39, 39, 207);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 50, 10);
    xPos--;
    yPos++;
    
    fill(255, 242, 0);
    ellipse(aPos, bPos, 100, 50);
    aPos++;
    bPos++;
};

