let resume = {
    Name:[],
    Objective:[],
    Place:[],
    Date:[],
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
import { getDatabase, onValue, remove, push, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
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
    // alert("Success");
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
        if(snapshot.exists()){
        const data = snapshot.val();
        let userArray = Object.entries(data);
        let trs = "";
        let index = 1;
        for (let each of userArray) {
           
            trs = trs + `<tr>
                    <td>${index}</td>
                    <td>${each[1].Name}</td>
                    <td>${JSON.parse(each[1].personal_details).email}</td>
                    <td>
                       <button onclick="deleteOption('${each[0]}')">            
                          Delete
                        </button>
                        <button>
                          Edit
                        </button>
                    </td>
                </tr>`
            index = index + 1;
            // list.push(each[2]);
        }
        document.getElementById("tbbody").innerHTML = trs;
    }
    // console.log(list);
    });
}


window.display = display;


display();
function deleteOption(id){
    alert(1);
    let data = ref(db,`${tabname}${id}`);
    remove(data);
}
window.deleteOption = deleteOption;
