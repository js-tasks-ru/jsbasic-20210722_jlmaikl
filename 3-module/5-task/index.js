function getMinMax(str) {
  // ваш код...
  let arr = str.split(' ');
  let arrFilter = arr.filter(item => (!isNaN(item)));
  return {min: Math.min(...arrFilter), max: Math.max(...arrFilter)};

}
