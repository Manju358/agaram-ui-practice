let resume = {
    personal_details: {},
    skills: [],
    hobbies: [],
    languagesknown: [],
    education: [],
    project: [],
    certification: [],
    workexperience: []

};
       
    
               // Import the functions you need from the SDKs you need
               import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
               import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
               // TODO: Add SDKs for Firebase products that you want to use             
               // https://firebase.google.com/docs/web/setup#available-libraries
       
               // Your web app's Firebase configuration
               const firebaseConfig = {
                   apiKey: "AIzaSyD1jw1R-bTcylHnFyI4zoEQZ3Hos9PzlzY",
                   authDomain: "resume-builder-23447.firebaseapp.com",
                   projectId: "resume-builder-23447",
                   storageBucket: "resume-builder-23447.firebasestorage.app",
                   messagingSenderId: "940362715277",
                   appId: "1:940362715277:web:257d2ba3c5365df3f7d2c4"
               };
       
               // Initialize Firebase
               const app = initializeApp(firebaseConfig);
       
               // get ref to database service 
               const db = getDatabase(app);
               document.getElementById("submit").addEventListener('click', function (e) {
                   e.preventDefault();
                   set(ref(db, 'user/' + document.getElementById("inputName").value),
                       {
                           Name: document.getElementById("inputName").value,
                           Objective: document.getElementById("objective").value,
                           Place: document.getElementById("place").value,
                           Date: document.getElementById("date").value,
                           education:JSON.stringify(resume.education),
                           certification:JSON.stringify(resume.certification),
                           project:JSON.stringify(resume.project),
                           workexperience:JSON.stringify(resume.workexperience),
                           skills:JSON.stringify(resume.skills),
                           hobbies:JSON.stringify(resume.hobbies),
                           languagesknown:JSON.stringify(resume.languagesknown), 
                           personal_details:JSON.stringify(resume.personal_details),
                       });
                   alert("Success");
       
               }) 










       

        function addValue(e, key, p_key) {
            if (p_key) {
                resume[p_key][key] = e.value; // resume.personal_details.father_name = "V"
            } else {
                resume[key] = e.value;
            }
            display_output();
        }  window.addValue=addValue 
        function addMultiValue(p_key, id, key1, key2, key3, key4, key5) {
            let newObj = {};
            if (key5) {
                newObj[key1] = document.getElementById(key1).value;
                newObj[key2] = document.getElementById(key2).value;
                newObj[key3] = document.getElementById(key3).value;
                newObj[key4] = document.getElementById(key4).value;
                newObj[key5] = document.getElementById(key5).value;
                console.log(newObj);
                resume[p_key].push(newObj);
                document.getElementById(key1).value = "";
                document.getElementById(key2).value = "";
                document.getElementById(key3).value = "";
                document.getElementById(key4).value = "";
                document.getElementById(key5).value = "";
            }
            
            else if (key4) {
                newObj[key1] = document.getElementById(key1).value;
                newObj[key2] = document.getElementById(key2).value;
                newObj[key3] = document.getElementById(key3).value;
                newObj[key4] = document.getElementById(key4).value;
                resume[p_key].push(newObj);
                document.getElementById(key1).value = "";
                document.getElementById(key2).value = "";
                document.getElementById(key3).value = "";
                document.getElementById(key4).value = "";
            }
            else if (key3) {
                newObj[key1] = document.getElementById(key1).value;
                newObj[key2] = document.getElementById(key2).value;
                newObj[key3] = document.getElementById(key3).value;
                resume[p_key].push(newObj);
                document.getElementById(key1).value = "";
                document.getElementById(key2).value = "";
                document.getElementById(key3).value = "";

            }

            display_output();
        }
        window.addMultiValue=addMultiValue  
        
        function addArrayValue(key) {
            let value = document.getElementById(key).value;
            resume[key].push(value)
           
            document.getElementById(key).value = "";
            display_output()
        }  window.addArrayValue=addArrayValue 
        
        function display_output() {
            document.getElementById('output').innerHTML = JSON.stringify(resume);
        }

   
  