// File: love-together.js
function runLua() {
    const luaCode = document.getElementById("editor").value;
    try {
        const result = evalLua(luaCode); // Replace with your Lua interpreter
        document.getElementById("output").textContent = result;
    } catch (error) {
        document.getElementById("output").textContent = "Error: " + error.message;
    }
}

function evalLua(code) {
    // Replace this function with your Lua interpreter or use an existing library
    // For demonstration purposes, we'll just return the input code.
    return code;
}   