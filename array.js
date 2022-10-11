let array = 0;
function printArrayValues(){
    array++;
    console.log(array , "array");
    if (array === 3){
        return
    }else{
        return printArrayValues()
    }
}
printArrayValues()