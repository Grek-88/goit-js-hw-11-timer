// class CountdownTimer { 
//     constructor() { }
// };

// const timer1 = new CountdownTimer({
    //     selector: '#timer-1',
    //     targetDate: new Date('Jun 28, 2021'),
    // });
    
    const targetDate = new Date('Jun 28, 2021');
    
    
    
    
    // setInterval(() => {
    //     const timeNow = Date.now();
    //     const time = targetDate - timeNow;
    //     const counter = getTimeComponents(time);
    // console.log(`${counter.days}:${counter.hours}:${counter.mins}:${counter.secs}`);
    // }, 1000)
    


// console.log(time);

function getTimeComponents(time) {
/*
* Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
* миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
*/
const days = Math.floor(time / (1000 * 60 * 60 * 24));
// console.log(days);

/*
* Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
* остатка % и делим его на количество миллисекунд в одном часе
* (1000 * 60 * 60 = миллисекунды * минуты * секунды)
*/
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// console.log(hours);

/*
* Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
* миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
*/
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
// console.log(mins);

/*
* Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
* миллисекунд в одной секунде (1000)
*/
const secs = Math.floor((time % (1000 * 60)) / 1000);
// console.log(secs);
    
return { days, hours, mins, secs }
};


// console.log(days1);






