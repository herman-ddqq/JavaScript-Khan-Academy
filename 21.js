// Challenge: Bouncy Ball

// position of the ball
var y = 0;
// how far the ball moves every time
var speed = 5;

draw = function() {
    background(127, 204, 255);
    
    fill(66, 66, 66);
    ellipse(200, y, 50, 50);

    // move the ball
    y = y + speed;
    
    if (y>375) {
        speed = -5;
    }
    if (y<25) {
        speed = 5;
    }

};
