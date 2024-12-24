
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase,set, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
const appSetting = {
  dataBaseUrl: "https://practice-87cbd-default-rtdb.firebaseio.com/"
};



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmvlqzPoDYhsny_MLSOcqofHXQ6ITqv3w",
  authDomain: "practice-87cbd.firebaseapp.com",
  projectId: "practice-87cbd",
  storageBucket: "practice-87cbd.firebasestorage.app",
  messagingSenderId: "810892700970",
  appId: "1:810892700970:web:130d835ed5b854b56c0253"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

const starCountRef = ref(db, 'user/');


function createData() {
  push(starCountRef,
    {
      Name: document.getElementById("name").value,
      Age: document.getElementById("age").value,


    });
  alert("saved");
}
window.createData = createData;


function display() {
 
  onValue(starCountRef, (snapshot) => {
    let trs = "";
    if (snapshot.exists()) {
    
      const data = snapshot.val();
      let userArray = Object.entries(data);

      let index = 1;
      for (let each of userArray) {
// console.log(each);
        trs = trs + `<tr>
                    <td>${index}</td>
                    <td>${each[1].Name}</td>
                    <td>${each[1].Age}</td>
                    <td>
                       <button onclick="deleteData('${each[0]}')">            
                          Delete
                        </button>
                        <button onclick='editOption("${each[0]}",${JSON.stringify(each[1])})'>
                          Edit
                        </button>
                    </td>
                </tr>`
        index = index + 1;
      
      }
      }
      
       document.getElementById("dataTable").innerHTML = trs;
    });
  
  }



window.display = display;   

display()

function deleteData(id){
  alert(id);
  // console.log(id);
  let data = ref(db,`user/${id}`);
  remove(data);

}
window.deleteData = deleteData;


function editOption(id,data){
console.log(data);
document.getElementById("update_id").value = id;
document.getElementById("update_name").value = data.Name;
document.getElementById("update_age").value = data.Age;



}
window.editOption = editOption;
function updateData(){
  let id = document.getElementById('update_id').value;
  let name = document.getElementById('update_name').value;
  let age = document.getElementById('update_age').value
  set(ref(db,'user/'+id ),{
    Name:name,
    Age:age,

  });
  

}
window.updateData = updateData;
display()



