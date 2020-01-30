// okay, you got this! woot woot mcswooty toot toot woot. don't forget to set your variables, set an empty array, and push what you need to push. don't be afraid to get messy with this before you clean it up--just get something working before worrying about how it looks!! 
// also, pls pls pls use .length in your loops.
 
//deli = katzDeli from the index-test.js
var deli = [];
function takeANumber(deli, name) {
  deli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${deli.length} in line.`)
}

// BACK TICKS YOU SILLY GOOSE

// silly goose, you forgot the .length AGAIN. running ${deli} instead of ${deli.length} like thirty times with minor changes to the code around the actual problem is infuriarating, but what a relief to finally find the mistake (an hour later)

function nowServing(katzDeliLine) {
  var i=0;
  while(i < deli.length) {
    i++
  }
  
  if(katzDeliLine.length === 0) {
    return("There is nobody waiting to be served!")
  } else 
  return(`Currently serving ${katzDeliLine.shift()}.`)
}
// YAY YOU REMEMBERED THE .LENGTH THIS TIME WOOT WOOT


// post-working note: you struggled the most with currentLine. the others made sense--what problems did you have in the currentLine function? variables were difficult to understand. you weren't sure whether to treat this function with a for loop or a while loop, but you decided to choose a for loop for consistency. The base 'if' statement was easy--you'd done that a million times already, so noting those lines (28-30) went quickly. got that out of the way (despite initially forgetting to put the .length again, silly goose--didn't we just fix this problem??)

// the queue.slice(0, -2) was baffling. searched through array methods for like twenty minutes (learned about different methods, though, which was cool) before realizing slice was what I needed. sigh.

// **questions for this section: is there an easier (simpler, less roundabout) way to write this function? I care more about making my code work than streamlining it, but am I forming any bad habits yet?**


function currentLine(katzDeliLine) {
var queue = `The line is currently: `   
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  }
 
  for (var i = 0; i < katzDeliLine.length; i++) {
   
    var customer = `${i + 1}. ${katzDeliLine[i]}, `  
    
// that's a lot to write out--could i use variables?
  //  var spot = i + 1
  //  var person = katzDeliLine[i]
  //  var customer = `${spot}. ${person}, `
// yep, these work as well for simplifying purposes (checked) but why bother adding so many variables when i'm only using this code and these variables once? **which way is better practice?** probably depends on what i'm coding, eh?

queue = queue + customer
// 53 stumped me. how do i run the entire array?? like this, apparently.
  }
return queue.slice(0, -2)
 }
 
// ngl i didn't know which numbers to slice in 56 so i just picked random numbers until the comma after Ann (-2) was removed and the space before 1 (0) was added. I have no idea how i did this. i think my fingers know something my brain hasn't caught up to yet. catch up, brain. (please)

//it works!!!!!!!! woot woot mcswooty toot toot woot
