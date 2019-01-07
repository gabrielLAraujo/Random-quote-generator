// array that stores the quotes objects.
let quotes = [{
    quote: "Don't cry because it's over, smile because it happened",
    source: "Dr. Seuss"

  },
  {
    quote: `I'm selfish, impatient and a little insecure. I make mistakes,
     I am out of control and at times hard to handle. But if you can't handle me at my worst, 
     then you sure as hell don't deserve me at my best.`,
    source: "Marilyn Monroe"


  },
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde"

  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: "Albert Einstein"


  },
  {
    quote: "So many books, so little time.",
    source: "Frank Zappa"

  },
  {
    quote: `I give no sources, because it is indifferent to me
    whether what I have thought has already been
    thought before me by another.`,
    source: "Ludwig Wittgenstein",
    citation: "Tractatus Logico-Philosophicus",
    year: 1922

  }
]
// Generates a random number to select a random object in the array quotes.
const getRandomQuote = (quotes) => quotes[Math.floor(Math.random() * quotes.length)];

// generates a random color return its code.
const generateColor = () => {
  let color = '#';
  let hexadecimals = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    // concatenates to variable color.
    color += hexadecimals[Math.floor(Math.random() * 16)];
  }
  return color;
}

const changeColor = () => {
  let color = generateColor();
  document.body.style.backgroundColor = color;
};
const printQuoteChangeColor = () => {
  printQuote();
  changeColor();
};
//Change de innerHTML of the quote-box with a new quote
const printQuote = () => {
  let quote = getRandomQuote(quotes);
  let sourceCitationYear = quote.source;


  if (quote.citation) sourceCitationYear += (', ' + quote.citation);
  if (quote.year) sourceCitationYear += (', ' + quote.year);
  console.log(document.getElementById('quote-box'));
  document.querySelector('.quote').innerHTML = quote.quote;
  document.querySelector('.source').innerHTML = sourceCitationYear;


};
setInterval(printQuoteChangeColor, 5000);
document.getElementById('loadQuote').addEventListener("click", printQuoteChangeColor, false);