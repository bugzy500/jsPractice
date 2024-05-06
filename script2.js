function sayHello() {
    var arrayEdificiosNiveis = [11,10,1];
    var indexMenor = arrayEdificiosNiveis.indexOf(Math.min.apply(null, arrayEdificiosNiveis));
    console.log(indexMenor);
  }
  sayHello();