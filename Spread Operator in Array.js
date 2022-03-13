const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
// Without Spread Operator
(function(){
 arr2 = arr1;
 arr1[0] = 'POTATO';
})();
console.log(arr2)
//result =>["POTATO", "FEB", "MAR", "APR", "MAY"]
// Spread Operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  arr2 = [...arr1]; // change this line
  arr2[0] = 'potato'
})();
console.log(arr2);
//result =>["potato", "FEB", "MAR", "APR", "MAY"]
