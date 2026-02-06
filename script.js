const audioPlayer = document.getElementById("audioPlayer");
const surahSelect = document.getElementById("surahSelect");
const nowPlaying = document.getElementById("nowPlaying");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const themeToggle = document.getElementById("themeToggle");

const audios = [];
const totalSurahs = 114;

for (let i = 1; i <= totalSurahs; i++) {
    const num = String(i).padStart(3, "0");
    audios.push(`audio/${num}.mp3`);
}

for (let i = 1; i <= totalSurahs; i++) {
    const option = document.createElement("option");
    option.value = i - 1;
    option.textContent = "Surah " + i;
    surahSelect.appendChild(option);
}

let currentIndex = 0;

function playAudio() {
    audioPlayer.src = audios[currentIndex];
    nowPlaying.textContent = "Now playing: Surah " + (currentIndex + 1);
    surahSelect.value = currentIndex;
    audioPlayer.play();
}

nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= audios.length) {
        currentIndex = 0;
    }
    playAudio();
});

prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = audios.length - 1;
    }
    playAudio();
});

surahSelect.addEventListener("change", () => {
    currentIndex = Number(surahSelect.value);
    playAudio();
});

audioPlayer.addEventListener("ended", () => {
    currentIndex++;
    if (currentIndex >= audios.length) {
        currentIndex = 0;
    }
    playAudio();
});

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

});

playAudio();
