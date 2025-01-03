 let resume = {
    name:"",
    email:"",
    personaldetails:{},
    skills:[],
    hobbies:[],
    education:[],
    project:[]
};


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getDatabase,ref,push,onValue,remove,set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBCJQuXa9813jBDOZmWfpPrG3xt5THZxf4",
    authDomain: "resumeexer.firebaseapp.com",
    databaseURL: "https://resumeexer-default-rtdb.firebaseio.com",
    projectId: "resumeexer",
    storageBucket: "resumeexer.firebasestorage.app",
    messagingSenderId: "1086979465534",
    appId: "1:1086979465534:web:ac0c4083d36271c6070c6f"
  };

 


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get ref to database service 
const tabname = 'user/';
const db = getDatabase(app);
const initialDb = ref(db, 'user/');

  function createResume(){
    push(initialDb ,{
        name: resume?.name,
        email: resume?.email,
        personaldetails:JSON.stringify( resume?.personaldetails),
        skills:JSON.stringify( resume?.skills),
        hobbies:JSON.stringify(resume?.hobbies),
        education:JSON.stringify( resume?.education),
        project:JSON.stringify(resume?.project)
    });
    alert("submiited");
    window.location.href ="list.html"
   }
  window.createResume = createResume;

 function display(){
    onValue(initialDb, (snapshot) => {
                let trs = "";
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    let userArray = Object.entries(data);
                    let index =1;
                    for(let each of userArray){
                        trs = trs+`<tr>
                        <td>${index}</td>
                        <td>${each[1].name}</td>
                        <td>${each[1].email}</td>
                         <td>${each[1].skills}</td>
                        <td>${JSON.parse(each[1].personaldetails).fathername}</td>
                       
                        <td> 
                          <button onclick="deleteOption('${each[0]}')">Delete</button>
                          <button onclick='editOption("${each[0]}",${JSON.stringify(each[1])})'>Edit</button>
                        </tr>`
                        index= index+1;


                        
                    }
                }
                    document.getElementById("tbbody").innerHTML = trs;
                });
            }
           window.display = display;
           function deleteOption(id){
            alert("are u sure");
            let data = ref(db, `user/${id}`);
            remove(data);
               }
               window.deleteOption = deleteOption;

           function editOption(id,data){
              const{fathername,nationality} = JSON.parse(data.personaldetails);
                document.getElementById("updatename").value = data.name;
                document.getElementById("updateid").value = id;
                document.getElementById("updateemail").value = data.email;
                document.getElementById("updatefathername").value = fathername;
                document.getElementById("updatenationality").value = nationality;

                resume.name = data.name;
                resume.email = data.email;
                resume.personaldetails.fathername = fathername;
                resume.personaldetails.nationality = nationality;
                let skills = JSON.parse(data.skills);
                resume.skills = skills;
                displayNew(resume.skills,"listed");
                let hobbies =JSON.parse(data.hobbies);
                resume.hobbies = hobbies;
                displayNew(resume.hobbies,"list");



           }    
          window.editOption = editOption;

          function updateResume(){
            let id = document.getElementById('updateid').value;
            let name = resume.name;
            let email = resume.email;
            let fathername = resume.personaldetails.fathername;
            let nationality =  resume.personaldetails.nationality;
            let p_details = {
                fathername:fathername,
                nationality:nationality,
            }
            let skills =  resume.skills;
            let hobbies =  resume.hobbies;
             set(ref(db,'user/'+id),
              {
                name: name,
                email: email,
                personaldetails: JSON.stringify(p_details),
                skills: JSON.stringify(skills),
                hobbies:JSON.stringify(hobbies),

             });


          }
          window.updateResume = updateResume;
          
          function displayNew(list,id){
            let ul="";
            for(let A of list){
                ul = ul+`<li>
                ${A}
                </li> `
               
            }
            document.getElementById(id).innerHTML = ul;
          }
 
    
       




  function addValue(e, key, p_key){
    if(p_key) {
        resume[p_key][key] = e.value;

    }
    else {
        resume[key] = e.value;
    }
    display_output(); 
}
window.addValue = addValue;

function addValues(key){
     let value = document.getElementById(key).value;
          resume[key].push(value);

    document.getElementById(key).value = "";

    display_output(); 
    if(key =="skills"){
        displayNew(resume.skills,'listed');
       }else if(key=="hobbies"){
        displayNew(resume.hobbies,'list');
}
}

window.addValues = addValues;

function addMultiValue(p_key,key1,key2,key3,key4){
    let newObj={};
    if (key4){
        newObj[key1] = document.getElementById(key1).value;
        newObj[key2] = document.getElementById(key2).value;

        newObj[key3] = document.getElementById(key3).value;

        newObj[key4] = document.getElementById(key4).value;
        resume[p_key].push(newObj);
        document.getElementById(key1).value ="";
        document.getElementById(key2).value ="";
        document.getElementById(key3).value ="";
        document.getElementById(key4).value ="";



    }else if(key3) {
        newObj[key1] = document.getElementById(key1).value;
        newObj[key2] = document.getElementById(key2).value;

        newObj[key3] = document.getElementById(key3).value;
        resume[p_key].push(newObj);
        document.getElementById(key1).value ="";
        document.getElementById(key2).value ="";
        document.getElementById(key3).value ="";

    }
display_output();
}
window.addMultiValue = addMultiValue;


function display_output() {
    document.getElementById('output').innerHTML = JSON.stringify(resume);
}
   
 
