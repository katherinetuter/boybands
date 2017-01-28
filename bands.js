//Loop through the two arrays provided (bands and vegetables) and output each element in the arrays into their corresponding HTML <div> element. Ensure that each item is in a block element (e.g. li, div, p. etc...)
var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
var loopCount = 5;

//start loop 
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
	var currentBand = bands[loopTracker];
	var currentVeggie = vegetables[loopTracker];
	var bandElement = document.getElementById("boy-bands");
	bandElement.innerHTML = currentBand;
	var veggieElement = document.getElementById("vegetables");

}


//   // Add the band names into the correct <div>
//   currentBand = ???;


//   // Add the veggie names into the correct <div>
//   currentVeggie = ???;

// }