require('colors');
//const emitter = require('events');

let min = process.argv[2]; //ввод минут
let sec = process.argv[3]; //ввод секунд

//таймер
function run() {

    if (isNaN(sec) || isNaN(min)) {
        console.log('Incorrect start parameters'.red);
        return;
    };

    sec = sec - 1;
    console.log('min: ' + `${min}`.green + ': sec: ' + `${sec}`.yellow);
    if (min == 0 && sec == 0) {
        console.log('The End'.red);
        return;
    };
    if (sec == 0) {
        min = min - 1;
        sec = 60;
    };

    setTimeout(run, 1000);
};

run();