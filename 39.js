// Project: Bookshelf

var books = [
    { title: "I Know Why the Caged Bird Sings", stars: 4, author: "J.J." },
    { title: "Harry Potter", stars: 5, author: "J.Rawling" },
    { title: "Brave New World", stars: 5, author: "Oldos Haxly" },
];

// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);

// draw ALL BOOOKS
for (var i=0; i<books.length; i++) {
    
    
    //draw the book cover
    fill(214, 255, 219);
    rect(10+i*100, 20, 90, 100);
    
    //draw the book title
    fill(0, 0, 0);
    text(books[i].title, 20+i*100, 29, 70, 100);
    
    //draw the book author
    fill(0, 0, 0);
    text(books[i].author, 20+i*100, 80, 70, 100);
    
    
    //draw the stars
    for (var j=0; j<books[i].stars; j++) {
    image(getImage("cute/Star"), 13 + j * 15+i*100, 90, 20, 30);
 
        
        
        
        
        
    }
    
    
    
    
    
    
}


