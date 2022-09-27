var firebaseConfig = {
    apiKey: "AIzaSyDJd-pMdCSi9kSBjuyVb19hSyaKMEBn14o",
  authDomain: "kilogram-25967.firebaseapp.com",
  databaseURL: "https://kilogram-25967-default-rtdb.firebaseio.com",
  projectId: "kilogram-25967",
  storageBucket: "kilogram-25967.appspot.com",
  messagingSenderId: "993570718942",
  appId: "1:993570718942:web:51116ffa7309d1a732ae4f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");

document.getElementById("un").innerHTML="Welcome "+user_name ;

function addroom(){
    room_name=document.getElementById("Add_Room").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room"
    });
    localStorage.setItem("room_name",room_name)

}
  
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
  
      });
    });
  
  }

getData();