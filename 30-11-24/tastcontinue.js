// 

let amount=3777;
if(amount>=500){
  let no_notes=Math.floor(amount/500);
  console.log("500 note is"+" "+no_notes);
  amount=amount%500;
}
if(amount>=200){
  let no_notes=Math.floor(amount/200);
  console.log("200 note is"+" "+no_notes);
  amount=amount%200;
}
if(amount>=100){
  let no_notes=Math.floor(amount/100);
  console.log("100 note is"+" "+no_notes);
  amount=amount%100;
}
if(amount>=50){
  let no_notes=Math.floor(amount/50);
  console.log("50 note is"+" "+no_notes);
  amount=amount%50;
}
if(amount>20){
  let no_notes=Math.floor(amount/20);
  console.log("20 note is"+" "+no_notes);
  amount=amount%20;
}
if(amount>=10){
  let no_notes=Math.floor(amount/10);
  console.log("10 note is"+" "+no_notes);
  amount=amount%10;
}
if(amount>=5){
  let no_notes=Math.floor(amount/5);
  console.log("5 note is"+" "+no_notes);
  amount=amount%5;
}
if(amount>=2){
  let no_notes=Math.floor(amount/2);
  console.log("2 note is"+" "+no_notes);
  amount=amount%2;
  
}
if(amount>=1){
  let no_notes=Math.floor(amount/1);
  console.log("1 note is"+" "+no_notes);
  amount=amount%1;
}