// Challenge: SmileyFace

var SmileyFace = function (centerX, centerY) {
    this.centerX=centerX;
    this.centerY=centerY;
};

SmileyFace.prototype.draw = function() {
    fill(168, 124, 70);
    ellipse(this.centerX, this.centerY, 150, 150);
    fill(0, 0, 0);
    ellipse(this.centerX-30, this.centerY-30, 20, 20); 
    ellipse(this.centerX+30, this.centerY-30, 20, 20); 
    noFill(); 
    strokeWeight(3);
    arc(this.centerX, this.centerY+10, 64, 40, 0, 180);
};

SmileyFace.prototype.speak = function (texting) {
    text (texting, this.centerX+-95, this.centerY+-97);
};

var face = new SmileyFace (200,300);
face.draw();
face.speak("bro, wanna have some KFC chicken?");


var FACE2 = new SmileyFace (125,109);
FACE2.draw();
FACE2.speak("What's up?");
