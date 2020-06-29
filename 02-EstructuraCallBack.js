/*Una funcion que al crearla le pasamos como un parametro otra funcion,
    al momento de hacer una peticion esta se ejecuta despues de este llamado
*/

function sum(num1, num2){
    console.log("SUM")
    return num1 + num2;
}

function calc(num1, num2, callback){
    console.log("CALC");
    return callback(num1, num2);
}
console.log(calc(1, 4, sum));


function date(callback){
    console.log(new Date);

    setTimeout(function(){
        let date = new Date();
        callback(date);
    }, 3000)
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate)
