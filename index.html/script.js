console.clear();
console.log("✅ script.js connected");


const marksInput = document.getElementById("marks");

const btnDoWhile = document.getElementById("btnDoWhile");

const btnFor = document.getElementById("btnFor");

const btnClear = document.getElementById("btnClear");

const output = document.getElementById("output");

console.log(marksInput, btnDoWhile, btnFor, btnClear, output);


document.addEventListener("DOMContentLoaded", function () {

    btnDoWhile.addEventListener("click", function () {
        console.log("✅ Step 1 clicked");
    });

    btnFor.addEventListener("click", function () {
        console.log("✅ Step 2 clicked");
    });

    btnClear.addEventListener("click", function () {
        console.log("✅ Clear clicked");
    });

});


function getMarksArray(){
    let text = marksInput.value;
    return text.split(",").map(x => Number(x.trim()))
}

function countPassFail() {

console.clear();
console.log("=== FOR LOOP: PASS / FAIL COUNT ===");

let marks = getMarksArray();

let pass = 0;
let fail = 0;

for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 50) {
        pass++;
        console.log("Mark", i + 1, "=", marks[i], "-> PASS");
    } else {
        fail++;
        console.log("Mark", i + 1, "=", marks[i], "-> FAIL");
    }
}

console.log("Total PASS =", pass);
console.log("Total FAIL =", fail);

output.className = "alert alert-success mt-3";
output.innerHTML =
"Total PASS = <b>" + pass + "</b><br>" +
"Total FAIL = <b>" + fail + "</b>";

}


function clearOutput() {

console.clear();
output.className = "alert alert-secondary mt-3";
output.innerHTML = "Result cleared";
marksInput.value = "";

}


document.addEventListener("DOMContentLoaded", function () {

btnDoWhile.addEventListener("click", calculateStats);
btnFor.addEventListener("click", countPassFail);
btnClear.addEventListener("click", clearOutput);

});