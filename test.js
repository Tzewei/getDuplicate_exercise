describe (" testing array ", function() {
  var a1 = [1,2,2,1,1,1];
  var a2 = [1,'a'];
  var a3 = 3;

 it('is a valid Array', function() {
   expect(getDuplicate(a3)).toEqual(false);
 });

  it('has valid numbers', function() {
    expect(getDuplicate(a2)).toBe(false);
 });
//      it('is a valid string', function() {
//    expect(palindrome(123)).toEqual(false);
//  });
//        it('is an empty string', function() {
//    expect(palindrome("")).toEqual(false);
//  });
//      it('not one character', function() {
//    expect(palindrome("b")).toEqual(false);
//  });
//          it('two characters', function() {
//    expect(palindrome("ab")).toEqual(false);
//  });
// })
})
