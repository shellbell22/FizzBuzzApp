$(document).ready(

function() {

var enteredString = prompt("Please supply a number", "enter number here");

var enteredNumber = parseInt(enteredString, 10);

assignment2(enteredNumber);

var msg;

    
});

function assignment2 (number) {

for (i = 1; i <= number; i++) {
	if (i % 15 == 0) {
		msg = 'fizz buzz';
		$('#value').append(msg + '<br/>' );
	}
		else {

			if ( i % 3 == 0) {
				msg = 'fizz';
				$('#value').append(msg + '<br/>');
			}
			else {
					if (i % 5 == 0) {
						msg = 'buzz';
						$('#value').append(msg + '<br/>');
					}
					else {
						msg = i;
						$('#value').append(msg + '<br/>');
					}
			}

		}

}

}
