function memoize(func) {
  // code goes here
  let cacheArr = new Array(2).fill('')
  let current = '';

  //console.log('str', [1,2,3].toString())

  function inner(...args) {
    console.log('passed args', args)

    if (!areDeeplyEqual(current, args))
      cacheArr = ['', '']

    current = args
    if (!areDeeplyEqual(cacheArr[0], current)) {
      cacheArr[0] = current
      cacheArr[1] = func.call(null, ...args)
      console.log('not cache', cacheArr[1])
      return cacheArr[1]
    }
    else {
      console.log('from cache', cacheArr[1])
      return cacheArr[1]
    }
  }

  inner.clear = () => {
    cacheArr = ['', '']
  }

  return inner
}


function areDeeplyEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (Array.isArray(obj1) && Array.isArray(obj2)) {

    if (obj1.length !== obj2.length) return false;

    return obj1.every((elem, index) => {
      return areDeeplyEqual(elem, obj2[index]);
    })


  }

  if (typeof obj1 === "object" && typeof obj2 === "object" && obj1 !== null && obj2 !== null) {
    if (Array.isArray(obj1) || Array.isArray(obj2)) return false;

    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    if (keys1.length !== keys2.length || !keys1.every(key => keys2.includes(key))) return false;

    for (let key in obj1) {
      //console.log(obj1[key], obj2[key])
      let isEqual = areDeeplyEqual(obj1[key], obj2[key])
      if (!isEqual) { return false; }
    }

    return true;

  }

  return false;
}

function isDeepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!genericIsEqual(object1[key], object2[key])) {
      return false;
    }
  }

  return true;
}

/**
 * Function that verifies if two values are deeply equal.
 * It supports: primitives, objects, arrays, maps, sets and dates.
 */
function genericIsEqual(value1, value2) {
  if (isPrimitive(value1) && isPrimitive(value2)) {
    return value1 === value2;
  }

  if (Array.isArray(value1) && Array.isArray(value2)) {
    return isArrayDeepEqual(value1, value2);
  }

  if (value1 instanceof Map && value2 instanceof Map) {
    return isMapDeepEqual(value1, value2);
  }

  if (value1 instanceof Date && value2 instanceof Date) {
    return isDateDeepEqual(value1, value2);
  }

  if (typeof value1 === "object" && typeof value2 === "object") {
    return isDeepEqual(value1, value2);
  }

  return false;
}

function isPrimitive(value) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return true;
  }

  return typeof value !== "object" && typeof value !== "function";
}

function isArrayDeepEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (!genericIsEqual(array1[i], array2[i])) {
      return false;
    }
  }

  return true;
}

function isMapDeepEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }

  for (const [key, value] of map1) {
    if (!genericIsEqual(value, map2.get(key))) {
      return false;
    }
  }

  return true;
}

function isDateDeepEqual(date1, date2) {
  return date1.getTime() === date2.getTime();
}







// ==============================
// Test suite #1 - Only most recent result is memoized

function square(x) {
  console.log(`computing ${x} * ${x}`);
  return x * x;
}

const memoizedSquare = memoize(square);

memoizedSquare(1); // from computation
memoizedSquare(1); // from cache
memoizedSquare(2); // from computation
memoizedSquare(2); // from cache
memoizedSquare(1); // from computation


// ==============================
// Test suite #2 - Can clear memoized result
// 2. Can clear memoized result

memoizedSquare(3); // from computation
memoizedSquare(3); // from cache
memoizedSquare.clear();
memoizedSquare(3); // from computation


// ==============================
// Test suite #3 - Works with arbitrary number of arguments (4 in this example)

function sum(a, b, c, d) {
  console.log(`computing ${a} + ${b} + ${c} + ${d}`);
  return a + b + c + d;
}

const memoizedSum = memoize(sum);

memoizedSum(1, 2, 3, 4); // from computation
memoizedSum(1, 2, 3, 4); // from cache
memoizedSum(2, 1, 3, 4); // from computation

// ==============================
// Test suite #4 - Non-primitive arguments are compared by deep equality

function compare(obj) {
  console.log(`comparing ${obj.a} and ${obj.b}`);
  return obj.a > obj.b;
}

const memoizedCompare = memoize(compare);

memoizedCompare({ a: 1, b: 2 }); // from computation
memoizedCompare({ a: 1, b: 2 }); // from cache
memoizedCompare({ b: 2, a: 1 }); // from cache
memoizedCompare({ b: 3, a: 1 }); // from computation
