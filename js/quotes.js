const quotes = [
  {
    quote: "I want a monument but I'll settle for a ceremony.",
    author: "Kelly Manning",
  },
  {
    quote: "But when a woman breaks the rules the world's not on her side.",
    author: "Beverly Brown",
  },
  {
    quote: "Remember feeling like your life begins today.",
    author: "Samantha Brown",
  },
  {
    quote: "We say goodbye to high school and face the world.",
    author: "Samantha Brown",
  },
  {
    quote: "You look back one more time, then you let it go.",
    author: "All cast",
  },
  {
    quote:
      "Maybe not today, maybe tomorrow. Maybe it's as simple as California dreams.",
    author: "Adam",
  },
  {
    quote: "Choose the road less traveled.",
    author: "Samantha Brown",
  },
  {
    quote: "I said, 'Get in, loser, you're wasting your best life!'",
    author: "Kelly Manning",
  },
  {
    quote: "Kelly eats Mentos with Diet Coke and explodes.",
    author: "Samantha Brown",
  },
  {
    quote: "Let me be your ride out of town.",
    author: "Adam",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `Today's line: "${todaysQuote.quote}"`;
author.innerText = `-${todaysQuote.author}`;
