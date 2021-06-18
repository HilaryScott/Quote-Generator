/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
let quotes = [
    {
      quote: 'Somewhere, something incredible is waiting to be known.',
      source: 'Carl Sagan',
      tags: 'science'
    },
    {
      quote: 'Science is not only compatible with spirituality; it is a profound source of spirituality.',
      source: 'Carl Sagan',
      citation: 'The Demon-Haunted World: Science as a Candle in the Dark',
      year: 1975,
      tags: 'science'
    },
    {
      quote: 'The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.',
      source: 'Issav Asimov',
      tags: 'science fiction'
    },
    {
      quote: 'That\'\s hot.',
      source: 'Paris Hilton',
      year: 2000,
      tags: 'life advice'
    },
    {
      quote: ' For I dipped into the Future, far as human eye could see; saw the vision of the world, and all the wonder that would be.',
      source: 'Alfred, Lord Tennyson',
      year: 1842
    },
    {
      quote: 'Where there is no vision, the people perish.',
      source: 'Proverbs 29:18',
      tags: 'religion'
    },
];



/***
 * `getRandomQuote` function
***/
const getRandomQuote = function(){
    //find random number between 0 and quotes.length
    let randomNumber = Math.floor(Math.random() * quotes.length);

    //pick that object placement quotes. ex quotes[randomnumber]
    //return that object
    return quotes[randomNumber];
};

/***
 * `printQuote` function
***/
const printQuote = function(){

    //call getRandomQuote()
    //store random quote in variable quoteObj
    let quoteObj = getRandomQuote();

    //present quote object properties as a jsx block to inject into quote-box div
    let blockQuote = `
        <p class="quote">${quoteObj.quote}</p>
        <p class="source">${quoteObj.source}`;

    //if a citation or year property exists, append to blockQuote
    if(quoteObj.citation){
        blockQuote+= `<span class="citation"> ${quoteObj.citation}</span>`;
    }
    if(quoteObj.year){
        blockQuote+= `<span class="year"> ${quoteObj.year}</span>`
    }
    //if a tag exists, concatenate
    //EXTRA CREDIT
    if(quoteObj.tags){
      blockQuote+= `<p><small>Tags: <em>${quoteObj.tags}</em></small></p>`
    }

    //close blockQuote paragraph
    blockQuote += `</p>`

    //replace code in quote-box with new code from blockQuote
    document.getElementById('quote-box').innerHTML = blockQuote;
};



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
