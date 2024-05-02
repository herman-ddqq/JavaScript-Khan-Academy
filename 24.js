// Challenge: Your First Button

draw = function() {
    fill(0, 255, 68); // start color
    
    if (mouseY <=200 && mouseIsPressed) {
    fill(227, 12, 65); // new colour
    
    }
    
    rect(0, 0, 400, 200);  // the button

    // The button text
    fill(0, 0, 0);
    textSize(30);
    text("Press me!", 145, 115);
};
