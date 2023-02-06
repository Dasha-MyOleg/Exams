// Get day number

'use strict';

const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parse_day = (str) => {
  for (let i = 0; i < days.length; ++i)
    if (str.startsWith(days[i])) return i + 1;
  return -1;
};

require('../Tests/day.js')(parse_day);
