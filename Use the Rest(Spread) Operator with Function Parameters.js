const sum = (function(){
  return function sum(x,y,z){
    const args = [x,y,z];
    return args.reduce((a,b)=>a+b,0)
  }
})();
const hello = sum(1,2,3);
console.log(hello)

// Rest Operator or Spread Operator

const sum1 =(function(){
  // sum1 irunthu rest panni eduthukithu
  return function sum1(...args){
    return args.reduce((a,b)=>a+b,0)
  }
})();
const world = sum1(1,2,3,4);
console.log(world)
