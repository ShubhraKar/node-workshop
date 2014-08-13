var Person = require('./Person'),
    logger = require('./logger');

var shubhra = new Person({
    firstName:'Shubhra',
    lastName:'Kar',
    age:35,
    knowsKungFu:true
});

logger.info('Does '+ shubhra.firstName +' know kung-fu?');
logger.info(shubhra.knowsKungFu ? 'You better believe it!' : 'Nope.');

