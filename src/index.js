import template from './template.hbs';


class CountdownTimer { 
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.mekeMarkup();
        this.start();
        console.log(this.targetDate);
        
    }

    mekeMarkup() {
        const markup = template();
        document.body.insertAdjacentHTML('afterbegin', markup);
        document.querySelector('.timer').id = this.selector;
    }
    
    start() {
         const refs = {
            days: document.querySelector('span[data-value="days"]'),
            hours: document.querySelector('span[data-value="hours"]'),
            mins: document.querySelector('span[data-value="mins"]'),
            secs: document.querySelector('span[data-value="secs"]')
        }

        setInterval(() => {
            
            const timeNow = Date.now();
            const deltaTime = this.targetDate - timeNow;
            const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);
            
            refs.days.textContent = `${days}`;
            refs.hours.textContent = `${hours}`;
            refs.mins.textContent = `${mins}`;
            refs.secs.textContent = `${secs}`
            
        }, 1000);
    }
   
    

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));   
        return { days, hours, mins, secs }   
        }

    pad(value) {
    return String(value).padStart(2, '0')
        }
};

const timer = new CountdownTimer({
        selector: '#timer-1',
        targetDate: new Date('Jul 28, 2021')
});

const timer2 = new CountdownTimer({
        selector: '#timer-2',
        targetDate: new Date('Jun 28, 2021')
});      