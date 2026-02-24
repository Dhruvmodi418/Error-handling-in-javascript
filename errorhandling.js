let a = prompt("Enter first number")
let b = prompt("Enter second number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Enter numerical value")
}

let sum = parseInt(a) + parseInt(b)

// console.log("The sum of 2 numbers is " + sum)
// This resolves all the human errors 
// What is there is javascript code error then use try and catch 

function main() {
    //ev is used in sum*ev to show catch section
    // let ev = 1;
    try {
        console.log("The sum of 2 numbers is " + sum * ev)
        return true
    } catch (error) {
        console.log("Please wait, it's network error");
        return false
    }
    finally {
        console.log('This is the finally section');

    }

}

let c = main()



