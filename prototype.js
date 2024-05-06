myFunc = function(){
    // this.a = "hello",
    this.b = "world!"   
}

myFunc.prototype.a = "john";
myFunc.prototype.c = 12;

obj = new myFunc();

console.log(obj.a, obj.b, obj.c)