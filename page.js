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

function forward() {
  if (sessionStorage.index == quotes.length - 1) {
    sessionStorage.index = 0;
    let index = sessionStorage.index;
    document.getElementById("quote").innerHTML = quotes[index].quote;
  }
  else {
    sessionStorage.index++;
    let index = sessionStorage.index;
    document.getElementById("quote").innerHTML = quotes[index].quote;
  }
}

function back() {
  if (sessionStorage.index == 0) {
    sessionStorage.index = quotes.length - 1;
    let index = sessionStorage.index;
    document.getElementById("quote").innerHTML = quotes[index].quote;
  }
  else {
    sessionStorage.index--;
    let index = sessionStorage.index;
    document.getElementById("quote").innerHTML = quotes[index].quote;
  }
}
