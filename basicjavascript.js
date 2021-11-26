/****** JavaScript Function  */
/* Anonymouse Function  are like function(x,y){
   return (x*Y)
}
*/
function x(x, y) {
  return x * y;
}
result = x(2, 3);
console.log('Result is', +result);

/* Arrow functions 

(x,y) =>  x*y; if we have only one parameter then x => x*2;
() => {
    action
}

Note: These Anonymouse function are not callable 
*/

/*** Call able Arrows function  */
const sum = (x, y) => x + y;
t_sum = sum(4, 5);
console.log(t_sum);

/***** String Concatenation */
const person = { first_name: 'Ahmad', Last_name: 'Rehman' };
console.log(
  'First name is:' +
    person.first_name +
    ' ' +
    'Last name is:' +
    person.Last_name
);

/** easiest eay to use ${}  with back (``)*/
console.log(
  `First name is: ${person.first_name} and last name is: ${person.Last_name}`
);
