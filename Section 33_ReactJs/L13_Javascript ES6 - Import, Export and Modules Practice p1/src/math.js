const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

// dont add parenth doublePi() b.c dont want to return immediately
export default pi; //Default Export
export { doublePi, triplePi }; //Additional Exports
