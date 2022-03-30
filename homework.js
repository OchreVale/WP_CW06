function fibonacci(number){
let output = [];
var current = 1;
var previous = 0;
for(let x = 0; x<number; x++){
if (x == 0 || x == 1){
    if(x==1){
    output.push(current);
    }
    else{
        output.push(previous);
    }
}
else{
    output.push(current+previous);
    const temp = current;
    current +=previous;
    previous = temp;
}
}
return output;
}
function print_fib(){
const input = prompt("Enter a number");
let output = fibonacci(input);
document.getElementById("one").innerHTML = output.map(element =>element);
}
function stars(){
    const input = prompt("Enter a number");

      {for(let x = 0; x< input; x++){
            for (let y = 0; y<=x; y++){
                document.write("*");
            }
            document.write("<br>");
        }
    }
}
function print_stars(){
    document.getElementById("two").innerHTML = stars()
}
function sort_array(){
    let input = prompt("Enter a comma separated list of numbers to be sorted");
    input = input.split(",");

    return input.sort();
}
function display_arr(){
    const output = sort_array();
    document.getElementById("three").innerHTML = output;
}
function change_color(color1, color2){
    document.body.style.backgroundColor = color1;
    document.body.style.color = color2;

}
function apply_color(){
    const color1 = prompt("Enter desired background color");
    const color2 = prompt("Enter desired text color");
    change_color(color1, color2);
}
function random_shuffle(){
    let arr = [1,2,3,4,5,6];
    let curr = 0;
    let randomIndex;
    while(curr < arr.length){
        randomIndex =Math.floor(Math.random()*curr);
        [arr[randomIndex], arr[curr]] = [arr[curr], arr[randomIndex]];
        curr +=1
    }
    document.getElementById("five").innerHTML = arr;
}
function dictionary(){
    let input = prompt("Enter a comma separated list of things to count");
    input = input.split(",");
    var dict = {};
    let count = 0;
    let key;
    for(const element of input){
        if (dict[element]){
            dict[element] +=1;
        }
        else{
            dict[element] = 1;
        }
    }
    for (elem in dict){
        if(dict[elem]>count){
            key = elem;
            count = dict[elem];
        }
    }
    console.log(dict)
    document.getElementById("four").innerHTML =`${key}:${count}`;
}