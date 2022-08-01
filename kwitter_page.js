//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBZ4Vi9yNMSZqngdu-DViQ2Z3rpNYtN6Ik",
      authDomain: "kwitter-kitty.firebaseapp.com",
      databaseURL: "https://kwitter-kitty-default-rtdb.firebaseio.com",
      projectId: "kwitter-kitty",
      storageBucket: "kwitter-kitty.appspot.com",
      messagingSenderId: "328859670636",
      appId: "1:328859670636:web:6dd52e70928fac2edb2049",
      measurementId: "G-SBYPCCTHTS"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0,

      });

      document.getElementById("msg").value = "";
}

