//JavaScript validate function
//Assignment 3 Showad Huda CIS4004
			
function validateForm() {
	//First and last name forms
      var fname = document.getElementById('fname').value;
      var lname = document.getElementById('lname').value;
	  
	//Address form with input from street, city, state with drop down option, and 5 digit zip
      var address = document.getElementById('address').value;
      var city = document.getElementById('city').value;
      var state = document.getElementById('state').value;
      var zip = document.getElementById('zip').value;
	  
	//Phone number 10-digit form
      var ptype = document.getElementById('ptype').value;
	//Email input
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
	
	//Check to make sure phone is 10 digits and email has @ and .
      var numbers = /^[0-9]+$/; /* used to compare numbers */
      var emailformat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/; /* used to compare valid email address */

         //Print alert if empty
         if(fname==""||lname=="",address==""||city=="",state==""||zip=="",ptype==""||email=="") {
            alert("Please Fill All Fields.");
            return false; 
         }

         //Print alert if too short
         if(fname.length<=1||lname.length<=1,address.length<=1||city.length<=1,zip.length<=1||email.length<=1) {
            alert("Please enter more than one character.");      
         }

         //Zip Code Parameters 5-digit
         if((!zip.match(numbers)) || zip.length!==5){
            alert('Please enter 5-digit length Zip Code.');
         }

         //phone number parameters 10 digit
         if((!phone.match(numbers)) || phone.length!==10){
            alert('Please enter 10-digit Phone Number.');
         }

//Email parameters of @ and .
function validateEmail() {
	var email = document.myForm.email.value;
	atpos = email.indexOf("@");
	dotpos = email.lastIndexOf(".");
	if (atpos < 1 || ( dotpos - atpos < 2 )) {
		alert("Please enter correct E-Mail format.")
		document.myForm.email.focus() ;
		return false;
		}
		return( true );
}
         if((!email.match(emailformat))){
            alert('Please enter a valid E-Mail address.');
         }
		 else
			 //Submit successful message
			{
				alert('Form Submitted, Thank You!');
				window.location.reload()
				return true;
			}
}