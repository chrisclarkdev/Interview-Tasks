let newNum;
function fizzbuzz() {
  for( num = 1; num <= 100; num++ ){
    let newNum = (( num % 15  === 0  ? "fizzbuzz" : num  % 5 == 0 ? "buzz" : num % 3 === 0 ? "fizz" :num ))
    console.log(newNum);
  }
}
fizzbuzz();

   
