function runProgram() {
    let output = '';

    // While Loop
    output += "<h3>While Loop</h3>";
    let i = 1;
    while (i <= 5) {
        output += "Number: " + i + "<br>";
        i++;
    }

    // For Loop
    output += "<h3>For Loop</h3>";
    for (let j = 1; j <= 5; j++) {
        if (j === 3) {
            continue;
        }
        if (j === 5) {
            break;
        }
        output += "Number: " + j + "<br>";
    }

    // Do-While Loop
    output += "<h3>Do-While Loop</h3>";
    let k = 1;
    do {
        output += "Number: " + k + "<br>";
        k++;
    } while (k <= 4);

    // Switch Statement
    output += "<h3>Switch Statement</h3>";
    let day = new Date().getDay();
    switch (day) {
        case 0: output += "Sunday"; break;
        case 1: output += "Monday"; break;
        case 2: output += "Tuesday"; break;
        case 3: output += "Wednesday"; break;
        case 4: output += "Thursday"; break;
        case 5: output += "Friday"; break;
        case 6: output += "Saturday"; break;
        default: output += "Invalid day";
    }

    // Window Object
    output += "<h3>Window Object</h3>";
    output += "Window width: " + window.innerWidth + "<br>";
    output += "Window height: " + window.innerHeight + "<br>";

    // Alert
    alert("Program Executed Successfully!");

    // Display output (fixed lowercase 'output')
    document.getElementById("output").innerHTML = output;
}
