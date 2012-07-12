alert("JavaScript works!");

// Justin C. Kelley
// July 10, 2012
// Project 2

// Variables
// If I have client today is true, then get data, else, take day off to rest

var introduceMyself = " My name is Justin Kelley, " + " I am a personal trainer " + " and I love to help people! ";
  console.log(introduceMyself);
var clientScheduled = true
var clientBMI = 22.7

if (clientScheduled === true) {
	console.log(" Get clients data!");
	
	if (clientBMI <= 22.7) {
		console.log( " Select more advanced training regimen.");
	
	} else {
		console.log(" Continue the workout as initially planned.");
		};
	
	} else {
		console.log( "Take day off to rest.");
};	
 