/**
 *  This program validates a string containing parentheses,
 *  brackets or braces.
 *  (){} = Valid
 *  ({} = Invalid
 */

let test1 = '(())';
let test2 = '({()()}[()])';
let test3 = '{[}()]';

const isOpen = (char) => {
  return ['(','{','['].includes(char)
};

const closes = (char1, char2) => {
  let pairs = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  }
  return pairs[char1] === char2;
};

const validate = (text) => {
  let stack = []

  for(let char of text.split('')) {
    if(isOpen(char)){
      stack.push(char)
    }else{
      let topChar = stack.pop()
      if(!closes(topChar, char)){
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(validate(test1));
console.log(validate(test2));
console.log(validate(test3));
