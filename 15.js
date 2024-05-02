// Challenge: Mouse Tracker

fill(255, 0, 255);

draw = function() {
    
    background(255, 255, 255);
    ellipse(mouseX, mouseY, 30, 30); 
    var label =      mouseX +" ,  " + mouseY; 
    text (label, mouseX, mouseY);
    
    
};
