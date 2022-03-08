// 'use strict';

Date.prototype.getWeek = function() {
    let firstJan = new Date(this.getFullYear(),0,1);
    return Math.ceil((((this - firstJan) / 86400000) + firstJan.getDay() + 1) / 7);
}

function getDayInfo(date){
    const days = [
        "Воскресенье","Понедельник","Вторник",
        "Среда","Четверг","Пятница","Суббота"
    ];
    const months = [
        "Января","Февраля","Марта",
        "Апреля","Мая","Июня",
        "Июля","Августа","Сентября",
        "Октября","Ноября","Декабря"
    ];
    let dateParts = date.split('.');
    let datePrep = new Date(dateParts[2], dateParts[1]-1, dateParts[0]);
    let output = `${days[datePrep.getDay()]}, ${datePrep.getWeek()} неделя ${months[datePrep.getMonth()]} ${datePrep.getFullYear()} года`
    return output;
}

console.log(getDayInfo('01.01.2000'));