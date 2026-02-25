//  Declaration 
function declaration() {

    function greet() {
        return "Hello from Function Declaration";
    }

    const a = 10; // fixed typo (was cconst)

    document.getElementById("output").innerText =
        greet() + " | Value of a = " + a;
}


//Expression 
function expression() {

    const greet = function () {
        return "Hello from Function Expression";
    };

    document.getElementById("output").innerText = greet();
}


// Arrow Function 
function arrow() {

    const greet = () => {
        return "Hello from Arrow Function";
    };

    document.getElementById("output").innerText = greet();
}


// Parameters & Return 
function parameter() {

    function add(a, b) {
        return a + b;
    }

    let num1 = 5;
    let num2 = 3;

    const result = add(num1, num2);

    document.getElementById("output").innerText =
        `Sum of ${num1} and ${num2} is: ${result}`;
}


// Callback 
function callback() {

    function processUser(name, callback) {
        callback(name);
    }

    function greet(name) {
        document.getElementById("output").innerText =
            "Hello " + name + " (from Callback Function)";
    }

    processUser("Student", greet);
}






Js