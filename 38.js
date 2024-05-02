// Challenge: Movie Reviews

var movies = [
    {
        title: "Puff the Magic Dragon",
        review: "Ok movie"
    },
    
    {
        title: "Harry Potter",
        review: "Best movie ever!!"
    },
    
];

for (var i=0; i < movies.length; i++) {
fill(84, 140, 209);
textAlign(CENTER, CENTER);
textSize(20);
text(movies[i].title, 200, 50+i*69);

textSize(15);
text(movies[i].review, 200, 70+i*69);
}
