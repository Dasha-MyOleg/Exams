// Delete listed keys from dictionary

'use strict';


const drop = (obj, ...args) => {
  for (const key of  Object.keys(obj))
      if (args.includes(key))
        delete obj[key];
  return obj;
};

require('../Tests/drop.js')(drop);
