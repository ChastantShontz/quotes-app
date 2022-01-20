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
