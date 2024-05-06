//0,2,4,6,7,9,11

var today = new Date();

var christmas = new Date(today.getFullYear(),11, 25);

var currDate = today.getDate();
var currMonth = today.getMonth();
var currYear = today.getFullYear();

var daysRemaining=0;

var fromD = today.getTime() 

var cmas = christmas.getTime()

while( Number(fromD) < Number(cmas))
{   
    let tDate = new Date(currYear,currMonth, currDate++);
    daysRemaining++;

    console.log(tDate)
    fromD = tDate.getTime()
    console.log(tDate.getTime())

    // if(currDate == 30 && (currMonth == 1 || currMonth == 3 || currMonth == 5 || currMonth == 8 || currMonth == 10))
    //     currMonth++
    // else if(currDate == 31 && (currMonth == 0 || currMonth == 2 || currMonth == 4 || currMonth == 6 || currMonth == 7 || currMonth == 9 || currMonth == 11))
    //     currMonth++
}

console.log(daysRemaining)