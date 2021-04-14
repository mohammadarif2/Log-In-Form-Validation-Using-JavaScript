// Variable to count number of attempts.
//This variable is global and can be accessed inside the function
var attempt = 3; 

// Below function Executes on click of login button.
function validate(){
	//Gets value of input field of id username and password  and stores it in a vaiables username and password respectively
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	//Returns true if username is equal to Formget and password is equal to formget#123
	if ( username == "2020MT93541" && password == "bitscloud"){
		//alert()- Displays message as an alert box on the browser window
		alert ("Login Successfully");
		// Redirecting to other page.
		window.location = "success.html"; 
		//return statement ends function execution and specifies the value to be returned to the function caller
		return false;
	}
	else{
		// -- Decrementing by one. It calls the attempt variable declared above this function
		attempt --;
		//Displays the message on the browser window
		alert("Login failed due to incorrect username and password");
		alert("You have "+attempt+" attempts left;");
		// Returns true if attempt is equal to 0
		if( attempt == 0){
			//Disabling all the fields 
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}

