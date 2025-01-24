// advanced java script features
// let, const, var
// let 

for(let i=0; i<5;i++){
    console.log("Result1:"+ i);
}
console.log("result2:"+i);

// var
for(var i=0; i<5;i++){
    console.log("Result1:"+ i);
}
console.log("result2:"+i);

// variable hoisting

console.log(a);
var a=10;

console.log(ff);
let ff=10;

// function hoisting
test()
function test(){
    console.log("test");
}

// const

const d=10;
d=20;
console.log(d);

// default parameter

function add(n1,n2,n3=0,n4=0){
    console.log(n1+n2+n3+n4);
}
add(2,3,4,5)
add(2,3)
add(2,3,4)

// Rest Parameter  (object into array)

function test(...list){
    console.log(list);
}
test(1,2,3,4,5,6,7,8,9,10)

// spread operator (into single array)

let list1 = [1,2,3,4]
let list2 = [5,6,7,8]
let list3 = [9,10,...list1]
console.log(list3);

// object key and assign value variable same

let age =10;
let name="manju";
let place="nagercoil";
let object = {
    age,
    name,
    place
}

// object destructuring
let details = {
      name1:"manju",
      place1:"Nagercoil",
      education:"B.E"
    }
    let{name1,place1,education}= details;
    console.log(name1);
    // or
    let {name1:f_name,place1:p_lace,education:edu} = details;
    console.log(name1);
    console.log(f_name);
    console.log(p_lace);
    console.log(edu);

    // Array destructuring
    let colors = ["red","blue","yellow"]
         let[h,k,l] = colors;
            console.log(l);

// Arrow function 

const tests =() =>{
  console.log("test function")
}
tests()

// ...>
let test1 = (a,b) =>{
   console.log("test function trig",a,b)
}
test1(2,3)

// normal function

let detail = {
  f_nam:"Manjula",
  l_name:"r",
  full_nam:function(){
    return this. f_nam+" "+ this.l_name
  }
}
console.log(detail.full_nam());

//  arrow function

let detail1 = {
  f_nam:"Manjula",
  l_name:"r",
  full_nam:() =>{
    return this. f_nam+" "+ this.l_name
  }
}
console.log(detail1.full_nam());

// filter

 let colors1 = ["red","blue","green","yellow","black"]
// let new_colors = colors1.filter((color)=>color!='green')
// console.log(new_colors);
// or
 let new_colors = colors1.filter((color)=>{
  return color!="red" && color!="black"
})
console.log(new_colors);

// Map  
let colors2 = ["red","blue","green","yellow","black"]
let new_colors1 = colors2.map((color)=>{
  return color+1
})
console.log(new_colors1);

// map
let colors3 = ["red","blue","green","yellow","black"]
let new_color = colors2.map((v,i)=>{
  console.log(v);
  console.log(i);
  
})

// // for each

let colors4 = ["red","blue","green","yellow","black"]
let tes =[];
colors4.forEach((color,i) =>{
  if(color!='red'){
    tes.push(color);
//     tes.push(i);
  }
})
  console.log(tes);

  let colors2 = ["red","blue","green","yellow","black"]
let new_colors1 = colors2.map((color)=>{
  if(color=="red")
  return color;
})
console.log(new_colors1);

let details=[{
  id:"1",
  name:"manju"
},
             {
               id:"2",
              name:"ramya"
             },
             {
               id:"3",
              name:"deva"
             }
             ];
let test=[];  

   details.forEach((det) => {
      if(det.name!="manju"){
      test.push(det.name);
      }
})
console.log(test);

// ......>
  

//       let new_details = details.map((each)=>{
//         if(each.name!="manju"){
//           return each.id
//         }
//       });  
//     console.log( new_details);
// ....>


//  let new_details = details.map((each)=>{
       
//           return each.id
        
//       });  
//     console.log( new_details);
// .....>


//  let new_details = details.filter((each)=>{
       
//           return each.id!=1 && each.name!="ramya"
        
//       });  
//     console.log( new_details);

// for Each
let colors=["red","pink","blue","black","green"];
let list = colors.map((each) => each=='pink'? `I like ${each}`:`I dont like ${each}`);
console.log(list);

// ex:2
let colorse=["red","pink","blue","black","green"];
let x=[];
colorse.forEach((each) => {
  if(each=="pink"){
    x.push("I like"+" "+each+" "+"color");
  }
  else{
     x.push("I don't like"+" "+each+" "+"color");
  }
});
console.log(x);




// terminal operator

let a=2;
let output = a>3?'a is greater':'a is lesser';
console.log(output);