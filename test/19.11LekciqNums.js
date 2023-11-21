let day = 1
console.log(`${day}: Стани, пий кафе иди на работа`);
day++;

----------------------------------------

for(let day = 1; day <=5; day++){
    console.log(`${day}: Стани, пий кафе иди на работа`);
}

----------------------------------------

let count = 10;
console.log(count);
count--;
console.log(count)
count--;
console.log(count)
count--;
...

-----------------------------

for (let count=10; count >=1; count -=1) {
console.log(count);
}

-----------------------------------

function printNumbers(input) {
    let n = Number(input[0]);
    for(let i = n; i >=1; i--){
        console.log(i);
    }
}
printNumbers(["100"])

---------------------------------------

for(let index = 0; index < 10; index++){
    console.log(index);
}

-----------------------------------------
for(let index = 0; index < 10; ++index){
    console.log(index);
}

-----------------------
function numStep3(input) {
    let n = Number(input[0]);
    for(let i = 1; i <= n; i+3){
        console.log(i);
    }
}
numStep3(["10"])
------------------------------
function indexOf2(input) {
    let n = Number(input[0]);
    for(let i = 0; i <= n; i = i + 1){
       
        if(i % 2 ===0) {
            let number = Math.pow(2, i)
            console.log(number);
        }
    }
}
indexOf2(["10"])
--------------------------------------
or 
--------------------------------------
function nindexOf2(input) {
    let n = Number(input[0]);
    for(let i = 0; i <= n; i = i+2 ){
       console.log(Math.pow(2,i));
    }
}
indexOf2(["10"])
-------------------------------------
