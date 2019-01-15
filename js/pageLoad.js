// JavaScript Document
// Mostly covers UI animations

var itemsToHide = new Array (
					"#home_name_text",
					"#slogan",
					".navgroup"
					);
					
var pixelLeft = 240;

var currentPage = 0;
var targetPage = 0;
// 0 = home,
// 1 = about,
// 2 = portfolio,
// 3 = contact

var screenSizeThreshold = 768;
					
$(document).ready(function () {	
	"use strict";

	// update mobile view slogan
	$("#mobile-slogan").html($("#slogan").html());

	// set initial target page incase someone refresh with hash
	UpdateTargetPage();
	ChangePage();
	
	$(window).on('hashchange', function(e){
    	UpdateTargetPage();
    	ChangePage();
	});

	function ChangePage() {
			
		if (targetPage === currentPage)
			return;

		ClearContent();

		if (targetPage === 0)
		{
			ContentToMain();
		}
		else if (currentPage === 0)
		{
			MainToContent();
		}

		currentPage = targetPage;
		RefreshContent();

		return false;			
	}	
					
	function MainToContent()
	{
		for (var i = 0; i < itemsToHide.length; i++)
		{
			$(itemsToHide[i]).css("opacity", "0");
		}
	
		$("#content-container").css("display", "inline");
		$("#content-container").css("right", "0");
		$("#content-container").css("opacity", "1");
		$("#content-container").css("width", "calc(100% - " + pixelLeft + "px)");
		$("#content-container").css("border-left", "8px solid #58afd3");

		$("#home").css("width", "17%");
		
		$("#mobile-home-photo").css("opacity", "0");
		$("#mobile-slogan").css("opacity", "0");

		setTimeout(function() {

			for (var i = 0; i < itemsToHide.length; i++)
			{
				$(itemsToHide[i]).css("display", "none");
			}
		
		}, 200);
		
		
		if (window.innerWidth >= screenSizeThreshold)
		{
			$("#logo").css("left", "calc(115px - 2.5em)");
		}
		else
		{
			$("#logo").css("left", "calc(((2.8em + 20px) / 2) - 1.5em)");
			$("#logo").css("width", "3em");
		}
		
		$("#social_media").css("bottom", "-10%");
		
		setTimeout(function(){			
			$("#social_media").css("right", "calc(100% - 240px + (240px - 12.3em))");
		}, 250);
		
		setTimeout(function(){			
			$("#social_media").css("bottom", "5%");
		}, 500);
		
		setTimeout(function(){
			$(".sideMenu").eq(0).css("left", "0");
			if (window.innerWidth <= screenSizeThreshold)
			{
				$("#social_media").css("display", "none");					
			}
		}, 500);

		setTimeout(function(){
			$(".sideMenu").eq(1).css("left", "0");
		}, 600);

		setTimeout(function(){
			$(".sideMenu").eq(2).css("left", "0");
		}, 700);	
	}

	function ContentToMain()
	{			
		$("#content-container").css("right", "-100%");
		$("#content-container").css("opacity", "0");
		$("#content-container").css("width", "0");
		$("#content-container").css("border-left", "0px solid #58afd3");

		$("#home").css("width", "17%");

		for (var i = 0; i < itemsToHide.length; i++)
		{
			if ($(itemsToHide[i]).attr("id") === "slogan"){
				$(itemsToHide[i]).css("display", "block");
			} else
			{
				$(itemsToHide[i]).css("display", "inline-block");
			}
		}
		
		$("#social_media").css("bottom", "-10%");
		
		setTimeout(function(){			
			$("#social_media").css("right", "8%");
			$("#social_media").css("display", "inline");
		}, 250);
		
		setTimeout(function(){			
			$("#social_media").css("bottom", "10%");
		}, 500);
		
		setTimeout(function() {

			for (var i = 0; i < itemsToHide.length; i++)
			{
				$(itemsToHide[i]).css("opacity", "1");	
			}
			
			$("#logo").css("left", "8%");		
			
			if (window.innerWidth >= screenSizeThreshold)
			{
				$("#logo").css("top", "10%");
			}
			else
			{
				$("#logo").css("width", "5em");
			}
			
			if (window.innerWidth <= 630)
			{
				$("#logo").css("left", "calc(((2.8em + 20px) / 2) - 1.5em)");
				$("#logo").css("width", "3em");
			}

			$("#mobile-home-photo").css("opacity", "1");
			$("#mobile-slogan").css("opacity", "1");

		
		}, 500);
		
		
		setTimeout(function(){
				$(".sideMenu").eq(0).css("left", "-240px");
		}, 100);

		setTimeout(function(){
				$(".sideMenu").eq(1).css("left", "-240px");
		}, 200);

		setTimeout(function(){
				$(".sideMenu").eq(2).css("left", "-240px");
		}, 300);
	}

	function UpdateTargetPage()
	{
		switch(	window.location.hash) {
			case "#about":
				targetPage = 1;
				break;
			case "#projects":
				targetPage = 2;
				break;
			case "#contact":
				targetPage = 3;
				break;					
			default:
				targetPage = 0;
		}
	}

	function ClearContent()
	{
		var elementToAmend = $("#content");
		elementToAmend.empty();
		elementToAmend.hide();
	}

	function RefreshContent()
	{		
		var elementToAmend = $("#content");

		//Reseting Side menu background highlight color		
		$(".sideMenu").each(function() {
			$(this).css("background-color", "transparent");
		});
		
		var toBeLoaded;
			
		switch(currentPage) {
			case 0:
				break;
			case 1:
				toBeLoaded = "About.html";
				$("#sideMenu1").css("background-color", "#58afd3");
				break;
			case 2:
				toBeLoaded = "Projects.html";
				$("#sideMenu2").css("background-color", "#58afd3");
				break;	
			case 3:
				toBeLoaded = "Contact.html";
				$("#sideMenu3").css("background-color", "#58afd3");
				break;	
			default:
				window.alert("something went wrong!");
		}
		
		elementToAmend.load(toBeLoaded).fadeIn();
		
	}
	
	
	$( window ).resize(function() {
  		if (window.innerWidth <= 768)
		{
			if(currentPage !== 0)
			{
				$("#logo").css("left", "calc(((2.8em + 20px) / 2) - 1.5em)");
				$("#logo").css("width", "3em");
				$("#social_media").css("display", "none");
			}
		}
		else
		{
			if(currentPage !== 0)
			{	
				$("#logo").css("left", "calc(115px - 2.5em)");
				$("#logo").css("width", "5em");
			}
		}
		
		if (window.innerWidth <= 630)
		{
			if(currentPage === 0)
			{
				$("#logo").css("left", "calc(((2.8em + 20px) / 2) - 1.5em)");
				$("#logo").css("width", "3em");

			}
		}
		else
		{
			if(currentPage === 0)
			{
				$("#logo").css("left", "8%");
				$("#logo").css("width", "5em");

			}
		}
	});
	
	$( document ).ajaxStart(function() {
    	$( "#cont-loading" ).show();
	});

	$( document ).ajaxStop(function() {
    	$( "#cont-loading" ).hide();
	});

});