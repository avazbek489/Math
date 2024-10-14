function solveSinSum() {
    let angle1 = 45;
    let angle2 = 30;
    let result = Math.sin(angle1 * Math.PI / 180) * Math.cos(angle2 * Math.PI / 180) + Math.cos(angle1 * Math.PI / 180) * Math.sin(angle2 * Math.PI / 180);
    document.getElementById("result1").innerHTML = `sin(45° + 30°) = ${result.toFixed(2)}`;
}

function solveCosDouble() {
    let angle = 60;
    let result = Math.cos(angle * Math.PI / 180 * 2);
    document.getElementById("result2").innerHTML = `cos(60° × 2) = ${result.toFixed(2)}`;
}

function solveSinDouble() {
    let angle = 30;
    let result = 2 * Math.sin(angle * Math.PI / 180) * Math.cos(angle * Math.PI / 180);
    document.getElementById("result3").innerHTML = `sin(2 × 30°) = ${result.toFixed(2)}`;
}

function solveSinAdd() {
    let angle1 = 60;
    let angle2 = 45;
    let result = Math.sin(angle1 * Math.PI / 180) * Math.cos(angle2 * Math.PI / 180) + Math.cos(angle1 * Math.PI / 180) * Math.sin(angle2 * Math.PI / 180);
    document.getElementById("result4").innerHTML = `sin(60° + 45°) = ${result.toFixed(2)}`;
}

function solveCosDiff() {
    let angle = 30;
    let result = Math.sin(angle * Math.PI / 180);
    document.getElementById("result5").innerHTML = `cos(90° - 30°) = ${result.toFixed(2)}`;
}
