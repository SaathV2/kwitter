const config = {
      apiKey: "AIzaSyDgzaBjY0TmMIf119Tj0xnKlZO2JRoiLLs",
      authDomain: "kwitterrr-87e22.firebaseapp.com",
      databaseURL: "https://kwitterrr-87e22-default-rtdb.firebaseio.com",
      projectId: "kwitterrr-87e22",
      storageBucket: "kwitterrr-87e22.appspot.com",
      messagingSenderId: "878210531888",
      appId: "1:878210531888:web:43f0b95a4db5f3bb96a3f5",
      measurementId: "G-Q7K2LKZE7F"
    };

    firebase.initializeApp(config);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
