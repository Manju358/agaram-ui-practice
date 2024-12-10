  // find maximum between two numbers

  let a=70;
  let b=5;
      if (a > b) {
        console.log("a is maximum");
      }
        else if (a<b){
          console.log("b is maximum");
        }
        else{
          console.log("both are equal");
        }
  
       // find maximum between three numbers
   
  let num1=50;
  let num2=80;
  let num3=40;
    if (num1>num2 && num1>num3){
      console.log("num1 is maximum");
    }
  else if(num2>num1 && num2>num3){
     console.log("num2 is maximum");
  }
  else if (num3>num1 && num3>num2){
     console.log("num3 is maximum");
  }
  else{
    console.log("cannot find maximum numbers");
  }
  
       // whether a number is negative, positive or zero.
  
  let number=0;
  if(number>0){
    console.log("given number is positive");
  }
  else if(number<0){
    console.log("given number is negative");
  }
  else{
    console.log("given number is zero");
  }
  
       // check whether a number is divisible by 5 and 11 or not
  
  let num=110;
  if(num %5==0 && num %11==0){
    console.log("number is divisible by 5 and 11");
  }
  else{
    console.log("number is not divisible by 5 and 11");
  }
  
      // check whether a number is even or odd
  let numb=7;
  if(numb %2==0){
     console.log("given number is even");
  }
  else{
    console.log("given number is odd");
  }
  
      // check whether a year is leap year or not
  let numbe=2025;
  if(numbe %4==0){
    console.log("given year is leap year");
  }
  else{
    console.log("given year is not leap year");
  }
  
  // check whether a character is alphabet or not
   let char="erhettr";
  if(char>="a" && char<="z"){
    console.log("given character is Alphabet");
  }else{
    console.log("given character is not Alphabet");
  }
  
  
  
      // input any alphabet and check whether it is vowel or consonant
      
  let alpha="T";
  if (alpha=="a"||alpha=="e" || alpha=="i" || alpha=="o"|| alpha=="u" 
      ||alpha=="A" || alpha=="E"|| alpha=="I"|| alpha=="O"|| alpha=="U"){
    console.log("given alphabet is vowel");
  }
  else{
     console.log("given alphabet is consonant");
  }
   
  //  input any character and check whether it is alphabet, digit or special character
  
  let charac=735764;
  if(charac>="a" && charac<="z"|| charac>="A" && charac<="Z"){
    console.log("given character is Alphabet");
  }
  else if(charac>=0 || charc<=9){
    console.log("given character is digit");
  }
  else{
     console.log("given character is special character");
  }
  
  // check whether a character is uppercase or lowercase alphabet
  let charact="A";
  if(charact>="A" && charact<="Z"){
    console.log("given character is uppercase");
  }
  else if(charact>="a" && charact<="z"){
    console.log("given character is lowercase");
  }else{
    console.log("check input");
  }
  
  // input week number and print week day
  let days=4;
  let weeks=[
    {name:"sunday",days:1},
    {name:"monday",days:2},
    {name:"tuesday",days:3},
    {name:"wednesday",days:4},
    {name:"thursday",days:5},
    {name:"friday",days:6},
    {name:"saturday",days:7},

  ]
   if (days==1) {
         console.log("sunday");
      } else if (days==2) {
           console.log("monday");
      } else if (days==3) {
          console.log("tuesday");
      } else if (days==4) {
          console.log("wednesday");
      } else if (days==5) {
          console.log("thursday");
      } else if (days==6) {
          console.log("friday");
      } else if (days==7) {
           console.log("saturday");
      } else {
          console.log("invalid weeknumber");
      }
  // input month number and print number of days in that month
  
  let input=11;
let months=[
  {name:"january",days:31},
  {name:"feb",days:28},
  {name:"march",days:31},
  {name:"april",days:30},
  {name:"may",days:31},
  {name:"june",days:30},
  {name:"july",days:31},
  {name:"august",days:31},
  {name:"sep",days:30},
  {name:"oct",days:31},
  {name:"nov",days:30},
  {name:"dec",days:31},
  ]
console.log(months[input-1].days);
  
  // count total number of notes in given amount
//    input angles of a triangle and check whether triangle is valid or not
  let angle1=60;
  let angle2=50;
  let angle3=60;
  if(angle1+angle2+angle3==180){
    console.log("triangle is valid");
  }else{
    console.log("triangle is not valid");
  }
  
  //input all sides of a triangle and check whether triangle is valid or not
  let side1=13;
  let side2=7;
  let side3=20;
  if(side1+side2>side3 || side2+side3>side1 || side1+side3>side2){
    console.log("triangle is valid");
  }else{
    console.log("triangle is not valid");
  }
  // check whether the triangle is equilateral, isosceles or scalene triangle
  let si1=40;
  let si2=50;
  let si3=70;
  if(si1==si2 && si2==si3 && si1==si3){
    console.log("traingle is equilateral");
  }else if ( si1==si2 || si2==si3 || si1==si3){
    console.log("traingle is isosceles");
  }else{
     console.log("traingle is scalene");
  }
//   calculate profit or loss 
  let sp=2000;
  let cp=1000;
  if(sp>cp-100){
    console.log("pofit");
  }else{
    console.log("loss");
  }