// Change double quotation to open or close quotation

'use strict';

const quotes = (str) => {
  if(typeof str !== "string" && !str)
    return "";

  str = str.split("");

  for(let i = 0, open = false; i < str.length; ++i)
    if (str[i] === '"') {
        str[i] = open ? '»' : '«';
        open = !open;
    }

  return str.join('');
};

require('../Tests/quotes.js')(quotes);
