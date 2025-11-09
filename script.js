const songs = [
  { title: "Track 1", src: "music/music1.mp3" },
  { title: "Track 2", src: "music/music2.mp3" },
  { title: "Track 3", src: "music/music3.mp3" },
  { title: "Track 4", src: "music/music4.mp3" },
  { title: "Track 5", src: "music/music5.mp3" }
];
const player = document.getElementById("player");
const title = document.getElementById("title");
let current = 0;
function play() {
  player.src = songs[current].src;   // 今の曲をセット
  title.textContent = "🎵 Now Playing: " + songs[current].title;  // タイトル表示
  player.play();                     // 再生！
}
function pause() {
  player.pause();
}
function next() {
  current = (current + 1) % songs.length; // 次の番号に進む（最後なら0に戻る）
  play();                                 // 再生関数を呼ぶ
}
