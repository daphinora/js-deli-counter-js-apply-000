// okay, you got this! woot woot mcswooty toot toot woot. don't forget to set your variables, set an empty array, and push what you need to push. don't be afraid to get messy with this before you clean it up--just get something working before worrying about how it looks!! 
// also, pls pls pls use .length in your loops.
 
//deli = katzDeli from the index-test.js
var deli = [];
function takeANumber(deli, name) {
  var i = 0;
  deli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${i++}.`);
}

console.log(takeANumber([], "spiderman"));
console.log(takeANumber([], "spiderman"));

// BACK TICKS YOU SILLY GOOSE

function nowServing(katzDeliLine) {
  var i=0;
  while(i < deli.length) {
    i++;
  }
  
  if(katzDeliLine.length === 0) {
    return("There is nobody waiting to be served!");
  } else 
  return(`Currently serving ${katzDeliLine.shift()}.`);
}


function currentLine(katzDeliLine) {
var queue = `The line is currently: `;

  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  }
 
  for (var i = 0; i < katzDeliLine.length; i++) {
   
    var customer = `${i + 1}. ${katzDeliLine[i]}, `;
    
// that's a lot to write out--could i use variables?
  //  var spot = i + 1
  //  var person = katzDeliLine[i]
  //  var customer = `${spot}. ${person}, `
// yep, 38-40 work as well for simplifying purposes (checked) but why bother adding so many variables when i'm only using this code and these variables once? **which way is better practice?** probably depends on what i'm coding, eh?

queue = queue + customer;
// 43 stumped me. what's the difference between 53 and "queue++"
  }
return queue.slice(0, -2);
 }
 
// ngl i didn't know which numbers to slice in 46 so i just picked random numbers until the comma after Ann (-2) was removed and the space before 1 (0) was added. I think it's to do with where those mistakes are at in the queue but i'm not 100% sure

//   it works!!!!!!!! woot woot mcswooty toot toot woot

// **questions for the currentLine funciton: is there an easier (simpler, less roundabout) way to write this function? I care more about making my code work than streamlining it, but am I forming any bad habits yet?**
