var firebaseConfig = {
      apiKey: "AIzaSyBEa9aaLy2-ARqVRSsMGWzUvjurnuma6lc",
      authDomain: "kwitter-6dd29.firebaseapp.com",
      databaseURL: "https://kwitter-6dd29-default-rtdb.firebaseio.com",
      projectId: "kwitter-6dd29",
      storageBucket: "kwitter-6dd29.appspot.com",
      messagingSenderId: "449113452603",
      appId: "1:449113452603:web:3716e994f44b1184beac1e"
    };
    firebase.initializeApp(firebaseConfig);
var user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name;
function addRoom(){
      var room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
       var row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+= row;

      //Start code

      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
