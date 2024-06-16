const favQuotes = [
  "We cannot solve our problems with the same thinking we used when we created them.",
  "You can't blame gravity for falling in love.",
  "Once we accept our limits, we go beyond them.",
  "Intellectuals solve problems, geniuses prevent them.",
  "Kids who have never seen peace and kids who have never seen war have different values! Those who stand at the top determine what's wrong and what's right! This very place is neutral ground! Justice will prevail, you say?"
];

function getRandomString() {
  const randomIndex = Math.floor(Math.random() * favQuotes.length);
  return randomIndex;
}

function getAuthor(x) {
  if (x<4) {
    return "Albert Einstein";
  } else if (x<5) {
    return "Donquixote Doflamingo";
  }
}

var y = getRandomString();
document.getElementById("qu").innerHTML = favQuotes[y];
document.getElementById("aut").innerHTML = "-" + getAuthor(y);