// Project: Make it rain

var xPositions = [200];
var yPositions = [0];


// Number of drops to add
var numDropsToAdd=10;

// Add drops to the array using rando x-coordinate
    for (var i = 0; i < numDropsToAdd; i++) {
        xPositions.push(random (0,400));
        yPositions.push(0);
}


draw = function() {
    background(204, 247, 255);

    noStroke();
    fill(0, 200, 255);

    for (var i = 0; i < xPositions.length; i++) {
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
        
        
    if (yPositions[i] >= 400) {
       yPositions[i] =1; 
       
    }

        
        
    }
    
};