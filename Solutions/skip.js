// Return an remove without listed values

'use strict';

const skip = (obj, ...removes) => {

  for (const key of obj)
    for (const toremove of removes)
        if (toremove === key)
            obj.splice(obj.indexOf(key), 1);
  return obj;
};

require('../Tests/skip.js')(skip);
