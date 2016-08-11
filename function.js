var a1 = [1,2,2,1,1,1];
var a2 = [1,'a'];
var a3 = 3;
var t = getDuplicate(a1);


console.log("array main = " + a1);
console.log("array ans = " + t);


function getDuplicate(arr){
  var x = arr;
  var ans = [];
  if( !Array.isArray(arr) ) return false;

  x.sort();
  console.log("x = " + x);

  for( i=0; i < arr.length; i++){
    if( typeof(x[i]) === 'number' ){
      if( x[i] === x[i+1]) ans.push(x[i+1]);
    }
  }
  return ans;
}
