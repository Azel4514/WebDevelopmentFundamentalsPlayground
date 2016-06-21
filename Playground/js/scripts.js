//JavaScript Review File

console.log("Hello!");

var age= 17;
var myBirthYear= 1999;
var graduationYear= 2017;
var numberOfBrotherAndSisters= 3;
var favAnime = "Another";
var favAnimal = "Cats and Chickens";
var favGenre = "Old spanish ballads";
var favArtist = "Marco Antonio Solís";

//string concatenation
document.write("I am " + age +" years old. ");
document.write("I was born in " + myBirthYear + ".");
document.write("I will graduate in " + graduationYear + ".");
document.write("I have " + numberOfBrotherAndSisters + " brothers and sisters.");

//Manipulation the DOM
document.getElementById("my-age").innerHTML = age;
document.getElementById("my-graduation").innerHTML = graduationYear;

document.getElementById("funny").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("funny").innerHTML = "Fear is a reasonable response to life.";
	}

function revealAnime(){
	document.getElementById("reveal-anime").innerHTML = favAnime;
}
function revealAnimal(){
	document.getElementById("reveal-animal").innerHTML = favAnimal;
}
function revealGenre(){
	document.getElementById("reveal-genre").innerHTML = favGenre;
}
function revealArtist(){
	document.getElementById("reveal-artist").innerHTML = favArtist;
}



/*//while loop
var counter = 0;
while(counter < 10){
	counter ++;
	console.log("The score is " + counter);
}

//for loop

for (var i = 1; i < 20; i++){
	console.log(i);
};

for (var i = 5; i <= 30; i+=5){
	console.log(i);
};

for (var i = 0; i < 101; i+=25){
	if(i === 50){
		console.log("Half way there!");
	} else {
		console.log(i);
	}
};

for (var i = 1; i <= 10; i++){
	if(i === 9){
		console.log("nine");
	} else if(i === 10) {
		console.log("ten")
	} else {
		console.log(i);
	}
};

for (var i = 0; i<21; i+=2){
	console.log(i);
};

for (var i = 0; i <=50; i+=5){
	if(i === 50){
		console.log("I'm rich!");
	} else {
		console.log(i);
	}
};

var friends = ["Joshua", "Austin", "Bryce", "Jeremiah", "Jake", "James"];
for(var i=0;i< friends.length; i++){
	if(friends[i].charAt(0)=="J"){
		console.log(friends[i]);
	}
}

var friends = ["Nancy", "Omar", "Eric", "Damaris"];
var friendList = ""; 

for (i = 0; 5 < friends.length; i++){
	friendList += friends[i];
	console.log(friendList);
}

//Arrays

var abc = "abcdefghijklmnopqrstuvwxyz";
var abcArray = ["a","b","c","d","e"];
var numberArray = [1,2,3,4,5];

console.log(abc.charAt(3));
console.log(abcArray[2]);

var typesOfSoda = new Array();
typesOfSoda[0] = "Jaritos";
typesOfSoda[1] = "Coca-cola";
typesOfSoda[2] = "Sprite"; 

console.log(typesOfSoda);

var wostTypesOfSoda = new Array;
wostTypesOfSoda[0] = "Diet anything"*/

var beachBag= {
	numBottles	: 3,
	colorOfTowel: "Green",
	isWet		: false,

	zipUp		:function(){
		console.log("zipper sound");
	}
};
console.log(beachBag);
console.log(beachBag.isWet);
beachBag.zipUp();

var nerd = {
	numBooks		:3,
	hasGlasses		:true,
	averageOnMath	:103,
	numOfMathAwards	:4,
	numOfClasses	:9,

	bulliesApper	:function(){
		console.log("Please not the books!");
	}
};

console.log(nerd.averageOnMath);
nerd.bulliesApper();


var player = {

	name			:" ",
	life			:1000,
	damage			:10,
	hasSword		:true,
	hasSniperRifle	:false,
	hasArmor		:true,

	attack			: function(target){
		console.log(this.name + " attacks " + target + this.damage);
	},

	swatWithSword	: function(){
		var damage = 25 * this.damage;
		console.log(this.name + " did " + damage + " damage to " + target);
	},

	healingPotion	: function(target){
		var health = 50;
		console.log(this.name + " healed " + target + " by " + health);
	}
};


var animal = {
	living		:true,
	eats		:true,
	runs		:true,
	jumps		:true,
	eyes		:2,
	cute 		:true,
	legs		:4,

	breaths		:function(){
		console.log("moist swap-like air on your neck")
	}
}

animal.breaths();

var snake = Object.create(animal);

console.log(snake.eyes);
snake.legs = 0;
console.log(snake.legs)

var rabbit = Object.create(animal);

rabbit.ears = "Huge";
console.log(rabbit.ears);

var cow = Object.create(animal);

var cow = {
	call		:function(){
		console.log("Mooooo");
	}
};

cow.hooves = 4;
cow.food = "Grass";

cow.call();