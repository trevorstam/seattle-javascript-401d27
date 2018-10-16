'use strict';

module.exports = ((a, b)=>{
    if (typeof(a) !== 'number' || typeof(b) !== 'number'){
        return null;
    } else {
        return {
            add: a + b,
            sub: a - b,
        }
    }  
});