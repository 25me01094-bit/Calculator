let num1,num2;
let result;
num1=num2="";
let temp="";
let operator;
let history="";
function include(value){
    document.getElementById("display").value+=value;
    if(value=='+'||value=='-'||value=='*'||value=='/'){
        operator=value;
        if(num1=="") num1=temp;
        temp="";
        return;}
    temp+=value;
     if (operator === "") {
        num1 = temp;
    } 
    else {
        num2 = temp;
    }
}
function calculate(){
    history=document.getElementById("display").value;
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    if(operator==='+') result=num1+num2;
    if(operator==='-') result=num1-num2;
    if(operator==='*') result=num1*num2;
    if(operator==='/') result=num1/num2;
    document.getElementById("display").value=result;
    num1=result;
    history=history+"="+document.getElementById("display").value;
}
function showHistory(){
    document.getElementById("display").style.justifyItems='left';
    document.getElementById("display").value=history;
}
function allclear(){
    document.getElementById("display").value="";
    result=temp=num1=num2=operator="";
    document.getElementById("display").style.justifyItems='right';
}