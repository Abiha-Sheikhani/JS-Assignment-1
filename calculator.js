// ---------------Percentage Calculator----------------
let totalmarks = 500;
let obtainedmarks = +prompt("enter your number");
let percentagecalculator = (obtainedmarks/totalmarks)*100;

if(percentagecalculator>=90){
    console.log("congrats,You are passed.with grade A++");
    document.write("congrats,You are passed.with grade A++");
}
else if(percentagecalculator>=80){
    console.log("congrats,You are passed.with grade A+");
    document.write("congrats,You are passed.with grade A+");
}
else if(percentagecalculator>=70){
    console.log("congrats,You are passed.with grade A");
    document.write("congrats,You are passed.with grade A");
}
else if(percentagecalculator>=60){
    console.log("congrats,You are passed.with grade B");
    document.write("congrats,You are passed.with grade B");
}
else if(percentagecalculator>=50){
    console.log("congrats,You are passed.with grade C");
    document.write("congrats,You are passed.with grade C");
}
else if(percentagecalculator>=40){
    console.log("congrats,You are passed.with grade D");
    document.write("congrats,You are passed.with grade D");
}
else{
    console.log("unfortunately, you are fail!")
    document.write("unfortunately, you are fail!")
}

// 