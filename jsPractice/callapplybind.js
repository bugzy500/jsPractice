const fname = {
    firstname: "Ankit",
    lastname: "Garg"
}


let fullname =  function(a){
    return this.firstname +" "+ this.lastname + a
}

// let nameCombine = function(a)
// {   
//     return a;
// }

//console.log(person.fullname.call(fname));

console.log(fullname.call(fname,"ok"))


let altFullName = fullname.bind(fname)

console.log(altFullName("YEAH"))

let nums = [1,6,23,6,12]

console.log(Math.max.apply(null, nums))

(function(){
    var a = b = 42;
  })();
   
console.log(typeof a);
console.log(typeof b);