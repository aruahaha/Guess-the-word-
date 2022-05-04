// function wordGenerator() {
//     let wordArr = [
//         "cloistered",
//         "intend",
//         "burst",
//         "language",
//         "ragged",
//         "sudden",
//         "youthful",
//         "island",
//         "potato",
//         "proud",
//         "unsightly",
//         "snobbish",
//         "lick",
//         "friend",
//         "spiders",
//         "guiltless",
//         "stereotyped",
//         "accidental",
//         "tremendous",
//         "attach",
//         "rice",
//         "fearful",
//         "men",
//         "pull",
//         "scattered",
//         "toys",
//         "romantic",
//         "rinse",
//         "unarmed",
//         "jobless",
//         "tawdry",
//         "type",
//         "door",
//         "complete",
//         "arch",
//         "common",
//         "scale",
//         "tenuous",
//         "hook",
//         "rainy",
//         "dapper",
//         "dirty",
//         "nail",
//         "bell",
//         "rural",
//         "pets",
//         "greasy",
//         "tray",
//         "scribble",
//         "instinctive",
//         "lewd",
//         "godly",
//         "thought",
//         "electric",
//         "wash",
//         "skin",
//         "decisive",
//         "push",
//         "cagey",
//         "wax",
//         "identify",
//         "calendar",
//         "rustic",
//         "curvy",
//         "harbor",
//         "belief",
//         "fascinated",
//         "fog",
//         "tent",
//         "neck",
//         "superficial",
//         "zip",
//         "ducks",
//         "rose",
//         "kindhearted",
//         "silky",
//         "tour",
//         "calculate",
//         "gather",
//         "yell",
//         "face",
//         "tan",
//         "acceptable",
//         "stem",
//         "wrestle",
//         "great",
//         "trousers",
//         "cars",
//         "safe",
//         "collar",
//         "bee",
//         "scrape",
//         "grin",
//         "blushing",
//         "oven",
//         "optimal",
//         "pour",
//         "interrupt",
//         "relieved",
//         "swim"
//     ];
//     let radNum = Math.floor(Math.random() * 101);
//     return wordArr[radNum];
// }

// console.log(wordGenerator());

const inner = document.querySelector(".inner")
const word = document.querySelector(".word");
const button = document.querySelector(".btn");
const button2 = document.querySelector(".btn2");
const playArea = document.querySelector(".play-area");

window.onload = function() {
    // inner.classList.replace("fadeOut","fadeIn")
    word.classList.replace("fadeOut","fadeIn")
    button.classList.replace("fadeOut","fadeIn")
    button2.classList.replace("fadeOut","fadeIn")
} 

button.onclick = () => {
    inner.classList.add("fadeOut");
    playArea.classList.replace("fadeOut", "fadeIn");
}

button2.onclick = () => {
    inner.classList.add("fadeOut");
    playArea.classList.replace("fadeOut", "fadeIn");
}