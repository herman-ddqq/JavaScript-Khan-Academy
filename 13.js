// Project: Animal attack

var bodyPosX = 200;
var bodyPosY = 310;
var bodySizeW = 360;
var bodySizeH = 170;


draw = function() {
    background(250, 255, 251);
    fill(240, 209, 36);
    
    // body
    ellipse(bodyPosX, bodyPosY, bodySizeW, bodySizeH); 
    
    // face
    ellipse(bodyPosX-100, bodyPosY-100, bodySizeW/3, bodySizeH*0.7); 
    
    // eye outer
    fill(242, 233, 242);
    ellipse(bodyPosX-110, bodyPosY-110, bodySizeW/9, bodySizeH/4.25);
    
    // eye inner
    fill(13, 10, 13);
    ellipse(bodyPosX-110, bodyPosY-110, bodySizeW/14.4, bodySizeH/6.8);
    
    // eye's pupil
    fill(242, 233, 242);
    ellipse(bodyPosX-110, bodyPosY-115, bodySizeW/45, bodySizeH/21.25);
    
    // beak
    fill(235, 148, 7);
    triangle (bodyPosX-140, bodyPosY-145, bodySizeW/45, bodySizeH+10, bodySizeW/9, bodySizeW-141);
    
    // wing
    fill(242, 164, 9);
    arc (bodyPosX, bodyPosY-30, bodySizeW/1.3, bodySizeH, bodySizeW-363, bodySizeH-17);
    
    bodySizeW++;
    bodySizeH++;
    
    
};
