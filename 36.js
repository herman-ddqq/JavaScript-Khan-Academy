// Challenge: Recipe Card

var recipe = {
    title: "Steak",
    servings: 2,
    ingredients: ["Beef", "Butter", "Rosemary", "Garlic"],
    drink: "RedWine"
};



fill(26, 26, 26);
textSize(20);
text(recipe.title, 10, 23);
text("Serves: " + recipe.servings, 10, 55);
text("Ingredients: " + recipe.ingredients, 10, 85);
text("Drink: " + recipe.drink, 10, 118);
