$(document).ready(

function() {

var msg;

for (i = 1; i < 101; i++) {
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
    
});
