function sayHello() {
    arrayEdificiosNiveis = [11, 10, 9];
    var indexMenor = arrayEdificiosNiveis.indexOf(Math.min(...arrayEdificiosNiveis));
    
    console.log(indexMenor);
    console.log(arrayEdificiosNiveis)
    console.log(...arrayEdificiosNiveis)
  }
  
  sayHello();