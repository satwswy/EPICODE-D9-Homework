//Exercise 1

function area (l1, l2) {
    let rectangle = l1 * l2
    //console.log("\n------The rectangle is------\n")
    //console.log(rectangle)
}

area("hello" , "there");

//Exercise 2

function crazySum (n1,n2) {
    let sumOfParameters = n1 + n2 
    if (n1 === n2) {
        //console.log(sumOfParameters * 3)
    }
    else {
        //console.log(sumOfParameters)
    }
}

crazySum (50,50)

//Exercise 3
let num2 = 19
function crazyDiff (num1) {
    let difference = Math.abs(num1 - num2);
    if (num1 <= num2) {
        //console.log(difference)
    }
    else {
        //console.log(difference * 3)
    }
}

crazyDiff (10)

//Exercise 4

function boundary (n) {
    let boundaryResult 
    if ((n >= 20 && n<= 100) || n === 400)
    {
        boundaryResult = true;
        //console.log(boundaryResult)
    }
    else {
        boundaryResult = false;
        //console.log(boundaryResult)
    }
}
boundary (400)

//Exercise 5

function strivify (texthere) {
    if (texthere[0]==='S' && 
        texthere[1]==='t' && 
        texthere[2]==='r' && 
        texthere[3]==='i' &&
        texthere[4]==='v' &&
        texthere[5]==='e'
    )
    {
        console.log(texthere)
    }
    else {
        
            console.log(("Strive"), texthere)
        
    }
}