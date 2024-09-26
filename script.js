function appendToScreen(value) {
    document.getElementById("screen").value += value;
}

function clearScreen() {
    document.getElementById("screen").value = "";
}

function deleteLast() {
    let currentValue = document.getElementById("screen").value;
    document.getElementById("screen").value = currentValue.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById("screen").value;
    try {
        document.getElementById("screen").value = eval(expression);
    } catch (error) {
        document.getElementById("screen").value = "Error";
    }
}