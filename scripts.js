      window.onload = function () {
        // Get the URL parameters
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const placeId = urlParams.get("placeId");
        const gameInstanceId = urlParams.get("gameInstanceId");

        // Construct the Roblox deep link
        const robloxDeepLink = `roblox://experiences/start?placeId=${placeId}&gameInstanceId=${gameInstanceId}`;

        // Redirect the user to the Roblox deep link
        window.location.replace(robloxDeepLink);
      };
    
