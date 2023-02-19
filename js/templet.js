const multiLine = 'first line \n' +
'second line of code \n' +
'third line of text \n' +
'fourth line of string';
// console.log(multiLine);

const newMultiLine = `first line of text
second line of text
third line of string
fourth line of code`;
// console.log(newMultiLine)
const a = 20;
const b = 30;
const nums = [78, 98,45,126,444]
const summery = 'sum of: ' + a + ' and ' + b + ' is: '+ (a+b);
// console.log(summery);

const newSummary = `sum of ${a} and ${nums.length} is: ${a+b}`;
console.log(newSummary);