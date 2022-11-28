function countWords(str) {
    const arr = str.split(' ');

    return arr.filter(word => word !== '').length;
}

function calculateReadingTime() {
    const text = document.getElementById("reading-time-textarea").value;

    if(text == ""){
        return;
    }
    const wpm = document.getElementById("average-words").value;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("estimate-reading-time").innerText = time;


    const arr = text.split(' ');
    var countWords = arr.filter(word => word !== '').length;
    document.getElementById("total-words").innerText = countWords;

    var totalCharacters = text.trim().length;
    document.getElementById("total-characters").innerText = totalCharacters;

    var totalSpaces = text.split(' ').length - 1;
    document.getElementById("total-spaces").innerText = totalSpaces;

    var totalVowels = text.match(/[aeiou]/gi).length;
    document.getElementById("total-vowels").innerText = totalVowels;

}

var rng = document.getElementById("average-words");

var listener = function() {
  window.requestAnimationFrame(function() {
    document.getElementById("count-wpm").innerHTML = rng.value;
  });
};

rng.addEventListener("mousedown", function() {
  listener();
  rng.addEventListener("mousemove", listener);
});
rng.addEventListener("mouseup", function() {
  rng.removeEventListener("mousemove", listener);
});

rng.addEventListener("keydown", listener);


function clearStatistics(){
    document.getElementById("reading-time-textarea").value = '';
    document.getElementById("estimate-reading-time").innerText = 0;
    document.getElementById("total-words").innerText = 0;
    document.getElementById("total-characters").innerText = 0;
    document.getElementById("total-spaces").innerText = 0;
    document.getElementById("total-vowels").innerText = 0;
}
  