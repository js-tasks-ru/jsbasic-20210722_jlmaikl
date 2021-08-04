function sumSalary(salaries) {
  // ваш код...
  let sumSalaries = 0;

for (let key in salaries) {  
  if (typeof salaries[key] === 'number') {
    if (isFinite(salaries[key])) {
      sumSalaries += salaries[key];
     }
  } 
}
 return sumSalaries;
}

