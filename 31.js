// Project: Build-a-House

background(219, 255, 255);
var FigPos = 0;

fill(174, 180, 214);
triangle(200, 28, 350, 150, 60, 150);

fill(255, 255, 255);
rect(60, 150, 280, 207);

//HouseWall
for (var x=0;x<10;x++) {
    for (var y=0;y<6;y++) {
        image (getImage("cute/StoneBlock"),x*29+60, y*35+135, 29, 51);
    }
}

fill(120, 80, 19);
rect(297, 297, 37, 60);

for (var col = 0; col < 3; col++) {
    for (var row = 0; row < 2; row++) {
// window
fill (242, 238, 233);
rect (col*76+80, row*100+163, 50, 50);
}
}

var grass = getImage ("cute/GrassBlock");
while (FigPos < 346) {
image (grass, FigPos, 307);
FigPos+=100;
}

