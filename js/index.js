// user id 587326588086124585

window.onload = async () => {
    let response = await fetch("https://api.lanyard.rest/v1/users/587326588086124585");
    response = await response.json();
    let data = response.data;
    console.log(data);
    let avatar_url = `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png?size=512`;
    // pfp element
    let pfp_el = document.getElementById("profile-picture");
    pfp_el.src = avatar_url;
    document.getElementById("username").innerHTML = data.discord_user.username;
    switch (data.discord_status) {
        case "online":
            // green
            pfp_el.style.borderColor = "#43b581";
            break;
        case "dnd":
            // red
            pfp_el.style.borderColor = "#f04747";
            break;
        case "idle":
            pfp_el.style.borderColor = "yellow";
            break;
        case "offline":
            pfp_el.style.borderColor = "gray";
            break;
    }
    // ! disabled for testing
    // return;
    if (data.spotify) {
        console.log(data.spotify);
        document.getElementById("large-img").src = data.spotify.album_art_url;
        document.getElementById("activity-name").innerHTML = data.spotify.song;
        document.getElementById("activity-text").innerHTML = "by " + data.spotify.artist;
    } else if(data.activities) {
        
        let activity_data = data.activities[data.activities.length - 1];
        let now = Date.now();
        let elapsed_time_ms = now - activity_data.timestamps.start;
        let elapsed_time = new Date(elapsed_time_ms);
        let hours = elapsed_time.getUTCHours().toString();
        let minutes = elapsed_time.getUTCMinutes().toString().padStart(2, '0');
        let seconds = elapsed_time.getUTCSeconds().toString().padStart(2, '0');
        let formated_time;
        if (hours == "0") {
            formated_time = `${minutes}:${seconds}`;
        } else {
            formated_time = `${hours}:${minutes}:${seconds}`;
        }
        let status_text = activity_data.state + "\n" + activity_data.details + "\n" + formated_time +  " elapsed";
        let large_img = "https://cdn.discordapp.com/app-assets/383226320970055681/" + activity_data.assets.large_image + ".png";
        let small_img = "https://cdn.discordapp.com/app-assets/383226320970055681/" + activity_data.assets.small_image + ".png";
        console.log(activity_data);
        document.getElementById("activity-name").innerText = activity_data.name;
        document.getElementById("activity-text").innerText = status_text;
        document.getElementById("large-img").src = large_img;
        document.getElementById("small-img").src = small_img;
        // activity_data_timestamps.start is a utc time stamp, convert into ms since that point
        
    
    }
    // let  
}
