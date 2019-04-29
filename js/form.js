// JavaScript Document
$(document).ready(function(){
	"use strict";
	
	$('#submit').click(function(){		
		validateForm(); 
		return false;
	});
	
	function validateForm()
	{
		var valid = true;
		
		var nameRegex = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
		var phoneRegex = /^[0-9]*$/;
		var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		
		var nameInput = $("#nameinput").val();
		var phoneInput = $("#phoneinput").val();	
		var emailInput = $("#emailinput").val();	
		var message = $("#message").val();	

		if (!nameRegex.test(nameInput))
		{
			valid = false;
			$("#nameinput").css("box-shadow", "0px 0px 1px rgba(255,70,75,0.92)");
			$("#nameinput").css("border", "1px solid rgba(255,70,75,0.92)");
			$("#nameinput").attr("placeholder", "missing field");
		}
		
		if (!phoneRegex.test(phoneInput) || phoneInput === "")
		{
			valid = false;
			$("#phoneinput").css("box-shadow", "0px 0px 1px rgba(255,70,75,0.92)");
			$("#phoneinput").css("border", "1px solid rgba(255,70,75,0.92)");
			$("#phoneinput").attr("placeholder", "missing field");

		}
		
		if (!emailRegex.test(emailInput))
		{
			valid = false;
			$("#emailinput").css("box-shadow", "0px 0px 1px rgba(255,70,75,0.92)");
			$("#emailinput").css("border", "1px solid rgba(255,70,75,0.92)");
			$("#emailinput").attr("placeholder", "missing field");
		}
		
		if (message === "")
		{
			valid = false;
			$("#message").css("box-shadow", "0px 0px 1px rgba(255,70,75,0.92)");
			$("#message").css("border", "1px solid rgba(255,70,75,0.92)");
			$("#message").attr("placeholder", "Hey, how does one miss out the biggest box in a form?");
			
		}
		
		if (valid)
		{
			$("#contact-form").html("<p>Message sent! I will probably get back to you shortly!</p>");
		}
				
	}
	
	$("form *").focus(function()
	{
		$(this).css("box-shadow", "none");
		$(this).css("border", "1px solid white");
	});
	
});