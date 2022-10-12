//DICE 1
var random_number = Math.round(Math.random()*6)
if (random_number === 0){
    random_number ++
};
var random_dice = "dice" + random_number + ".png"
var random_image_source = "images/" + random_dice
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute('src',random_image_source);

//DICE 2
var random_number2 = Math.round(Math.random()*6)
if (random_number2 === 0){
    random_number2 ++
};
var random_dice2 = "dice" + random_number2 + ".png"
var random_image_source2 = "images/" + random_dice2


var image2 = document.querySelectorAll("img")[1];

image2.setAttribute('src',random_image_source2);

//result
if (random_number > random_number2){
    document.querySelector("h1").innerHTML="Player 1 Wins"
};
if (random_number2 > random_number){
    document.querySelector("h1").innerHTML="Player 2 Wins"
};
if (random_number2 === random_number){
    document.querySelector("h1").innerHTML="Draw!!"
};

