
function showOutput(text) {
    document.getElementById("output").innerText = text;
}


// 1. FOR LOOP 
function for_loop() {
    const arr = [10, 20, 30, 40, 50];
    let result = "For Loop Output:\n";
    for (let i = 0; i < arr.length; i++) 
    {
        result += arr[i] + "\n";
    }
    showOutput(result);
}

// 2. WHILE LOOP 
function while_loop() {
    let i = 1;
    let result = "While Loop Output:\n";

    while (i <= 3) {
        result += i + "\n";
        i++;
    }
    showOutput(result);
}
// 3. DO WHILE LOOP 
function do_while_loop() {
    let i = 1;
    let result = "Do While Output:\n";

    do {
        result += i + "\n";
        i++;
    } while (i < 3);

    showOutput(result);
}


// 4. FOR IN 
function for_in_object() {
    const student = {
        name: "John",
        age: 20,
        course: "JS"
    };

    let result = "For In Output:\n";

    for (let key in student) {
        result += key + ": " + student[key] + "\n";
    }
    showOutput(result);
}
// 5. FOR OF 
function for_of_array() {
    const arr = ["A", "B", "C", "D"];
    let result = "For Of Output:\n";

    for (let value of arr) {
        result += value + "\n";
    }
    showOutput(result);
}
// 6. BREAK 
function break_exit() {
    let result = "Break Demo:\n";

    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            break;
        }
        result += i + "\n";
    }

    showOutput(result);
}

// 7. CONTINUE
function continue_skip() {
    let result = "Continue Demo:\n";

    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            continue;
        }
        result += i + "\n";
    }

    showOutput(result);
}
// 8. NESTED LOOP
function nested_loop() {
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let result = "2D Array:\n\n";

    for (let i = 0; i < matrix.length; i++) 
    {

        for (let j = 0; j < matrix[i].length; j++)
        {

            result += matrix[i][j] + " ";
        }
        result += "\n"; // move to next row
    }

    showOutput(result);
}