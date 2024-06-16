const favQuotes = [
  "We cannot solve our problems with the same thinking we used when we created them."
];
const author = [
  "Albert Einstein"
]

function getRandomString() {
  const randomIndex = Math.floor(Math.random() * favQuotes.length);
  return randomIndex;
}

function getAuthor(x) {
  if (x = 1) {
    return "Albert Einstein";
  }
}

document.getElementById("qu").innerHTML = favQuotes[getRandomString()];
document.getElementById("aut").innerHTML = "-" + getAuthor(getRandomString());
