// print name
function printmyname(){
    console.log("Manju")
  }
  printmyname()
  printmyname()
  printmyname()
  printmyname()
  
  
  // print givenname
  function givenname(name){
    console.log(name);
    
  }
  givenname("Manju");
  givenname("welcome");
  
//  Addition 
  
  function Add(fn,sn){
    let sum=fn+sn;
    console.log(sum);
  }
  Add(1,2);
  Add(36565,836238);
  
  // operation
  function totals(fn,sn,tn,ln){
    let Addi=fn+sn;
    let Multi=tn*ln;
    let result=Addi-Multi;
    console.log(result);
  }
  totals(1,2,3,4);
  
  function fullname(p,q){
    let sum=(p+q);
    console.log(sum);
  }
  fullname("Agaram"," Academy");

  
  
  
  
  let detail={
    fname:"hai",
    lname:"helo"    
    
  }
  function fullname(object){
    console.log(object.fname+object.lname);
  }
  fullname(detail);
  
  
  
  let colors=["red","blue","green","black"];
  let details={ 
    fname:"manju",
    lname:"r"
  }
  function answer(object,color){
  
    console.log(object.fname+object.lname+" likes " +(colors.length)+" colors "+color);
    
  }
  answer(details,colors);
  
  function getname(name){
    console.log("Name is "+name);
  }
  getname("Agaram");
  
  function getname(name){
    return "Name is "+name;
  }
  let output=getname("Agaram");
  console.log(output);
  
  function sum(num1,num2){
    return num1+num2;
  }
  function Final(num1,num2){
    return num1*num2;
  }
  function Subt(total,total1){
    return total-total1;
  }
  let total=sum(5,6);
  let total1=Final(4,5);
  let total2=Subt(total,total1);
  console.log(total);
  console.log(total1);
  console.log(total2);
  
  let math_mark=80;
     if(math_mark>60){
    console.log("you are pass");
  }
  let mathsmark=50;
  if(mathsmark>60){
     console.log("you are pass");
  }
  else{
    console.log("you are fail");
  }
  
  let gender="transgender";
  if(gender=="female"){
    console.log("color is pink");
  }
  else if(gender=="male"){
    console.log("color is blue");
  }
  else{
    console.log("color is green");
  }
  
  let a= 7;
  if(a%2==0){
    console.log("given number is Even");
    
  }
  else{
     console.log("given number is Odd");
  }
  
  
  function Summ(m,t,e,s,si){
    return (m+t+e+s+si)/5;
  }       
  
  let marks={
    m:90,
    t:80,
    e:60,
    s:70,
    si:50
  }
  let result=Summ(marks.m,marks.t,marks.e,marks.s,marks.si);
  if(result>60){
    console.log("you are eligible");
  }
  else{
    console.log("you are not eligible");
  }



  let marks={
    tamil:100,
    maths:90,
    english:70,
    computerscience:90,
    physics:80,
    chemistry:50
  }
  
  if((marks.maths>70 && marks.physics>70 && marks.chemistry>70) || (marks.maths>80 && marks.computerscience>80)){
    console.log("You are eligible");
  }
  
  else{
      console.log("You are not eligible");
  }
  
  
  
  if(marks.maths>70 && marks.computerscience>70){
    console.log("You are eligible");
  }
  else{
      console.log("You arel not eligible");
  
  }
  if(marks.maths>70 || marks.computerscience>70){
    console.log("You are eligible");
  }
  else{
      console.log("You arel not eligible");
  
  }
  
  if(marks.maths>70){
    console.log("You are eligible");
  }
  else if(marks.physics>70){
   
    console.log("You are eligible1");
  }
  else if(marks.chemistry>70){
   
    console.log("You are eligible2");
  }
  else{
    console.log("You are not eligible");
  }
  
  let mark={
    
    maths:90,
    computerscience:90,
    physics:80,
    chemistry:50,
    biology:"rhrhe",
  }
  let totalpercentage=(mark.maths+mark.computerscience+mark.physics+mark.chemistry+mark.biology)/5;
  if (totalpercentage>=90){
        console.log("Grade A");
      }
      else if (totalpercentage >= 80) {
          console.log("Grade B");
      } else if (totalpercentage >= 70) {
          console.log("Grade C");
      } else if (totalpercentage >= 60) {
           console.log("Grade D");
      } else if (totalpercentage >= 40) {
          console.log("Grade E");
      } else if (totalpercentage<40){
          console.log("Grade F");
      } else{
         console.log("Check input");
      }
  
  
  
  