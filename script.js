/*let a = 10;
let b = 5;

let sum = a + b;
let dif = a - b;

console.log(sum);
console.log(dif);*/

/*===== БАЗА: контейнеры, типографика =====*/

function print(input){
    console.log(input);
}

function HelloWorld(input){
    if(input == "print"){
        print("Hello, World!");
    }
}

function sum(a, b){
    return a + b;
}

console.log(sum(7, 3));
console.log(sum(10, 5));

function isTaskDone(status){
    return status === "выполнена";
}

console.log(isTaskDone("выполнена"));
console.log(isTaskDone(""));

function taskSummar(total, done){
    let active = total - done;
    return "Всего: " + total + " | Выполнено: " + done + " | Активных: " + active;
}

console.log(taskSummar(5, 3));
console.log(10, 4);