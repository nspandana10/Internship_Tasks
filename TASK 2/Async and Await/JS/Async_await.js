async function fetchUsers() {

    const loader = document.getElementById("loader");
    const output = document.getElementById("output");

    console.log("1 Clear");
    output.innerText = "";

    loader.style.display = "block";

    console.log("2 Start Fetch");

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    console.log("3 Response Received");

    const data = await response.json();

    console.log("4 Data Converted");
    loader.style.display = "none";
    output.innerText = JSON.stringify(data, null, 2);

    console.log("5 End");
}
