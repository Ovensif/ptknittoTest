function fizzBuzz(limit  : number) {

  for (let i = 1; i <= limit; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("Fizzbuzz");
    }

    if (i % 3 == 0) {
      console.log("Fizz");
    }

    if (i % 5 == 0) {
      console.log("Buzz");
    }

    console.log(i);
  }
}

// Inser limit number in function
fizzBuzz(10);
