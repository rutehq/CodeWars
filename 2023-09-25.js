// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

function testEven(n) {
    return n % 2 === 0 ? true : false
}


// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
    if((p1 === "scissors" && p2 === "paper")|| 
       (p1 === "rock" && p2 === "scissors") || 
       (p1 === "paper" && p2 === "rock" )){
      return "Player 1 won!"
    }else if(p1 === p2){
      return "Draw!"
    }else{
      return "Player 2 won!"
    }
  };


//   Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'


function greet (name, owner) {
    if(name === owner){
      return "Hello boss"
    }else{
      return "Hello guest"
    }
  }