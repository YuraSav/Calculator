function plus1(){
    let number1=document.querySelector('.number1');
    let number2=document.querySelector('.number2');
    let end=document.querySelector('.end2');
    end.value=number1.value*1+number2.value*1;
}
let plus=document.querySelector('.plus');
plus.addEventListener('click',plus1);
function minus1(){
    let number1=document.querySelector('.number1');
    let number2=document.querySelector('.number2');
    let end=document.querySelector('.end2');
    end.value=number1.value-number2.value;
}
let minus=document.querySelector('.minus');
minus.addEventListener('click',minus1);
function multiply1 (){
    let number1=document.querySelector('.number1');
    let number2=document.querySelector('.number2');
    let end=document.querySelector('.end2');
    end.value=number1.value*number2.value;
}
let multiply =document.querySelector('.multiply');
multiply.addEventListener('click',multiply1);

function devide1 (){
    let number1=document.querySelector('.number1');
    let number2=document.querySelector('.number2');
    let end=document.querySelector('.end2');
    end.value=number1.value/number2.value;
}
let devide =document.querySelector('.devide');
devide.addEventListener('click', devide1);