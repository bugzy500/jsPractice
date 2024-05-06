let minutes = 60;
let times = [];
let date = new Date();
for (let i = 0; i < minutes; i++) {
    date.setMinutes(date.getMinutes() - 1);
    times.push(date.getMinutes());
}
console.log(times);