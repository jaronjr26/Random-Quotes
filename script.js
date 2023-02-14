

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: '"The way to get started is to quit talking and begin doing."',
    person: 'Walt Disney'
},{
    quote: '"Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma – which is living with the results of other peoples thinking."',
    person: 'Steve Jobs'
},{
    quote: '"If life were predictable it would cease to be life, and be without flavor."',
    person: 'Eleanor Roosevelt'
},{
    quote: '"If you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough."',
    person: 'Oprah Winfrey'
},{
    quote: '"If you set your goals ridiculously high and its a failure, you will fail above everyone elses success.Life is what happens when youre busy making other plans."',
    person: 'James Cameron'
}]

btn.addEventListener('click',()=>{
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})