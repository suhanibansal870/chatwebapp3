var firebaseConfig = {
    apiKey: "AIzaSyDk-YijPdFnarGEmVA89ZYmTpX93KZbtSE",
    authDomain: "signing-up-22ed0.firebaseapp.com",
    databaseURL: "https://signing-up-22ed0-default-rtdb.firebaseio.com",
    projectId: "signing-up-22ed0",
    storageBucket: "signing-up-22ed0.appspot.com",
    messagingSenderId: "767041250277",
    appId: "1:767041250277:web:658369ca8b8018fed3050c",
    measurementId: "G-THE2EN89NS"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome, " + username;
document.getElementById("welcome_user_name").style.textDecoration = "none";
document.getElementById("welcome_user_name").style.fontFamily = "Quicksand";

function addroom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_room.html";
}

function getData() {
    firebase.database().ref("/").on('value',
    function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
        Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}

getData();

function rediectToRoomName(name){
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout(){
    window.location = "index.html";
}
