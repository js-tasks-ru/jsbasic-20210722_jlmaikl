function camelize(str) {
  // ваш код...
  let simbol = str.split('-');
  let simbolMap = simbol.map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1));
  let result = simbolMap.join('');
  return result;
}
