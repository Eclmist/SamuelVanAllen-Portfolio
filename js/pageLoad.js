// JavaScript Document
// Mostly covers UI animations

var itemsToHide = new Array (
					"#home_name_text",
					"#slogan",
					".navgroup"
					);
					
var pixelLeft = 240;

var currentPage = 0;
// 0 = home,
// 1 = about,
// 2 = portfolio,
// 3 = contact
// 4 = game1
// 5 = game2
// 6 = game3

var screenSizeThreshold = 768;
					
$(document).ready(function () {	
	"use strict";
		
	$("#desktop-nav a").on('click touchstart',function(){
		
		scrollin($(this));
		
	});
	
	function scrollin (e) {
				
		if (currentPage === 0)
		{			
			
			switch($(e).attr("href")) {
				case "#about":
					currentPage = 1;
					break;
				case "#projects":
					currentPage = 2;
					break;
				case "#contact":
					currentPage = 3;
					break;					
				default:
					window.alert("something went wrong!");
			}
		
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
			
			setTimeout(function(){
				RefreshContent();
			}, 1000);	
			}
			
			return false;	
	}	
	
	
	$("#logo").on('click touchstart',function () {

		if (currentPage !== 0)
		{
			currentPage = 0;			
			
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
			
			RefreshContent();	
		}
		
	});
	
	$(".sidebtn").on('click touchstart',function () {
		
		if (window.innerWidth <= 630)
		{
			scrollin($(this));
		}
		
		switch($(this).attr("href")){
			case "#about":
				currentPage = 1;
				break;
			case "#projects":
				currentPage = 2;
				break;
			case "#contact":
				currentPage = 3;
				break;					
			default:
				window.alert("something went wrong!");
		}

		RefreshContent();
	});
	
	$(".detailbtn").on('click touchstart',function(){
		switch($(this).attr("id")){
			case "game1":
				currentPage = 4;
				break;
			case "game2":
				currentPage = 5;
				break;
			case "game3":
				currentPage = 6;
				break;					
			default:
				window.alert("something went wrong!");	
		}
		RefreshContent();
	});
	
	$("#backbtn").on('click touchstart',function(){
		currentPage = 2;
		RefreshContent();	
	});
	
	
	function RefreshContent()
	{		
		var elementToAmend = $("#content-container");
		elementToAmend.find("*").not("#cont-loading").remove();
		
		//Reseting Side menu background highlight color		
		$(".sideMenu").each(function() {
			$(this).css("background-color", "transparent");
		});
			
		switch(currentPage) {
			case 0:
				break;
			case 1:
				elementToAmend.hide().load("About.html").fadeIn();
				$("#sideMenu2").css("background-color", "#58afd3");

				//setTimeout(function() {$("#cont-about").css("opacity", 1);}, 10);	
				break;
			case 2:
				elementToAmend.load("Projects.html");
				$("#sideMenu2").css("background-color", "#58afd3");
				break;	
			case 3:
				elementToAmend.load("Contact.html");
				$("#sideMenu3").css("background-color", "#58afd3");
				break;	
			case 4:
				$("#cont-detail").css("display", "inline-block");
				setTimeout(function() {$("#cont-detail").css("opacity", 1);}, 10);	
				$("#sideMenu2").css("background-color", "#58afd3");
				$("#cont-detail h1").html("Gloop");
				$("#cont-detail h3").html("A top-down battle arena");
				$("#cont-detail #video").html("<iframe src='https://www.youtube.com/embed/WELtP8lbRNk'></iframe>");
				$("#cont-detail #detailed-desc").html("<h3>Gloop</h3><p>Gloop is my attempt at implementing Unity3D's network and multiplayer capabilities. Designed to be a multiplayer battle arena, Gloop allows players to team with other players and battle the enemy team.</p><p>This was also the project that spawned mainly from experimenting with soft body physics in Unity3D. However, due to a certain component removed in Unity5 that was crucial to the soft body physics, this project was put on hold until I discover an alternative.</p>");
				break;	
			case 5:
				$("#cont-detail").css("display", "inline-block");
				setTimeout(function() {$("#cont-detail").css("opacity", 1);}, 10);	
				$("#sideMenu2").css("background-color", "#58afd3");
				$("#cont-detail h1").html("Anesthesia");
				$("#cont-detail h3").html("A storyline based puzzle platformer");
				$("#cont-detail #video").html("<iframe src='https://www.youtube.com/embed/Lcx-q3YuC1s'></iframe>");
				$("#cont-detail #detailed-desc").html("<h3>Anesthesia</h3><p>Anesthesia is a project that has been ongoing for the ever since late 2013. It was my first project with Unity3D. Inspired by AAA sidescrolling titles, this project was an experiment to deliver a platforming experience with a rich storyline as well as visually appealing graphics.</p><p>This puzzle based platformer revolves mainly around the player manipulating ingame time, in order to progress further, allowing the story to slowly unfold.</p>");
				break;	
			case 6:
				$("#cont-detail").css("display", "inline-block");
				setTimeout(function() {$("#cont-detail").css("opacity", 1);}, 10);	
				$("#sideMenu2").css("background-color", "#58afd3");
				$("#cont-detail h1").html("Starblaze");
				$("#cont-detail h3").html("An openworld 3D tower defence framework");
				$("#cont-detail #video").html("<iframe src='https://www.youtube.com/embed/03xFRMo-isk'></iframe>");
				$("#cont-detail #detailed-desc").html("<h3>Starblaze</h3><p>Starblaze is the result of trying to combine a tower defence type game with a space shooter.</p><p>This top down space shooter type game contains everything you would expect from a space shooter. From power ups to special attacts and boss fights. The one twist is that all of these happens while the player is trying to defend his base, and having the ability to rack up currency to build towers to do some of the defending for his team.</p>");
				break;												
			default:
				window.alert("something went wrong!");
		}
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
    	$( "#cont-loading" ).fadeOut();
	});

});