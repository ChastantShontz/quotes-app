let quotes = [
  {
    quote: "This class is front-end development",
    author: "Eric York"
  }, {
    quote: "I am taking this class",
    author: "Chastant Shontz"
  }
];

let index = 0;

function selectQuote () {
  document.getElementById("quote").innerHTML = quotes[index].quote;
};
