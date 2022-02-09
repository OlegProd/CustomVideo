const buttonVideo = document.querySelector('.container_video_controls-icon-play');
const buttonMainVideo = document.querySelector('.container_video-button');
const buttonVolume = document.querySelector('.container_video_controls-icon-volume');
const videoPlayer = document.querySelector('.container_video-player') 
const volumeControl = document.querySelector('.music-height');
const videoControl = document.querySelector('.video-height');
const allInput = document.querySelectorAll('input[type=range]')


// Main button to center
buttonMainVideo.addEventListener('click', () => {
    
    videoPlayer.play();
    document.documentElement.style.setProperty("--visible", "hidden");
    videoPlayer.volume = 0.4;
    // Small button to play
    buttonVideo.addEventListener('click', () => {
        if (!videoPlayer.paused) {
            videoPlayer.pause();
            buttonVideo.style.backgroundImage = "url('assets/play.svg')";
            buttonMainVideo.style.visibility = "inherit";
        }else{
            videoPlayer.play();
            buttonVideo.style.backgroundImage = "url('assets/pause.svg')";
            buttonMainVideo.style.visibility = "hidden";
        }
     
    });
    // Click on video-player
    videoPlayer.addEventListener('click', () => {
        if (!videoPlayer.paused) {
            videoPlayer.pause();
            buttonVideo.style.backgroundImage = "url('assets/play.svg')";
            buttonMainVideo.style.visibility = "inherit";
        }else{
            videoPlayer.play();
            buttonVideo.style.backgroundImage = "url('assets/pause.svg')";
            buttonMainVideo.style.visibility = "hidden";
        }
    })

    buttonVolume.addEventListener('click', () => {
            if (videoPlayer.volume > 0) {
                videoPlayer.volume = 0;
                buttonVolume.style.backgroundImage = "url('assets/mute.svg')";
            }else{
                videoPlayer.volume = 1;
                buttonVolume.style.backgroundImage = "url('assets/volume.svg')";
            }
    })

    volumeControl.addEventListener('change', function () {
        videoPlayer.volume = this.value
        volumeControl.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${volumeControl.value * 100}%, #c8c8c8 ${volumeControl.value}%, #c8c8c8 100%)`;
        if (videoPlayer.volume === 0) {
         buttonVolume.style.backgroundImage = "url('assets/mute.svg')";
        }else{
            buttonVolume.style.backgroundImage = "url('assets/Volume.svg')";
        }
    });

    videoControl.addEventListener('change', () => {
        
        videoPlayer.currentTime = videoControl.value
        console.log(videoPlayer.currentTime);
        console.log(videoControl.value);
    })

    videoPlayer.ontimeupdate = function () {
        videoControl.value = 58 * videoPlayer.currentTime / videoPlayer.duration;
        videoControl.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${100 * videoPlayer.currentTime / videoPlayer.duration}%, #c8c8c8 ${100 * videoPlayer.currentTime / videoPlayer.duration}%, #c8c8c8 100%)`;
    }
    
    
    
});

