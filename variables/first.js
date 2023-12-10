// let gameNumber = 20;
// let UserNumber = prompt("Enter random number: ");
// while(UserNumber != gameNumber){
//    UserNumber =  prompt("You entered wrong number. Guess again : ");
// }

// let marks = [90, 75, 98, 97, 45];

// let highestMarks = marks.filter((val) => {
//    return val > 90;
// });
// console.log(highestMarks);

let user = prompt("Enter a number: ");
let arr = [];
for(i = 1; i <= user; i++){
   arr[i - 1] = i;
}
console.log(arr);

let sum = arr.reduce((res, curr) => {
   return res + curr;
});
console.log("Sum is: ", sum);

let factorial =  arr.reduce((res, curr) => {
   return res * curr;
});
console.log(factorial); 
