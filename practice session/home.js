
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getDatabase,push,ref,onValue,set,remove } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
  const appSetting = {
  dataBaseURL:"https://exercise-8f849-default-rtdb.firebaseio.com/"
  };
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBeytiR788YFsw7Pi2mWdHhYP0NJOnPf80",
    authDomain: "exercise-8f849.firebaseapp.com",
    projectId: "exercise-8f849",
    storageBucket: "exercise-8f849.firebasestorage.app",
    messagingSenderId: "876434610309",
    appId: "1:876434610309:web:7df58e920fea86f6aaf1ec"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase();
  const userList =ref(db,'user/')
  
function createData(){
 push(userList,
    {
      Name:document.getElementById("name").value
 });
 alert("save");
}
window.createData = createData;

function display(){
    onValue(userList, (snapshot) => {
        let trs = "";
        const data = snapshot.val();
        let userArray = Object.entries(data);
        let index = 1;
        for(let each of userArray){
            trs = trs+`
            <tr>
                <td>${index}</td>
                <td>${each[1].Name}</td>
                <td>
                    <button onclick="deleteData('${each[0]}')">Delete</button>
                    <button onclick='editData("${each[0]}",${JSON.stringify(each[1])})'>Edit</button>
                </td>
            </tr>`
            index = index+1;
            
        }
            document.getElementById("tblbody").innerHTML=trs;
      
      });
}
window.display = display()
display()

function deleteData(id){
    alert(id);
    let data = ref(db,`user/${id}`);
    remove(data);
}
window.deleteData=deleteData

function editData(id,data){
    console.log(data);
 document.getElementById("update_id").value= id;
document.getElementById("update_name").value=data.Name;
}
window.editData = editData




function updateData(){
    let id =  document.getElementById("update_id").value;
    let name =  document.getElementById("update_name").value
    set(ref(db,'user/'+id),{
        Name:name,
    });

}
window.updateData = updateData;
display()

