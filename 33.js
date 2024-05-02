// Challenge: Favorite Animals

var FavAnimal = ["cat", "tiger", "parrot", "dinosaur", "dog"];

var AnimalNumber = 0;

while(AnimalNumber<FavAnimal.length) {
    fill(255, 0, 0);
    text(FavAnimal[AnimalNumber], 10, 30+AnimalNumber*30);
    AnimalNumber++;
}
