async function scanUser() {
    const username = document.getElementById('username').value;
    if (username) {
        // Replace with actual API call to Roblox to get user info
        const userResultDiv = document.getElementById('user-result');
        userResultDiv.innerHTML = ''; // Clear previous results

        try {
            const response = await fetch(`https://api.roblox.com/users/get-by-username?username=${username}`);
            const data = await response.json();

            if (data.Username) {
                const profile = document.createElement('div');
                profile.className = 'user-profile';

                const profileImg = document.createElement('img');
                profileImg.src = `https://www.roblox.com/headshot-thumbnail/image?userId=${data.Id}&width=50&height=50&format=png`;

                const profileName = document.createElement('span');
                profileName.textContent = data.Username;

                profile.appendChild(profileImg);
                profile.appendChild(profileName);

                userResultDiv.appendChild(profile);
            } else {
                userResultDiv.textContent = 'User not found';
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            userResultDiv.textContent = 'Error fetching user data';
        }
    } else {
        alert('Please enter a username');
    }
}

async function scanPlace() {
    const placeId = document.getElementById('placeid').value;
    if (placeId) {
        // Replace with actual API call to Roblox to get game info
        const gameResultDiv = document.getElementById('game-result');
        gameResultDiv.innerHTML = ''; // Clear previous results

        try {
            const response = await fetch(`https://games.roblox.com/v1/games/${placeId}`);
            const data = await response.json();

            if (data.data && data.data[0]) {
                const gameLink = document.createElement('a');
                gameLink.href = `https://www.roblox.com/games/${placeId}`;
                gameLink.textContent = `Join Game: ${data.data[0].name}`;
                gameLink.target = '_blank';

                gameResultDiv.appendChild(gameLink);
            } else {
                gameResultDiv.textContent = 'Game not found';
            }
        } catch (error) {
            console.error('Error fetching game data:', error);
            gameResultDiv.textContent = 'Error fetching game data';
        }
    } else {
        alert('Please enter a Place ID');
    }
}
