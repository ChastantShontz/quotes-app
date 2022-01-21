let quotes = [
  {
    quote: "This class is front-end development",
    author: "Eric York"
  }, {
    quote: "I am taking this class",
    author: "Chastant Shontz"
  }
];

sessionStorage.index = Math.floor(Math.random() * quotes.length);
let index = sessionStorage.index;
document.getElementById("quote").innerHTML = quotes[index].quote;
document.getElementById("author").innerHTML = quotes[index].author;

sessionStorage.color = Math.ceil(Math.random() * 6);
let color = sessionStorage.color;
if (color == 1) {
  document.getElementById("quotesCont").style.backgroundColor = "var(--red)";
}
else if (color == 2) {
  document.getElementById("quotesCont").style.backgroundColor = "var(--orange)";
}
else if (color == 3) {
  document.getElementById("quotesCont").style.backgroundColor = "var(--yellow)";
}
else if (color == 4) {
  document.getElementById("quotesCont").style.backgroundColor = "var(--green)";
}
else if (color == 5) {
  document.getElementById("quotesCont").style.backgroundColor = "var(--blue)";
}
else if (color == 6) {
  document.getElementById("quotesCont").style.backgroundColor = "var(--purple)";
}

function forward() {
  if (sessionStorage.index == quotes.length - 1) {
    sessionStorage.index = 0;
    let index = sessionStorage.index;
    document.getElementById("quote").innerHTML = quotes[index].quote;
    document.getElementById("author").innerHTML = quotes[index].author;
  }
  else {
    sessionStorage.index++;
    let index = sessionStorage.index;
    document.getElementById("quote").innerHTML = quotes[index].quote;
    document.getElementById("author").innerHTML = quotes[index].author;
  }
}

function back() {
  if (sessionStorage.index == 0) {
    sessionStorage.index = quotes.length - 1;
    let index = sessionStorage.index;
    document.getElementById("quote").innerHTML = quotes[index].quote;
    document.getElementById("author").innerHTML = quotes[index].author;
  }
  else {
    sessionStorage.index--;
    let index = sessionStorage.index;
    document.getElementById("quote").innerHTML = quotes[index].quote;
    document.getElementById("author").innerHTML = quotes[index].author;
  }
}
