/*
//Задание 1.
const arr = [1, 5, 8, '']
function getCount(array) {
let chet = 0;
  let nechet = 0;
  let zero = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0 && typeof(array[i])==='number'){
      chet++
    }if (array[i] % 2 !== 0 && typeof(array[i])==='number'){
      nechet++
    } if (array[i] === 0){
      zero++
    }
  }
  let result = 'четные:'+ chet +' НЕчетные:'+ nechet + " ноль:"+zero;
  return result;
}
console.log(getCount(arr));


//Задание 2.
let number = (num) =>{
for (let i = 2; i < num; i++) {
	if (num % i !== 0 && num % 2 !== 0 && num < 1000 ) {
		console.log(`Число ${num} простое`);
    return
	}else if(num > 1000){
    console.log(`Число ${num} введено вне диапазона`);
    return
  }else{
    console.log(`Число ${num} не является простым`);
    return
  }
}}
number(1004);


//Задание 3.
function getCountA(a, b) {
  function getCountB(a, b){
    return a + b
  }
  return getCountB(a, b);
}
console.log(getCountA(1, 3));


//Задание 4.
function printNumbers(a, b) {
  let count = a;

  let timer = setInterval(function() {
    console.log(count);
    if (count == b) clearInterval(timer);
    count++;
  }, 2000);
}


//Задание 5.
let getNumbers = (x, n) => {
 return x**n
}
console.log(getNumbers(2, 8));

*/