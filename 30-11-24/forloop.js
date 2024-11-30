// for loop

let color=["blue","red","white","gray","black"];
 for(let each in color){
   console.log(each);
 }
let colors=["blue","red","white","gray","black"];
 for(let each of colors){
   console.log(each);
 }

let colors1=["blue","red","white","gray","black"];
 for(let each of colors1){
   if(each!="white"){
      console.log(each);
   }
  }


let colors2=["blue","red","white","gray","black"];
 for(let each of colors2)
 {
   if(each!="white" && each!="red"){
     console.log(each);
   }
 }
     
     
 let colors3=["blue","red","white","gray","black"];
 for(let each of colors3)
 {
   if(each!="white" && each!="red"){
    if(each=="blue"){
      console.log("black");
    }
     else if(each=="black"){
      console.log("blue");
    }
     else{
      console.log(each);
    }
   }
 }

let marks=[90,80,95,50,70,60];
let total=0;
for(let each of marks){
  total=total+each;
 }
 console.log(total);


let mark=[90,80,95,50,70,60];
let total1=0;
for(let each in mark){
//    mark[each];
  total1=total1+mark[each];
 
 }
 console.log(total1);

 let students=[{
  

  name:"stu1",
  age:20,
  marks:[40,80,100,80,50]
},
  {
  name:"stu2",
  age:25,
   marks:[40,80,50,60,70]
},
  {
  name:"stu3",
  age:29,
   marks:[40,40,60,66,89]
}
  ];
let total2=0;
for(let each of students){
//   console.log(each.marks);
  for(let mar of each.marks){
     total2=total2+mar;
  }
//   console.log(total2);
  console.log(each.name+" "+ "mark"+" "+"is"+" "+total2);

}
for(let each of students){

  if(each.age>=25){
    console.log(each.name);
  }
}
  
for(let each of students){
  console.log(each.name+" "+ "age"+" "+"is"+" "+each.age);
  }