//function created to replace the content
function replaceContent() {
	//declaring the variables
	var myRecipientName;
	var myHostName; 

	//setting the variable to the input field's id named recipientNameInput's value
	myRecipientName = document.getElementById("recipientNameInput").value; 

	//setting variable to input field's id named hostNameInput's value
	myHostName = document.getElementById("hostNameInput").value;

	//print myRecipentName output to console
	console.log('Variable myRecipientName: ' + myRecipientName);
	
	//print myHostName output to console
	console.log('Variable myHostName: ' + myHostName); 

	//setting the HTML code in the span id recipientNamePlaceholder with the variable 
	document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;

	//setting code in span id hostNamePlacehodler with the variable
	document.getElementById("hostNamePlaceholder").innerHTML = myHostName; 
} 