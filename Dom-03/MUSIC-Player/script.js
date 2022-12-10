let container = document.querySelector('.container'),
musicImg = container.querySelector('.image-area img'),
musicName = container.querySelector('.song-details .song-name'),
musicArtist = container.querySelector('.song-details .song-artist'),
musicAudio = container.querySelector('#song-audio'),
prevBtn = container.querySelector('#previous'),
nextBtn = container.querySelector('#next'),
progressArea = container.querySelector('.song-progress'),
progressBar = container.querySelector('.progress-bar'),
playPauseBtn = container.querySelector('.play-pause'),
musicList = container.querySelector('.music-list'),
showMoreBtn = container.querySelector('#more-music'),
hideMoreBtn = musicList.querySelector('#close');

let musicIndex = 1;

window.addEventListener('load', ()=> {
    loadMusic(musicIndex);
    playingMusic();
});

function loadMusic(i){
    musicName.innerText = musicData[i - 1].name;
    musicArtist.innerText = musicData[i - 1].artist;
    musicImg.src = `./assets/images/${musicData[i - 1].img}.jpg`;
    musicAudio.src = `./assets/songs/${musicData[i - 1].src}.mp3`;
};

function playMusic() {
    container.classList.add('paused');
    playPauseBtn.querySelector('i').innerText = 'pause';
    musicAudio.play();
};

function pauseMusic() {
    container.classList.remove('paused');
    playPauseBtn.querySelector('i').innerText = 'play_arrow';
    musicAudio.pause();
};

function nextSong() {
    musicIndex++;
    musicIndex > musicData.length ? musicIndex = 1 : musicIndex;
    loadMusic(musicIndex)
    playMusic();
}

function prevSong() {
    musicIndex--;
    musicIndex < 1 ? musicIndex = musicData.length : musicIndex = musicIndex;
    loadMusic(musicIndex)
    playMusic();
}

playPauseBtn.addEventListener('click', ()=> {
    const isMusicPaused = container.classList.contains('paused');
    isMusicPaused ? pauseMusic() : playMusic();
});

prevBtn.addEventListener('click', ()=>{
    prevSong();
})

nextBtn.addEventListener('click', ()=>{
    nextSong();
});

musicAudio.addEventListener('timeupdate', (e)=> {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    let musicCurrentTime = container.querySelector('.current-time'),
    musicDurationTime = container.querySelector('.final');

    musicAudio.addEventListener('loadeddata', ()=>{
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        totalSec < 10 ? totalSec = `0${totalSec}` : totalSec = totalSec;
        musicDurationTime.innerText = `${totalMin}:${totalSec}`;
    });
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    currentSec < 10 ? currentSec = `0${currentSec}` : currentSec = currentSec;
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
        
});
    
progressArea.addEventListener('click', (e)=>{
    let progressW = progressArea.clientWidth;
    let clickedoffsetX = e.offsetX;
    let songDuration = musicAudio.duration;
    musicAudio.currentTime = (clickedoffsetX / progressW) * songDuration;
    playMusic();
});

const repeatBtn = container.querySelector('#repeat');
repeatBtn.addEventListener('click', ()=>{
    let text = repeatBtn.innerText; 
    switch (text) {
        case 'repeat':
            repeatBtn.innerText = 'repeat_one';
            break;
        case 'repeat_one':
            repeatBtn.innerText = 'shuffle';
            break;
        case 'shuffle':
            repeatBtn.innerText = 'repeat';
            break;
    }
});

musicAudio.addEventListener('ended', ()=>{
    let getValue = repeatBtn.innerText;
    switch (getValue) {
        case 'repeat':
            nextSong();
            playMusic();
            break;
        case 'repeat_one':
            musicAudio.currentTime = 0;
            loadMusic(musicIndex);
            playMusic();
            break;
        case 'shuffle':
            let randomSong = Math.floor((Math.random() * musicData.length) + 1 );
            do{
                randomSong = Math.floor((Math.random() * musicData.length) + 1 );
            }while (musicIndex == randomSong) 
                musicIndex = randomSong;
                loadMusic(musicIndex);
                playMusic();
            break;
            
    }
})

showMoreBtn.addEventListener('click', ()=>{
    musicList.style.cssText = 'opacity:1;bottom:0%;pointer-events:auto;';
});

hideMoreBtn.addEventListener('click', ()=>{
    musicList.style.cssText = 'opacity:0;bottom:-55%;pointer-events:auto';
});

const ulTag = container.querySelector('ul');
for (let i = 0; i < musicData.length; i++) {
    let liTag = `<li li-index="${i + 1}">
                  <div class="row">
                    <span>${musicData[i].name}</span>
                    <p>${musicData[i].artist}</p>
                  </div>
                  <audio class="${musicData[i].src}" src="./assets/songs/${musicData[i].src}.mp3"></audio>
                  <span id="${musicData[i].src}" class="audio-duration"></span>
                </li>`;
    ulTag.insertAdjacentHTML("beforeend", liTag);
};

let allLiTag = ulTag.querySelectorAll('li');
function playingMusic(){
for (let j = 0; j < allLiTag.length; j++) {
    if (allLiTag[j].getAttribute('li-index') == musicIndex) {
        allLiTag[j].classList.add('playing');
    }else if(allLiTag[j].classList.contains('playing')){
        allLiTag[j].classList.remove('playing');
    }

    allLiTag[j].setAttribute('onclick', 'clicked(this)');
}
};

function clicked(e) {
    let getLiIndex = e.getAttribute('li-index');
    musicIndex = getLiIndex;
    loadMusic(musicIndex);
    playMusic();
    playingMusic();
}

        