// find 1st Jan being a sunday beween 2014 to 2050
//Date(year,month,date)
var fromYear = 2014;
var toYear = 2050;

let count=0;

for(let i=fromYear; i<=toYear;i++)
{
    let checkDate = new Date('01/01/'+i)
    let check= checkDate.getDay()
    if(check==0){
        count++
        console.log(checkDate.getFullYear())
    }
}

console.log(count)

console.log(true == 1)