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
import { getDatabase, onValue, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
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
const initialDb = ref(db, 'user/');



function display() {
    let list = [];
    onValue(initialDb, (snapshot) => {
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
                        <button>
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
    });
// console.log(list);
    
}

window.display = display;  


display();




