const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf("6313196071:AAEHZh9IiFMLkVgqMj-UJHd2FGwYdqUl19c");
bot.start((ctx) => ctx.reply('Welcome. How may I help you'));
bot.command('binarysearchjs', (ctx) => ctx.reply(
    `
    function binarSearch(arr, target){
        let n = arr.length;
        let lo = 0, hi = n-1;
        while(lo <= hi){
            let mid = lo + Math.floor((hi - lo)/2);
            if(arr[mid] === target) return mid;
            else if(arr[mid] > target) hi = mid - 1;
            else lo = mid + 1;
        }
        return NaN;
    }`
));
bot.launch();