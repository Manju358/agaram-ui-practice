// create a new array that removes duplicate elements

let num=[1,2,2,3,4,4,5];

for(let n of num){
  let count=0;
  for(let m of num){
    if(n==m){
      count=count+1;
    }
  }
  if(count>1){
    console.log(n+"is duplicate");
  }
}
// pattern
let input_value=5;
let star="\n";
for(let i=1; i<=input_value; i++){
  for(let j=1; j<=i; j++){
    star= star+"*";
  }
  star=star+"\n";
}
console.log(star);

// Write a program that uses a for loop to count the number of vowels in a given string

let str="JavaScript is fun";
let int=0;
for(let input of str){
if (input=="a"||input=="e" || input=="i" || input=="o"|| input=="u" ||
    input=="A"||input=="E" || input=="I" || input=="O"|| input=="U"){
  int=int+input;
}
}
console.log(int.length-1);



// Write a for loop to find all prime numbers between 1 and 50. 
// Use conditions to check if a number is prime

for(let m=1; m<=50; m++){
  if(m!=1){
    let isprime=true;
    for(n=2; n<m; n++){
      if(m%n==0){
      isprime=false;
    }
    }
    if(isprime==true){
      console.log(m+"is a prime number");
    }else{
      console.log(m+"is not a prime number");
    }
    }
    
  }

// Write a for loop that iterates from 1 to 100
// If the number is divisible by 3, print Fizz.
// ● If divisible by 5, print Buzz.
// ● If divisible by both 3 and 5, print FizzBuzz.
// ● Otherwise, print the number.

let numb=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
         51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];

for(let int of numb){
 if(int%3==0 && int%5==0){
    console.log("fizzbuzz");
  }
    else if(int%3==0){
    console.log("fizz");
    }
  else if(int%5==0){
    console.log("buzz");
  }else
    console.log(int);
  
}

// calculate the sum of the first 50 natural numbers
 let numbe=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
            21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
            41,42,43,44,45,46,47,48,49,50];
let tot=0;
for(let value of numbe){
 tot=tot+value;
}
 console.log(tot);

// for(let i=6; i>=-59;i--){
//   console.log(i);
// }


// Write a for loop to print numbers from 1 to 10.

for(let i=1; i<=10; i++){
   console.log(i);
}

// Write a for loop to iterate from 1 to 20. 
// For each number, check whether it is even or odd
// and log it to the console.

for(let k=1; k<=20; k++){
  if(k%2==0){
    console.log(k+" "+"is "+ "even number");
  }else{
    console.log(k+" "+"is "+ "odd number");
  }
}

// Write a for loop to print the multiplication table of a number provided

let a = 5;
for (let i = 1; i <= 10; i++){
    console.log(a + " * " + i +
        " = " + a * i);

}

// reverse string

let inputs="hello";
let result="";
 for (let i in inputs){
   result=result+inputs[inputs.length-(parseInt(i)+1)];
 }
console.log(result);
