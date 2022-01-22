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
  document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom right, rgba(250, 47, 47, 80%), rgba(250, 47, 47, 60%), rgba(250, 47, 47, 70%))";
  document.getElementById("quotesCont").style.background = "linear-gradient(to bottom right, rgba(250, 47, 47, 90%), rgba(250, 47, 47, 70%), rgba(250, 47, 47, 80%))";
  document.getElementById("text").style.backgroundColor = "rgba(250, 47, 47, 40%)";
}
else if (sessionStorage.color == 2) {
  document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom right, rgba(250, 150, 0, 80%), rgba(250, 150, 0, 60%), rgba(250, 150, 0, 70%))";
  document.getElementById("quotesCont").style.background = "linear-gradient(to bottom right, rgba(250, 150, 0, 90%), rgba(250, 150, 0, 70%), rgba(250, 150, 0, 80%))";
  document.getElementById("text").style.backgroundColor = "rgba(250, 150, 0, 40%)";
}
else if (sessionStorage.color == 3) {
  document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom right, rgba(252, 223, 33, 80%), rgba(252, 223, 33, 60%), rgba(252, 223, 33, 70%))";
  document.getElementById("quotesCont").style.background= "linear-gradient(to bottom right, rgba(252, 223, 33, 90%), rgba(252, 223, 33, 70%), rgba(252, 223, 33, 80%))";
  document.getElementById("text").style.backgroundColor = "rgba(252, 223, 33, 40%)";
}
else if (sessionStorage.color == 4) {
  document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom right, rgba(45, 161, 84, 80%), rgba(45, 161, 84, 60%), rgba(45, 161, 84, 70%))";
  document.getElementById("quotesCont").style.background = "linear-gradient(to bottom right, rgba(45, 161, 84, 90%), rgba(45, 161, 84, 70%), rgba(45, 161, 84, 80%))";
  document.getElementById("text").style.backgroundColor = "rgba(45, 161, 84, 40%)";
}
else if (sessionStorage.color == 5) {
  document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom right, rgba(53, 97, 187, 80%), rgba(53, 97, 187, 60%), rgba(53, 97, 187, 70%))";
  document.getElementById("quotesCont").style.background = "linear-gradient(to bottom right, rgba(53, 97, 187, 90%), rgba(53, 97, 187, 70%), rgba(53, 97, 187, 80%))";
  document.getElementById("text").style.backgroundColor = "rgba(53, 97, 187, 40%)";
}
else if (sessionStorage.color == 6) {
  document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom right, rgba(154, 60, 201, 80%), rgba(154, 60, 201, 60%), rgba(154, 60, 201, 70%))";
  document.getElementById("quotesCont").style.background = "linear-gradient(to bottom right, rgba(154, 60, 201, 90%), rgba(154, 60, 201, 70%), rgba(154, 60, 201, 80%))";
  document.getElementById("text").style.backgroundColor = "rgba(154, 60, 201, 40%)";
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
      document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom right, rgba(250, 47, 47, 80%), rgba(250, 47, 47, 60%), rgba(250, 47, 47, 70%))";
      document.getElementById("quotesCont").style.background = "linear-gradient(to bottom right, rgba(250, 47, 47, 90%), rgba(250, 47, 47, 70%), rgba(250, 47, 47, 80%))";
      document.getElementById("text").style.backgroundColor = "rgba(250, 47, 47, 40%)";
    }
    else if (sessionStorage.color == 2) {
      document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom right, rgba(250, 150, 0, 80%), rgba(250, 150, 0, 60%), rgba(250, 150, 0, 70%))";
      document.getElementById("quotesCont").style.background = "linear-gradient(to bottom right, rgba(250, 150, 0, 90%), rgba(250, 150, 0, 70%), rgba(250, 150, 0, 80%))";
      document.getElementById("text").style.backgroundColor = "rgba(250, 150, 0, 40%)";
    }
    else if (sessionStorage.color == 3) {
      document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom right, rgba(252, 223, 33, 80%), rgba(252, 223, 33, 60%), rgba(252, 223, 33, 70%))";
      document.getElementById("quotesCont").style.background = "linear-gradient(to bottom right, rgba(252, 223, 33, 90%), rgba(252, 223, 33, 70%), rgba(252, 223, 33, 80%))";
      document.getElementById("text").style.backgroundColor = "rgba(252, 223, 33, 40%)";
    }
    else if (sessionStorage.color == 4) {
      document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom right, rgba(45, 161, 84, 80%), rgba(45, 161, 84, 60%), rgba(45, 161, 84, 70%))";
      document.getElementById("quotesCont").style.background = "linear-gradient(to bottom right, rgba(45, 161, 84, 90%), rgba(45, 161, 84, 70%), rgba(45, 161, 84, 80%))";
      document.getElementById("text").style.backgroundColor = "rgba(45, 161, 84, 40%)";
    }
    else if (sessionStorage.color == 5) {
      document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom right, rgba(53, 97, 187, 80%), rgba(53, 97, 187, 60%), rgba(53, 97, 187, 70%))";
      document.getElementById("quotesCont").style.background = "linear-gradient(to bottom right, rgba(53, 97, 187, 90%), rgba(53, 97, 187, 70%), rgba(53, 97, 187, 80%))";
      document.getElementById("text").style.backgroundColor = "rgba(53, 97, 187, 40%)";
    }
    else if (sessionStorage.color == 6) {
      document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom right, rgba(154, 60, 201, 80%), rgba(154, 60, 201, 60%), rgba(154, 60, 201, 70%))";
      document.getElementById("quotesCont").style.background = "linear-gradient(to bottom right, rgba(154, 60, 201, 90%), rgba(154, 60, 201, 70%), rgba(154, 60, 201, 80%))";
      document.getElementById("text").style.backgroundColor = "rgba(154, 60, 201, 40%)";
    }
  }
  else {
    sessionStorage.color = color;
    if (sessionStorage.color == 1) {
      document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom right, rgba(250, 47, 47, 80%), rgba(250, 47, 47, 60%), rgba(250, 47, 47, 70%))";
      document.getElementById("quotesCont").style.background = "linear-gradient(to bottom right, rgba(250, 47, 47, 90%), rgba(250, 47, 47, 70%), rgba(250, 47, 47, 80%))";
      document.getElementById("text").style.backgroundColor = "rgba(250, 47, 47, 40%)";
    }
    else if (sessionStorage.color == 2) {
      document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom right, rgba(250, 150, 0, 80%), rgba(250, 150, 0, 60%), rgba(250, 150, 0, 70%))";
      document.getElementById("quotesCont").style.background = "linear-gradient(to bottom right, rgba(250, 150, 0, 90%), rgba(250, 150, 0, 70%), rgba(250, 150, 0, 80%))";
      document.getElementById("text").style.backgroundColor = "rgba(250, 150, 0, 40%)";
    }
    else if (sessionStorage.color == 3) {
      document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom right, rgba(252, 223, 33, 80%), rgba(252, 223, 33, 60%), rgba(252, 223, 33, 70%))";
      document.getElementById("quotesCont").style.background = "linear-gradient(to bottom right, rgba(252, 223, 33, 90%), rgba(252, 223, 33, 70%), rgba(252, 223, 33, 80%))";
      document.getElementById("text").style.backgroundColor = "rgba(252, 223, 33, 40%)";
    }
    else if (sessionStorage.color == 4) {
      document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom right, rgba(45, 161, 84, 80%), rgba(45, 161, 84, 60%), rgba(45, 161, 84, 70%))";
      document.getElementById("quotesCont").style.background = "linear-gradient(to bottom right, rgba(45, 161, 84, 90%), rgba(45, 161, 84, 70%), rgba(45, 161, 84, 80%))";
      document.getElementById("text").style.backgroundColor = "rgba(45, 161, 84, 40%)";
    }
    else if (sessionStorage.color == 5) {
      document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom right, rgba(53, 97, 187, 80%), rgba(53, 97, 187, 60%), rgba(53, 97, 187, 70%))";
      document.getElementById("quotesCont").style.background = "linear-gradient(to bottom right, rgba(53, 97, 187, 90%), rgba(53, 97, 187, 70%), rgba(53, 97, 187, 80%))";
      document.getElementById("text").style.backgroundColor = "rgba(53, 97, 187, 40%)";
    }
    else if (sessionStorage.color == 6) {
      document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom right, rgba(154, 60, 201, 80%), rgba(154, 60, 201, 60%), rgba(154, 60, 201, 70%))";
      document.getElementById("quotesCont").style.background = "linear-gradient(to bottom right, rgba(154, 60, 201, 90%), rgba(154, 60, 201, 70%), rgba(154, 60, 201, 80%))";
      document.getElementById("text").style.backgroundColor = "rgba(154, 60, 201, 40%)";
    }
  }
}
