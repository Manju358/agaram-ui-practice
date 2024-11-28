let details={
    name:"Agaram",
    age:1,
    skills:["phyton","React","mysql"],
    Batches:[{
      name:"batch1",
      year:2023,
      students:[
        {name:"bhuvana",age:22,skills:["phyton","AWS"]},
        {name:"renisha",age:21,skills:["HTML","ES6"]},
        {name:"Azion",age:20,skills:["js","mysql"]}
        ]
      
    },
    {
      name:"batch2",
      year:2024,
      students:[
        {name:"Amirtha",age:20,skills:["css","Data structure"]},
          ]
    }
  ]
  }
  
  let tmp1 = details.Batches[0].students;
  console.log(tmp1[0].skills[0]+","+tmp1[0].skills[1]+","+tmp1[1].skills[0]+","+tmp1[1].skills[1]);

  if(details.Batches[0].students[0].age==20){
    console.log(details.Batches[0].students[0].name)
  }

if(details.Batches[0].students[1].age==20){
    console.log(details.Batches[0].students[1].name)
  }

if(details.Batches[0].students[2].age==20){
    console.log(details.Batches[0].students[2].name)
  }

if(details.Batches[1].students[0].age==20){
    console.log(details.Batches[1].students[0].name)
  }

  details.Batches[0].students[1].skills.push("java");
console.log(details.Batches[0].students[1].skills);

details.Batches.push({
    name:"batch3",
    year:2025,
    students:[
        {name:"meenu",age:22,skills:["dhfh","AfhfhWS"]},
        {name:"mithu",age:21,skills:["HTffhML","dfh"]},
        {name:"micky",age:20,skills:["gh","dfh"]}
        ]
  }
  );
  console.log(details.Batches[2]);
  
  
  details.Batches[2].students[2].name="meena";
  console.log(details.Batches[2].students[2]);
  
  // x.name = "meena"
  
  // console.log(details.Batches)
  

  