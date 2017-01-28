//Loop through the two arrays provided (bands and vegetables) and output each element in the arrays into their corresponding HTML <div> element. Ensure that each item is in a block element (e.g. li, div, p. etc...)
var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
var loopCount = 5;
var currentBand = 0;
var currentVeggie = 0;

//start loop 
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
	var bandElement = document.getElementById("boy-bands");
	console.log(currentBand);
	bandElement.innerHTML = "<p>" + bands[loopTracker] + "</p>";
	var veggieElement = document.getElementById("vegetables");
	veggieElement.innerHTML = "<p>" + vegetables[loopTracker] + "</p>";

}

