let newNum;
function fizzbuzz() {
  for( num = 1; num <= 100; num++ ){
  
    let newNum = (( num % 15  === 0  ? "fizzbuzz" : num  % 5 == 0 ? "buzz" : num % 3 === 0 ? "fizz" :num ))
    // console.log(newNum)
    const app = document.querySelector('#app');
   app.innerHTML = newNum;
   console.log(newNum)
  }
  
  


// for (num = 1; num <= 100; num++ ){
//   console.log(num);
//   if( num % 3 === 0  && num % 5 === 0) {
//     console.log('fizzbuzz')
//     // return 'fizz';
//   } else if (num % 5 === 0){
//     console.log('buzz')
//     // return 'buzz';
//   } else if (num % 3 === 0){
//     console.log('fizz')
// }
// }


}
fizzbuzz();

// console.log(newNum);