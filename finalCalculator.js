function showValue(x){
    document.getElementById("show").value += x;
}
function doIt(){
    let equation = document.getElementById("show").value;
    let result = eval(equation);
    document.getElementById("show").value = result;
}

function clearScreen(){
    document.getElementById("show").value = "";
}

function test(){
    alert("OK");
}