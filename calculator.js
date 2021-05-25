function showValue(x){
    document.getElementById("answer").value += x;
}
function doIt(){
    let equation = document.getElementById("answer").value;
    let result = eval(equation);
    document.getElementById("answer").value = result;
}

function clearScreen(){
    document.getElementById("answer").value = "";
}