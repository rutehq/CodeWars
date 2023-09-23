// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    if(number % 2 === 0){
      return 8 * number;
    }else{
      return 9 * number;
    }
}


// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

function sayHello(name) {
  return 'Hello, ' + name
}
sayHello()