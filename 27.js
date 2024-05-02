// Project: Magic 8-Ball

fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1,5));
if (answer === 1) {
    text("Number", 176, 200);
    text("one!", 159, 229);
} 
    else if (answer === 2) {
    text("Number", 176, 200);
    text("two!", 159, 229);
}
    else if (answer === 3) {
    text("Number", 176, 200);
    text("three!", 159, 229);
}
    else if (answer === 4) {
    text("Number", 176, 200);
    text("FOUR!", 159, 229);
}
    else if (answer === 5) {
    text("Number", 176, 200);
    text("FIVE!", 159, 229);
}

