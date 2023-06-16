const firebaseConfig = {
    apiKey: "AIzaSyAKObNYxNhleXKHelAvOxcF957rEm1XAz4",
    authDomain: "kwitter-f11cf.firebaseapp.com",
    databaseURL: "https://kwitter-f11cf-default-rtdb.firebaseio.com",
    projectId: "kwitter-f11cf",
    storageBucket: "kwitter-f11cf.appspot.com",
    messagingSenderId: "69059248241",
    appId: "1:69059248241:web:380b2e1d1c7a5784d69bd0",
    measurementId: "G-6J9MSYDH26"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'"+ Room_names +"</div><hr>";
      document.getElementsById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";

}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}