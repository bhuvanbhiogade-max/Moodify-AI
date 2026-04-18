// 🔐 LOGIN
function login() {

    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();

    if (user === "" || pass === "") {
        alert("Enter details");
        return;
    }

    if (user === "Jay@1234" && pass === "Pass@123") {
        localStorage.setItem("user", user);
        window.location.href = "welcome.html";
    } else {
        alert("Invalid login");
    }
}

// 👋 SAVE NAME
function saveName() {
    let name = document.getElementById("name").value;
    localStorage.setItem("name", name);
    window.location.href = "index.html";
}

// SHOW USER NAME
window.onload = function () {
    let text = document.getElementById("userText");
    if (text) {
        text.innerText = "Hello " + localStorage.getItem("name");
    }
};

// 🎥 CAMERA
let video;

function startCamera() {
    video = document.getElementById("video");

    navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    });
}

// 📷 CAPTURE
function capture() {
    let moods = ["Happy", "Sad", "Angry", "Relaxed"];
    let mood = moods[Math.floor(Math.random() * moods.length)];

    showResult(mood);
}

// 🎯 RESULT
function showResult(mood) {

    let emojis = {
        Happy: "😄",
        Sad: "😢",
        Angry: "😡",
        Relaxed: "😌"
    };

    let quotes = {
        Happy: "Keep smiling ✨",
        Sad: "Better days are coming 💛",
        Angry: "Stay calm 🧘",
        Relaxed: "Enjoy the moment 🌿"
    };

    document.getElementById("result").innerText = "Mood: " + mood;
    document.getElementById("emoji").innerText = emojis[mood];
    document.getElementById("quote").innerText = quotes[mood];

    let playlists = {
        Happy: [{ name: "Believer", id: "7wtfhZwyrcc" }],
        Sad: [{ name: "Let Her Go", id: "RBumgq5yVrA" }],
        Angry: [{ name: "Stronger", id: "PsO6ZnUZI0g" }],
        Relaxed: [{ name: "Let It Be", id: "QDYfEBY9NM4" }]
    };

    let songs = playlists[mood];

    let player = document.getElementById("player");
    player.src = "https://www.youtube.com/embed/" + songs[0].id + "?autoplay=1";

    let playlist = document.getElementById("playlist");
    playlist.innerHTML = "";

    songs.forEach(s => {
        let div = document.createElement("div");
        div.innerText = s.name;

        div.onclick = () => {
            player.src = "https://www.youtube.com/embed/" + s.id + "?autoplay=1";
        };

        playlist.appendChild(div);
    });
}