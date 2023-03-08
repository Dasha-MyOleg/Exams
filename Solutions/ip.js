// Split string by the first occurrence of separator

'use strict';

const parse_ip = (ip) => {
    let res = [], j = 0;
    for (const i of ip.split('.'))
      if (isNaN(res[j++] = parseInt(i))) 
        return;
    if (j === 4)
        return res;
};

require('../Tests/ip.js')(parse_ip);
