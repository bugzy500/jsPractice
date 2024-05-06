var counts = [9, 15, 6, 2, 6],
  goal = 5;

// var closest = counts.reduce((acc, curr) => {
//     return (Math.abs(curr - goal) < Math.abs(acc - goal) ? curr : prev);
// })

var closest1 = counts.reduce(function(prev, curr) {
  let res;
  console.log(prev,curr)
  res =  (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
  console.log(res)
  return res
});

console.log(closest1);