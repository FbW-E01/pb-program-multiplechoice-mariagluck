// #### 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

const color = "blue";

switch (color) {
    case "red":
        console.log("red");
        break;
    case "blue":
        console.log("blue");
        break;
    case "green":
        console.log("green");
        break;
    default:
        console.log("yellow");
}
// ANSWER: it prints blue

// #### 2. Grading
// Create a switch statement that prints different comments depending on a grade.

const grade = 7;

switch (grade) {
    case 1:
        console.log("Sorry, this is not your field! YOu better quit");
        break;
    case 2:
        console.log("Sorry, you have failed!");
        break;
    case 3:
        console.log("Sorry, try again!");
        break;
    case 4:
        console.log("Almost there, but not quite!");
        break;
    case 5:
        console.log("You have passed!");
        break;
    case 6:
        console.log("Not bad, keep on!");
        break;
    case 7:
        console.log("You are getting good at this!");
        break;
    case 8:
        console.log("You are almost an expert!");
        break;
    case 9:
        console.log("Wow, you are doing so good!");
        break;
    default:
        console.log("You are a Master and Commander at this");
}

// ANSWER: it prints case 1: You are getting good at this!

// #### 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).

const fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("One apple a day keeps doctor away");
        break;
    case "mango":
        console.log("Cannot be sweater!");
        break;
    case "pear":
        console.log("Freshhhh!!");
        break;
    case "melon":
        console.log("LO más rico para el verano");
        break;
    case "banana":
        console.log("El único fruto del amor");
        break;
    default:
        console.log("This is not a fruit, this a chocolate cake");
}
// ASNWER: One apple a day keeps doctor away


// #### 4. Percentage Complete. 
// * If percentageComplete is below 30, print "Still a long way to go". 
// * If the percentageComplete is between 30 and 50, print "Slowly getting there". 
// * If percentageComplete is between 51 and 80, print "You can do it!". 
// * If percentageComplete is between 81 and 99, print "This is the last push!".
// * If percentageComplete is 100, print "You're there. Well done!". 

const Percentage_Complete = 25;

switch (true) {
    case (Percentage_Complete <= 30):
        console.log("Still a long way to go");
        break;
    case (Percentage_Complete >= 51):
        console.log("Slowly getting there");
        break;
    case (Percentage_Complete >= 81):
        console.log("You can do it!");
        break;
    case (Percentage_Complete >= 99):
        console.log("This is the last push!");
        break;
    default:
        console.log("This is not a fruit, this a chocolate cake");

}
// ANSWER: it prints    Still a long way to go



// #### 5. Differences
// * When should you use a switch statement versus an `if else` statement. Comment your answer in your js file.

// ANSWER: 
// Switch statements are cleaner syntax over a complex or stacked series of if else statements.
// Use switch instead of if when:

// You are comparing multiple possible conditions of an expression and the expression itself is non-trivial.
// You have multiple values that may require the same code.
// You have some values that will require essentially all of another value's execution, plus only a few statements.
// Use if instead of switch when:

// You want to test for the truthiness of an expression.
// You only have a single affirmative test.
// You need to evaluate different expressions for each branch

// You cannot use switch with variables that implies greater than, etc..: comparisons, (unless you use a hack), so in those case you rather use if else statement. 