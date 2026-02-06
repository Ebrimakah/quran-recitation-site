const audio = document.getElementById("audioPlayer");
const select = document.getElementById("surahSelect");
const nowPlaying = document.getElementById("nowPlaying");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSurah = 1;

for (let i = 1; i <= 114; i++) {
    const option = document.createElement("option");
    const fileNumber = i.toString().padStart(3, '0');
    option.value = fileNumber + ".mp3";
    option.text = `Surah ${i}`;
    select.appendChild(option);
}
function playSurah(num) {
    const fileNumber = num.toString().padStart(3, '0');
    audio.src = "audio/" + fileNumber + ".mp3";
    audio.load();
    audio.play();
    nowPlaying.textContent = "Now playing: Surah " + num;
    select.value = fileNumber + ".mp3";
}
select.addEventListener("change", function() {
    const selected = this.selectedIndex + 1;
    currentSurah = selected;
    playSurah(currentSurah);
});
nextBtn.addEventListener("click", function() {
    if (currentSurah < 114) currentSurah++;
    playSurah(currentSurah);
});
prevBtn.addEventListener("click", function() {
    if (currentSurah > 1) currentSurah--;
    playSurah(currentSurah);
});
playSurah(currentSurah);

document.body.addEventListener('click', function enableAudio() {
    audio.play().catch(() => {});
    document.body.removeEventListener('click', enableAudio);
});
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});

