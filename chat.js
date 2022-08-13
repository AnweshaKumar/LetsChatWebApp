// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCfv_hE8vNbwp0bV89nSxctRcXQQ1Ri1wA",
    authDomain: "lets-chattt-3507c.firebaseapp.com",
    projectId: "lets-chattt-3507c",
    storageBucket: "lets-chattt-3507c.appspot.com",
    messagingSenderId: "997415815879",
    appId: "1:997415815879:web:1a8bc65d704a6f50cccce2",
    measurementId: "G-JNZGWESGNQ"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



