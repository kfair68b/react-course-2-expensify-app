// Use map and reduce to add numbers in array of objects

export default (expenses) => {
  if (expenses.length > 0){
    const amountsArray = expenses.map(a => a.amount);
    const amountsTotal = amountsArray.reduce((acc,currValue) => {
      return acc + currValue;
    }, 0);
    return amountsTotal;
  }
  else{
    return 0;
  }
}
