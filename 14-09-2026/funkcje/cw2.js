const checkAge = (age) => {
  if (age >= 18) {
    return "pełnoletni";
  } else {
    return "niepełnoletni";
  }
};

console.log(checkAge(17));
console.log(checkAge(18));
