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
  let array=[];
  for(let each of students){
  
    if(each.age>=25){
  
   array.push(each.name);
  }
  }
  console.log(array);
  
  for(let each of students){
   
    if(each.age>=25){
      each.eligible=true;
    
      }
    else{
      each.eligible=false;
      }
   
    } 
  console.log(students);
  
  // displays the largest integer among array of integers
  
  let numbers=[2,3,5,1,0,-7,89,100,30,70];
  let larger=0;
  for(let num of numbers){
    if(num>larger){
      larger=num;
    }
  }
  console.log(larger);
  // alert('1');
  
  // find the sign of the product of all numbers in array
  
  let arra=[1,2,3,-4,5,-6,-7];
  let tot=0;
  for (let a of arra){
    tot=tot+a;
  }
  if(tot>=0){
    console.log("sign is +");
  //   alert("sign is +");
  }else{
  console.log("sign is -");
  //   alert("sign is -");
  }
  
  // sort all numbers in array revers order
  
  let sett=[2,3,4];
  let temp=[];
  for(let i in sett){
   
  
  temp.push(sett[sett.length-(parseInt(i)+1)]);
   
  } 
  // console.log(temp);
  sett=temp;
  console.log(sett);
  
     