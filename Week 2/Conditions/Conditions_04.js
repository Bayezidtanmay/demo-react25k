/* 
Write a function named canEat:
Take two parameters: isHungry and hasFood.
If both are true, return "Time to eat!".
If either is false, return "You need to find food!"
Call the function with different combinations of isHungry and hasFood. 
*/

const canEat = (isHungry, hasFood) => {
  if (isHungry == true && hasFood == true) {
    return "Time to eat!";
  } else if (isHungry == false || hasFood == false) {
    return "You need to find food!";
  }
};
console.log(canEat(true, true));
console.log(canEat(false, false));
console.log(canEat(true, false));
console.log(canEat(false, true));
