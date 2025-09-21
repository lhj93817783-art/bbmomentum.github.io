const quotes = [
    {
        quote:"Never lose sight of the face that the most important yard stick to your success is how you treat other people.",
        author: "Barbara Bush",
    },
    {
        quote:"Success is not final; failure is not fatal: It is the courage to continue that counts",
        author:"Winston S. Churchill"
    },
    {
        quote:"Success usually comes to those who are too busy to be looking for it.",
        author:"Henry David Thoreau"
    },
    {
        quote:"If you really look closely, most overnight successes took a long time.",
        author:"Steve Jobs"
    },
    {
        quote:"he secret of success is to do the common thing uncommonly well.",
        author:"John D. Rockefeller"
    },
    {
        quote:" Don’t be afraid to give up the good to go for the great.",
        author:"John D. Rockefeller"
    },
    {
        quote:"Success is walking from failure to failure with no loss of enthusiasm.",
        author:"Winston Churchill"
    },
    {
        quote:"I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.",
        author:"G. K. Chesterton"
    },
    {
        quote:"If you are not willing to risk the usual, you will have to settle for the ordinary.",
        author:"Jim Rohn"
    },
    {
        quote:"The ones who are crazy enough to think they can change the world, are the ones that do.",
        author:"Anonymous"
    }
]

//위치 정해줌
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

//값을 정해줌
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;