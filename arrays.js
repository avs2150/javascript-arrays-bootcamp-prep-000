Var chocolateBars= ["snickers", "hundred grand", "kitkat", "skittles"];

Function addElementToBeginningOfArray(array, element){
return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}	}
