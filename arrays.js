Var chocolateBars= ["snickers", "hundred grand", "kitkat", "skittles"];

Function addElementToBeginningOfArray(array, element){
Return [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}	}
