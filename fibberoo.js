/**
 * fibberoo
 * Created by hailingli on 2/7/2017.
 */

function fib(){
  let result=[];
  let p1=0;
  let p2=1;
  result.push(p1,p2);
  for (let i=0; i<98; i++){
    let current =p1+p2;
    result.push(current);
    p1=p2;
    p2=current;
  }
  return result;
}
console.log(fib());
