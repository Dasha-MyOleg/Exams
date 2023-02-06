// Validate person name

'use strict';


const isValidate = (str) => {
    return !!(typeof str === "string" && !!str && str.match(/(^[a-zA-Z]+)( ([a-zA-Z]+))+$/));
};

require('../Tests/validate.js')(isValidate);
