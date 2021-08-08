var firebaseConfig = {
    apiKey: "AIzaSyBMgHt8XluHFKm54J312UstmiW5-pQUpZ4",
    authDomain: "kwitterpro-25f2b.firebaseapp.com",
    databaseURL: "https://kwitterpro-25f2b-default-rtdb.firebaseio.com",
    projectId: "kwitterpro-25f2b",
    storageBucket: "kwitterpro-25f2b.appspot.com",
    messagingSenderId: "820417424335",
    appId: "1:820417424335:web:eb50f614e3f3a68376c0ba"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function logout(){
    window.location = "index.html"         
    localStorage.removeItem("Username")
}

function addRoom(){
    roomname  = document.getElementById("Roomname").value;
    localStorage.setItem("Room",roomname)
    firebase
      .database()
      .ref("/")
      .child(roomname)
      .update({ purpose: "adding user" });
      window.location = "kwitter_room.html"
 }
 getData()
 console.log("addRoom");

 function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        row = " <div id='"+Room_names+"' onclick='getMessages(this.id)'> "+Room_names+"</div>"
        document.getElementById("output").innerHTML += row
      });
    });
console.log("getData");}

function getMessages(Room){
  localStorage.setItem("Roomname", Room)
  window.location = "kwitter_room.html"
}