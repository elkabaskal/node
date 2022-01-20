require('colors');
const EventEmitter = require('events');
const emitter = new EventEmitter();
let min = process.argv[2];
let sec = process.argv[3];

if (isNaN(sec) || isNaN(min)) {
    console.log('Incorrect start parameters'.red);
    return;
};

async function run() {
    if (min == 0 && sec == 0) {
        console.log('The End'.red);
        return;
    };
    sec = sec - 1;
    if (sec == -1) {
        min = min - 1;
        sec = 59;
    };
    emitter.on(sec, function() { console.log('min: ' + `${min}`.green + ': sec: ' + `${sec}`.yellow) });
    await setTimeout(run, 1000);
    emitter.emit(sec);
};
run();