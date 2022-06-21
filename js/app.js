// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = " ";

/*
Query Selectors

Selects elements from DOM and make them accessible in JS.
*/
var speakButton = document.querySelector("#speak-btn");
var resetButton = document.querySelector("#reset-btn");
var storyButton = document.querySelector("#story-btn");

var btn_1 = document.querySelector("#btn-1");
var btn_2 = document.querySelector("#btn-2");
var btn_3 = document.querySelector("#btn-3");
var btn_4 = document.querySelector("#btn-4");
var btn_5 = document.querySelector("#btn-5");

var preview = document.querySelector("#preview");

// 5 Arrays for storing words.
var noun = ["The turkey", "Mom", "dad", "the dog", "My teacher", "The elephant", "The cat"];
var verb = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjective = ["A funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var noun_2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoest"];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
    // Create a new speech object, attaching the string of text to speak
    var utterThis = new SpeechSynthesisUtterance(string);
    // Actually speak the text
    synth.speak(utterThis);
}

//Returns a random number between 0 and length of selected array.
function getRandInt(array) {
    return Math.floor(Math.random() * array.length);
}

/* Event Listeners
-------------------------------------------------- */

//Onclick handler for btn_1.
btn_1.onclick = function () {
    //Selects a random word for the array.
    var randText = noun[getRandInt(noun)];
    //Concatinates the words to textToSpeak string.
    textToSpeak = textToSpeak + randText;
    //Displays the string in DOM.
    preview.innerHTML = textToSpeak;
};

//Onclick handler for btn_2.
btn_2.onclick = function () {
    //Selects a random word for the array.
    var randText = verb[getRandInt(verb)];
    //Concatinates the words to textToSpeak string.
    textToSpeak = textToSpeak + " " + randText;
    //Displays the string in DOM.
    preview.innerHTML = textToSpeak;
};

//Onclick handler for btn_3.
btn_3.onclick = function () {
    //Selects a random word for the array.
    var randText = adjective[getRandInt(adjective)];
    //Concatinates the words to textToSpeak string.
    textToSpeak = textToSpeak + " " + randText;
    //Displays the string in DOM.
    preview.innerHTML = textToSpeak;
};

//Onclick handler for btn_4.
btn_4.onclick = function () {
    //Selects a random word for the array.
    var randText = noun_2[getRandInt(noun_2)];
    //Concatinates the words to textToSpeak string.
    textToSpeak = textToSpeak + " " + randText;
    //Displays the string in DOM.
    preview.innerHTML = textToSpeak;
};

//Onclick handler for btn_5.
btn_5.onclick = function () {
    //Selects a random word for the array.
    var randText = places[getRandInt(places)];
    //Concatinates the words to textToSpeak string.
    textToSpeak = textToSpeak + " " + randText;
    //Displays the string in DOM.
    preview.innerHTML = textToSpeak;
};

// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function () {
    speakNow(textToSpeak);
};

// Onclick handler for the button that resets the textToSpeak string.
resetButton.onclick = function () {
    textToSpeak = " ";
    //Sets the h1 to default text.
    preview.innerHTML = "Click on the buttons to start creating your sentence.";
};

//Onclick handler for story button.
storyButton.onclick = function () {
    //Gets a word from each of the 5 arrays and Concatinates to the textToSpeak string.
    textToSpeak = noun[getRandInt(noun)] + " " + verb[getRandInt(verb)] + " " + adjective[getRandInt(adjective)] + " " + noun_2[getRandInt(noun_2)] + " " + places[getRandInt(places)];
    //Displays the strong in DOM.
    preview.innerHTML = textToSpeak;
    //Speaks the text
    speakNow(textToSpeak);
};
