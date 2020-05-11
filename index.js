// Create random numbers between 1 and 6
var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

// Select the src attribute of each image and
// update it with the image that matches the
// random number.
$(".img1").attr("src", "images/dice" + randomNumber1 + ".png");
$(".img2").attr("src", "images/dice" + randomNumber2 + ".png");

// Change the h1 tag text depending on which number
// was bigger. &#128681; is the flag emoticon.
if (randomNumber1 > randomNumber2) {
	$("h1").html("&#128681; Player 1 Wins!");
} else if (randomNumber2 > randomNumber1) {
	$("h1").html("Player 2 Wins! &#128681;");
} else {
	$("h1").text("Draw!");
}
