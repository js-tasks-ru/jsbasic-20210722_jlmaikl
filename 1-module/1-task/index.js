function factorial(n) {
  let result = 1;
  if (n == 0 || n == 1) {
    return 1;
  } else {
  while (n > 1) {
    result *= n--;
  }  
  return result;
}
}






