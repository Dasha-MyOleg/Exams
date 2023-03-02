// Merge two dictionaries

'use strict';

const merge_two_objects = (object_1, object_2)=> {
  return {...object_1, ...object_2};
};

require('../Tests/merge.js')(merge_two_objects);
