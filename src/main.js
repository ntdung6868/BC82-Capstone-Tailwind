document.getElementById("play-btn").addEventListener("click", function () {
    console.log("click r");
    document.getElementById("video-thumbnail").classList.add("hidden");
    document.getElementById("video-player").classList.remove("hidden");
});
