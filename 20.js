// Project: Fish tank

background(89, 216, 255);

var drawFish = function(centerX, centerY, bodyLength, bodyHeight) {
var bodyColor = color(66, 115, 59);

noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
         
         
};

drawFish (109,65, 30,30);
drawFish (111,200, 60,60);
drawFish (293,100, 90,90);
drawFish (300,220, 120, 120);


         
