var currentProjectPage = -1;
// 0 = featured,
// 1 = rendering,
// 2 = games,
// 3 = level design
// 4 = Misc
// 5 = All

var featured = ["fyp", "FantasyVillage", "Wither"];
var rendering = ["shaders/SwordIntersection", "shaders/SaturationMask",  "shaders/Water", "shaders/Warp", "shaders/SSLF",  "shaders/Pulse", "shaders/Distortion", "shaders/Dissolve"];
var games = ["fyp", "Wither", "V3", "Valenwood"];
var leveldesign = ["FantasyVillage", "BorealisLaboratories"];
var misc = ["DownloadMoreRem", "OpenGL", "Room", "ChickenAdventure", "Egres", "Asteroids"];

function ChangeProjectPage(targetProjectPage)
{
	var elementToAmend = $("#game-container-wrapper");
	elementToAmend.empty();
	currentProjectPage = targetProjectPage;

	var targetPageArray;

	switch(currentProjectPage)
	{
		case 0:
			targetPageArray = featured;
			break;
		case 1:
			targetPageArray = rendering;
			break;
		case 2:
			targetPageArray = games;
			break;
		case 3:
			targetPageArray = leveldesign;
			break;
		case 4:
			targetPageArray = misc;
			break;
		default:
			targetPageArray = [];
			targetPageArray = targetPageArray.concat.apply(targetPageArray, [games, leveldesign, misc]);
			break;
	}

	for (var i = 0; i < targetPageArray.length; i++) 
	{		
		var response;
		$.ajax({ type: "GET",   
			url: "ajax/" + targetPageArray[i] + ".html",   
			async: false,
			success : function(text)
			{
				response = text;
				$('#game-container-wrapper').append(response);

				if (targetPageArray.length > 1 && i+1 !== targetPageArray.length)
				{
					$('#game-container-wrapper').append("<center><div class=\"line-long\"></div> </center>"); 
				}
			}
		});


	}

	$('.game-images').unslider(
	{
		autoplay: true,
		arrows: true,
		infinite: true
	});
}

