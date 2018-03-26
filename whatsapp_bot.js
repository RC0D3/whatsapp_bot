var messages = document.getElementsByClassName('message-in'); //get messages in the chat
var date = messages[messages.length-1].getElementsByClassName('copyable-text')[0].dataset; //get date of last message

var options = ["Stone", "Paper", "Scissors"];
var text;

function update () {
	var dateNew = messages[messages.length-1].getElementsByClassName('copyable-text')[0].dataset; //get last message date
	if(dateNew != date){ //check if isn't equals
		text = messages[messages.length-1].getElementsByClassName('selectable-text')[0].innerText; //get text
		date = dateNew; //set new date of last message
		response(text);
	}
}


function response (text) {
	
	var rnd = Math.floor(Math.random() * 3); //random number [0,2]
	
	if(text.toLowerCase() == 'stone') { //check text in lower case
		if(rnd == 0) {
			sendText(options[rnd] + " *A tie*"); //write response message
		}else if(rnd == 1) {
			sendText(options[rnd] + " *You lose!*");
		}else{
			sendText(options[rnd] + " *You win :(*");
		}
	}

	if(text.toLowerCase() == 'stone') {
		if(rnd == 0) {
			sendText(options[rnd] + " *You win :(*");
		}else if(rnd == 1) {
			sendText(options[rnd] + " *A tie*");
		}else{
			sendText(options[rnd] + " *You lose!*");
		}
	}
	
	if(text.toLowerCase() == 'scissors') {
		if(rnd == 0) {
			sendText(options[rnd] + " *You lose!*");
		}else if(rnd == 1) {
			sendText(options[rnd] + " *You win :(*");
		}else{
			sendText(options[rnd] + " *A tie*");
		}
	}
}


function sendText(message) {

	window.InputEvent = window.Event || window.InputEvent;

	var event = new InputEvent('input', {bubbles: true}); //create event

	var textbox = document.getElementsByClassName('_2S1VP')[0]; //get input

	textbox.textContent = message; //set message in the input

	textbox.dispatchEvent(event);

	document.querySelector('[data-icon="send"]').click(); //click to send message

}



function spam(message, loop) { //can spam...

	var delay = 1000; //1 second
	
	for (var i = 0; i < loop; i++){ //loop

		window.setTimeout(function(){

			sendText(message); //send message

		}, delay*i);

	}

}

setInterval(update,2000);
