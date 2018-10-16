'use strict';

module.exports = ((str) =>{
    if(typeof(str) !== 'string'){
        return null;
    } else {
        return `hello ${str}`;
    }   
});