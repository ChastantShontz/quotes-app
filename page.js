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
document.getElementById("quote").innerHTML = quotes[sessionStorage.index].quote;
document.getElementById("author").innerHTML = quotes[sessionStorage.index].author;

sessionStorage.color = Math.ceil(Math.random() * 6);
if (sessionStorage.color == 1) {
  document.getElementById("quotesCont").style.backgroundColor = "var(--red)";
}
else if (sessionStorage.color == 2) {
  document.getElementById("quotesCont").style.backgroundColor = "var(--orange)";
}
else if (sessionStorage.color == 3) {
  document.getElementById("quotesCont").style.backgroundColor = "var(--yellow)";
}
else if (sessionStorage.color == 4) {
  document.getElementById("quotesCont").style.backgroundColor = "var(--green)";
}
else if (sessionStorage.color == 5) {
  document.getElementById("quotesCont").style.backgroundColor = "var(--blue)";
}
else if (sessionStorage.color == 6) {
  document.getElementById("quotesCont").style.backgroundColor = "var(--purple)";
}

function forward() {
  if (sessionStorage.index == quotes.length - 1) {
    sessionStorage.index = 0;
    document.getElementById("quote").innerHTML = quotes[sessionStorage.index].quote;
    document.getElementById("author").innerHTML = quotes[sessionStorage.index].author;
  }
  else {
    sessionStorage.index++;
    document.getElementById("quote").innerHTML = quotes[sessionStorage.index].quote;
    document.getElementById("author").innerHTML = quotes[sessionStorage.index].author;
  }
  selectColor();
}

function back() {
  if (sessionStorage.index == 0) {
    sessionStorage.index = quotes.length - 1;
    document.getElementById("quote").innerHTML = quotes[sessionStorage.index].quote;
    document.getElementById("author").innerHTML = quotes[sessionStorage.index].author;
  }
  else {
    sessionStorage.index--;
    document.getElementById("quote").innerHTML = quotes[sessionStorage.index].quote;
    document.getElementById("author").innerHTML = quotes[sessionStorage.index].author;
  }
  selectColor();
}

function selectColor() {
  let color = +sessionStorage.color + Math.ceil(Math.random() * 5);
  if (color > 6) {
    let color = Math.ceil(Math.random() * 6);
    sessionStorage.color = color;
    if (sessionStorage.color == 1) {
      document.getElementById("quotesCont").style.backgroundColor = "var(--red)";
    }
    else if (sessionStorage.color == 2) {
      document.getElementById("quotesCont").style.backgroundColor = "var(--orange)";
    }
    else if (sessionStorage.color == 3) {
      document.getElementById("quotesCont").style.backgroundColor = "var(--yellow)";
    }
    else if (sessionStorage.color == 4) {
      document.getElementById("quotesCont").style.backgroundColor = "var(--green)";
    }
    else if (sessionStorage.color == 5) {
      document.getElementById("quotesCont").style.backgroundColor = "var(--blue)";
    }
    else if (sessionStorage.color == 6) {
      document.getElementById("quotesCont").style.backgroundColor = "var(--purple)";
    }
  }
  else {
    sessionStorage.color = color;
    if (sessionStorage.color == 1) {
      document.getElementById("quotesCont").style.backgroundColor = "var(--red)";
    }
    else if (sessionStorage.color == 2) {
      document.getElementById("quotesCont").style.backgroundColor = "var(--orange)";
    }
    else if (sessionStorage.color == 3) {
      document.getElementById("quotesCont").style.backgroundColor = "var(--yellow)";
    }
    else if (sessionStorage.color == 4) {
      document.getElementById("quotesCont").style.backgroundColor = "var(--green)";
    }
    else if (sessionStorage.color == 5) {
      document.getElementById("quotesCont").style.backgroundColor = "var(--blue)";
    }
    else if (sessionStorage.color == 6) {
      document.getElementById("quotesCont").style.backgroundColor = "var(--purple)";
    }
  }
}
