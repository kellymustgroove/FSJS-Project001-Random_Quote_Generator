
//select a random quote object from the quotes array
function getRandomQuote() {
	//create variable that stores the number of quotes in the quotes.js array
	var numberOfQuotes = quotes.length;
	//creates a random index number between 0 and the number of quotes
	var randomQuoteSelector = Math.floor(Math.random() * numberOfQuotes);
	//create variable that stores the object that matches the random number
	var randomQuote = quotes[randomQuoteSelector];
	//create variables that store the quote, source, citation and date property value
	var selectedQuote = randomQuote.quote;
	console.log(selectedQuote);
	var selectedSource = randomQuote.source;
	var selectedCitation = randomQuote.citation;
	var selectedDate = randomQuote.date;
	var selectedTags = randomQuote.tags;
	//find the index number of the random quote
	var index = quotes.indexOf(randomQuote);
	//remove the quote used, so that it doesn't repeat
	var removedQuotes = quotes.splice(index, 1);
	//if array is emptied, start array over again.
	if (quotes.length < 1 ) {
		console.log("YOU HAVE REACHED THE END OF THE LIST. THE LIST WILL START OVER NOW.");
		quotes = [
	{
		quote: "Good design is obvious. Great design is transparent.",
		source: "Joe Sparano",
		date: "2017",
		tags: ["Design"]
	},
	{
		quote: "Practice safe design: Use a concept.",
		source: "Petrula Vrontikis",
		date: "2017",
		tags: ["Design", "Concepts"]
	},
	{
		quote: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
		source: "Antoine de Saint-Exupéry",
		citation: "Airman's Odyssey",
		date: "2017",
		tags: ["Design", "Simplicity"]
	},
	{
		quote: "When you want to know how things really work, study them when they're coming apart.",
		source: "William Gibson",
		citation: "Zero History",
		date: "2017",
		tags: ["Design", "Study"]
	},
	{
		quote: "Simple is good.",
		source: "Jim Henson",
		citation: "It's Not Easy Being Green",
		tags: ["Design", "Simplicity"]
	},
	{
		quote: "Simplicity is about subtracting the obvious and adding the meaningful.",
		source: "John Maeda",
		citation: "The Laws of Simplicity",
		tags: ["Design", "Simplicity"]
	},
	{
		quote: "Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated.",
		source: "Paul Rand",
		tags: ["Design", "Simplicity", "art"]
	},
	{
		quote: "Everything is designed. Few things are designed well.",
		source: "Brian Reed",
		date: "2017",
		tags: ["Design"]
	},
	{
		quote: "Design is not just what it looks like and feels like. Design is how it works.",
		source: "Steve Jobs",
		tags: ["Design", "Function"]
	},
	{
		quote: "Simplicity, carried to an extreme, becomes elegance.",
		source: "John Franklin",
		tags: ["Design", "Simplicity"]
	},
	{
		quote: "Design is intelligence made visible.",
		source: "Alina Wheeler",
		date: "2017",
		tags: ["Design", "Intelligence"]
	},
	{
		quote: "Creativity is to think more efficiently.",
		source: "Pierre Reverdy",
		tags: ["Creativity", "Intelligence"]
	},
	{
		quote: "Nail the basics first, detail the details later.",
		source: "Chris Anderson",
		tags: ["Design", "Basics"]
	},
	{
		quote: "The function of design is letting design function.",
		source: "Micha Commeren",
		date: "2017",
		tags: ["Design", "Function"]
	},
	{
		quote: "Creativity is inventing, experimenting, growing, taking risks, breaking rules, making mistakes, and having fun.",
		source: "Mary Lou Cook",
		tags: ["Creativity"]
	},
];
	}
	//returns an array containing the randomly selected quote object and values
	return[selectedQuote, selectedSource, selectedCitation, selectedDate, selectedTags];
}


function print(message) {

	var outputDiv = document.getElementById("quote-box");
	outputDiv.innerHTML = message;
}


function printQuote() {
	//printQuote calls the getRandomQuote function and stores the returned quote object in a variable
	var currentQuote = getRandomQuote();
	//printQuote constructs a string containing the different properties of the quote object using the following HTML template:
	var html = "<p class=\"quote\">" + currentQuote[0] + "</p>";
	html += "<p class=\"source\">" + currentQuote[1];
	//printQuote doesn't add a for a missing citation or a if the year property is missing
	if (typeof currentQuote[2] !== "undefined") {
		html += "<span class=\"citation\">" + currentQuote[2] + "</span>";
	};
	if (typeof currentQuote[3] !== "undefined") {
		html += "<span class=\"year\">" + currentQuote[3] + "</span>";
	};
	html += "</p>";
	if (typeof currentQuote[4] !== "undefined") {
		var tags = currentQuote[4];
		html += "<p class=\"tags\">Tags: " + tags.join(", ") + "</p>";
	};
	//printQuote displays the final HTML string to the page. 
	print(html);
	return(html);
}

// Create funcion that randomly changes the background color of the page when the quote changes
function changeColor() {
	// Create random RGB values (used 180 instead of 256 to keep colors darker)
	var red = Math.floor(Math.random() * 180 );
	var green = Math.floor(Math.random() *  180 );
	var blue = Math.floor(Math.random() * 180 );
	// Create variable that stores the random values in a string: rgb(x, y, z)
	var rgbcolor = "rgb(" + red + ", " + green + ", " + blue + ")";
	//change the body background to the rgb color
	document.body.style.backgroundColor = rgbcolor;
	//change the button background to the rgb color
	document.getElementById('loadQuote').style.backgroundColor = rgbcolor;
}



//printQuote();



// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called.


document.getElementById('loadQuote').addEventListener("click", function() {
	//add printQuote function to event listener
	printQuote();
	//add changeColor function to event listener
	changeColor();
	}, false);



//Add a timer that automatically changes the quote and color (button can still be used)

var quoteTimer = setInterval(myTimer, 7000);

function myTimer() {
    printQuote();
    changeColor();
}

myTimer();





























