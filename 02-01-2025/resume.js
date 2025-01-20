let resume = {
    name:"",
    objective:"",
    personaldetails:{},
    skills:[],
    hobbies:[],
    education:[],
    project:[],
}
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getDatabase,set,ref,push,onValue,remove } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  
  const firebaseConfig = {
    apiKey: "AIzaSyC77ijXTspewEuxGFUzdQ_sVwV8Kn3NKtM",
    authDomain: "resumebuild-85ac7.firebaseapp.com",
    projectId: "resumebuild-85ac7",
    storageBucket: "resumebuild-85ac7.firebasestorage.app",
    messagingSenderId: "414434843617",
    appId: "1:414434843617:web:8fa9056b40a7e8447550a0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const initialdb = ref(db, 'user/');
  function createResume(){
    push(initialdb, {
        name:resume?.name,
        objective:resume?.objective,
        personaldetails:JSON.stringify(resume?.personaldetails),
        skills:JSON.stringify(resume?.skills),
        hobbies:JSON.stringify(resume?.hobbies),
        education:JSON.stringify(resume?.education),
        project:JSON.stringify(resume?.project),

    });
  alert("submitted");
  window.location.href = "listed.html";

  }
  window.createResume  = createResume;

  function display(){
    onValue(initialdb, (snapshot) => {
                   let trs = "";
                   if (snapshot.exists()) {
                       const data = snapshot.val();
                       let userArray = Object.entries(data);
                        let index=1;
                        for(let each of userArray){
                          trs = trs+`<tr>
                          <td>${index}</td>
                          <td>${each[1].name}</td>
                          <td>${each[1].objective}</td>
                          <td>${JSON.parse(each[1].personaldetails).fathername}</td>
                          <td>${each[1].skills}
                          <td>
                            <button onclick="deleteOption('${each[0]}')">Delete</button>
                            <button onclick='editOption("${each[0]}",${JSON.stringify(each[1])})'>Edit</button>

                          </td>
                         
                          `
                          index = index+1;
                        }
                      }
                      document.getElementById("tbbody").innerHTML = trs;
    });
  }
  window. display = display;

  function deleteOption(id){
    alert("are u sure");
    let data = ref(db, `user/${id}`);
    remove(data);
  }
  window. deleteOption = deleteOption;

  function editOption(id,data){
    const{email,fathername} = JSON.parse(data.personaldetails);
    document.getElementById("updated_id").value = id;
    document.getElementById("updatedname").value = data.name;
    document.getElementById("updatedobjective").value = data.objective;
    document.getElementById("updatedemail").value = email;
    document.getElementById("updatedfathername").value =fathername;
   

    resume.name = data.name;
    resume.objective = data.objective;
    resume.personaldetails.fathername = fathername;
    resume.personaldetails.email = email;

    let skills = JSON.parse(data.skills);
    resume.skills = skills;
    displayNew(resume.skills,"list");
    let hobbies = JSON.parse(data.hobbies);
    resume.hobbies = hobbies;
    displayNew(resume.hobbies,"list1");

    let education = JSON.parse(data.education);
    resume.education = education;
    displayEducation();

    let project = JSON.parse(data.project);
    resume.project = project;
    displayProject();
  }
 window. editOption = editOption;

 function updateResume(){
     let id =  document.getElementById("updated_id").value;
     let name = resume.name;
     let objective = resume.objective;
     let fathername =  resume.personaldetails.fathername;
     let email = resume.personaldetails.email;
     let p_details = {
      fathername:fathername,
      email:email
     }
     let skills = resume.skills;
     let hobbies = resume.hobbies;
     let education = resume.education;
     let project = resume.project;
      set(ref(db,'user/'+id),{
        name: name,
        objective: objective,
        personaldetails: JSON.stringify(p_details),
        skills:JSON.stringify(skills),
        hobbies:JSON.stringify(hobbies),
        education:JSON.stringify(education),
        project:JSON.stringify(project)
      });
 }
 window. updateResume = updateResume;
 function displayNew(list,id){
  let ul="";
  for(let A of list){
    ul = ul+`<li>
     ${A}
     </li> `
   
  }
  document.getElementById(id).innerHTML = ul;
 }
 

  function addvalue(e, key, p_key ){
    if(p_key){
        resume[p_key][key] = e.value;
    }else{
        resume[key] = e.value;
    }
    display_output();
  }
  window.addvalue  = addvalue;
  function display_output(){
    document.getElementById("output").innerHTML  = JSON.stringify(resume);
  }

  function addArrayValue(key){
        let value = document.getElementById(key).value;
        resume[key].push(value);
          document.getElementById(key).value =""; 
          
          if(key == "skills"){
            displayNew(resume.skills,"list");
          } else if(key == "hobbies"){
            displayNew(resume.hobbies,"list1");
          }
  }
window.addArrayValue  = addArrayValue;

function addMultiValue(p_key,key1,key2,key3,key4){
let newObj={};
  if(key4){
    newObj[key1] = document.getElementById(key1).value;
    newObj[key2] = document.getElementById(key2).value;
    newObj[key3] = document.getElementById(key3).value;
    newObj[key4] = document.getElementById(key4).value;
    resume[p_key].push(newObj);
    document.getElementById(key1).value ="";
    document.getElementById(key2).value ="";
    document.getElementById(key3).value ="";
    document.getElementById(key4).value ="";
  }
  else if(key3){
    newObj[key1] = document.getElementById(key1).value;
    newObj[key2] = document.getElementById(key2).value;
    newObj[key3] = document.getElementById(key3).value;
    resume[p_key].push(newObj);
    document.getElementById(key1).value ="";
    document.getElementById(key2).value ="";
    document.getElementById(key3).value ="";
  }
display_output();
 displayEducation();
 displayProject();   
    


}
window.addMultiValue = addMultiValue;

function displayEducation(){
  let tr = "";
  for(let B of resume.education){
    tr = tr+`<tr>
    <td>${B.coursename}</td>
    <td>${B.courseyear}</td>
    <td>${B.coursepercentage}</td>
    <td>${B.courseinstitute}<td>
    `
  }
  document.getElementById("tabbody").innerHTML = tr;
}

function displayProject(){
  let tr ="";
  for(let c of resume.project){
  tr = tr+`<tr>
    <td>${c.project_title}</td>
    <td>${c.project_institute}</td>
    <td>${c.project_year}</td>
    
    `
  }
  document.getElementById("tablebody").innerHTML = tr;

}