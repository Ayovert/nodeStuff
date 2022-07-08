const EventEmitter = require('events');
const celebrity = new EventEmitter();

//Subscribe to celebrity - observer1

celebrity.on('race', function(result){
    if(result == 'win')
    {
        console.log('Congratulations, you are the best!');
    }
    
});



//Subscribe to celebrity - observer2

celebrity.on('race', function(result){
    if(result == 'win')
    {
    console.log('Boo, i could have done better than that!');
    }
});

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
});

celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');