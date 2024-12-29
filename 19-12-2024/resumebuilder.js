let resume = {
    Name: "",
    Objective: "",
    Place: "",
    Date: "",
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
import { getDatabase, onValue, remove, push, ref,  set, get, child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
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
const tabname = 'user/';
const db = getDatabase(app);
const initialDb = ref(db, tabname);

function createResume() {
    push(initialDb, 
        {
            Name: resume?.Name,
            Objective: resume?.Objective,
            Place: resume?.Place,
            Date: resume?.Date,
            education: JSON.stringify(resume?.education),
            certification: JSON.stringify(resume?.certification),
            project: JSON.stringify(resume?.project),
            workexperience: JSON.stringify(resume?.workexperience),
            skills: JSON.stringify(resume?.skills),
            hobbies: JSON.stringify(resume?.hobbies),
            languagesknown: JSON.stringify(resume?.languagesknown),
            personal_details: JSON.stringify(resume?.personal_details),
        });
    alert("Success");
    window.location.href = "list.html";
}
window.createResume = createResume;
function addValue(e, key, p_key) {
    if (p_key) {
        resume[p_key][key] = e.value; // resume.personal_details.father_name = "V"
    } else {
        resume[key] = e.value;
    }
    display_output();
}
window.addValue = addValue;

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
window.addMultiValue = addMultiValue

function addArrayValue(key) {
    let value = document.getElementById(key).value;
    resume[key].push(value)

    document.getElementById(key).value = "";
    display_output()
} window.addArrayValue = addArrayValue

function display_output() {
    document.getElementById('output').innerHTML = JSON.stringify(resume);
}

function display() {
    let list = [];
    onValue(initialDb, (snapshot) => {
        let trs = "";
        if (snapshot.exists()) {
            const data = snapshot.val();
            let userArray = Object.entries(data);

            let index = 1;
            for (let each of userArray) {

                trs = trs + `<tr>
                    <td>${index}</td>
                    <td>${each[1].Name}</td>
                    <td>${JSON.parse(each[1].personal_details).email}</td>
                   
                  
                    <td>${each[1].Objective}</td>
                     <td>${each[1].Date}</td>
                      <td>${each[1].Place}</td> 
                      
                   
                    <td>
                       <button onclick="deleteOption('${each[0]}')">            
                          Delete
                     </button>
                        <button onclick='editData("${each[0]}",${JSON.stringify(each[1])})'>
                          Edit
                        </button>
                    </td>
                </tr>`
                index = index + 1;
                // list.push(each[2]);
            }
            
        }
        // console.log(list);
        document.getElementById("tbbody").innerHTML = trs;
    });
}


window.display = display;

function deleteOption(id) {
    alert(1);
    let data = ref(db, `${tabname}${id}`);
    remove(data);
}
window.deleteOption = deleteOption;

function editData(id,data) {
    // console.log(data)
    const {email,father_name,mother_name,nationality,phone,address,gender} = JSON.parse(data.personal_details);  
    document.getElementById('update_name').value = data.Name;
    document.getElementById('update_id').value = id;
    document.getElementById('update_objective').value = data.Objective;
    document.getElementById('update_date').value = data.Date;
    document.getElementById('update_place').value = data.Place;
    document.getElementById("update_email").value = email;
    document.getElementById("update_fathername").value = father_name;
    document.getElementById("update_mothername").value = mother_name;
    document.getElementById("update_nationality").value = nationality;
    document.getElementById("update_phonenumber").value = phone;
    document.getElementById("update_address").value = address;
    // document.getElementById("update_dob").value = dob;
   if(gender == "Male"){
    document.getElementById("update_gender_male").checked = true;
   }else{
    document.getElementById("update_gender_female").checked = true;
   }
   
    resume.Name = data.Name;
    resume.Objective = data.Objective;
    resume.Data = data.Date;
    resume.Place = data.Place;

    resume.personal_details.email = data.personal_details.email;
    resume.personal_details.father_name = data.personal_details.father_name;
    resume.personal_details.mother_name = data.personal_details.mother_name;
    resume.personal_details.nationality = data.personal_details.nationality;
    resume.personal_details.phone = data.personal_details.phone;
    resume.personal_details.address = data.personal_details.address;
    resume.personal_details.gender = data.personal_details.gender;
    // resume.personal_details.dob = data.personal_details.dob;
   
    



} 
window.editData = editData;



function updateResume(){

    let Name = resume.Name;
   
    let id = document.getElementById('update_id').value;
    let Objective = resume.Objective;
    let Date = resume.Data;
    let Place = resume.Place;
    let email = resume.personal_details.email;
    let father_name =  resume.personal_details.father_name;
    let mother_name =  resume.personal_details.mother_name;
    // let dob = resume.personal_details.dob;
    let nationality =  resume.personal_details.nationality;
   let phone = resume.personal_details.phone;
   let address =  resume.personal_details.address;
   let gender = resume.personal_details.gender;
    let p_details = {
        email:email,
        father_name:father_name,
        mother_name:mother_name,
        nationality:nationality,
        phone:phone,
        address:address,
        gender:gender,
        // dob:dob,




    }


    set(ref(db,'user/'+id), {
        Name: Name,
            Objective: Objective,
            Date: Date,
            Place: Place,
            education:"",
            certification: "",
            project: "",
            workexperience: "",
            skills: "",
            hobbies: "",
            languagesknown:"",
            personal_details: JSON.stringify(p_details)
       

    

});

}
window.updateResume = updateResume;


 
  

