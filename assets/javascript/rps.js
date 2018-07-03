//initialize firebase
var config = {
    apiKey: "AIzaSyDmoCo_jTxk5bBjq26MnbQ41ekzZh0iPtI",
    authDomain: "first-project-1d33c.firebaseapp.com",
    databaseURL: "https://first-project-1d33c.firebaseio.com",
    projectId: "first-project-1d33c",
    storageBucket: "first-project-1d33c.appspot.com",
    messagingSenderId: "159227054709"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

//create array for RPS
var rps = ["Rock", "Paper", "Scissors"];

//funtion to render RPS buttons

var buttonHolder = $('<div>');

function renderButtons() {
    for (i=0; i < rps.length; i++) {
    var button = $('<button>' + rps[i] + '</button>');
    button.addClass("rpsbutton");
    button.text(rps[i]);
    buttonHolder.append(button);
    $("#buttonsHere").append(buttonHolder)
    }
};
    

//variables for name wins and losses and comment for chat box
    var name = "";
    var nameArr=[];
    var wins = 0;
    var losses = 0;
    var ties = 0;
    var comment = "";
    var player1;
    var player2;

    //on click function for player name input, build it as an object with wins, losses and ties and push those into Firebase.

    $(document).on("click", ".btn", function(event) {
        event.preventDefault();

        name = $("#name-submit").val().trim();
        chat = $("#chat").val().trim();

        database.ref().push({
            pname: name,
            win: wins,
            loss: losses,
            tied: ties,
            
            //dateAdded: firebase.database.ServerValue.TIMESTAMP
        })

        nameArr.push(name);

        //Clears name-submit box
        $("#name-submit").val("");

     player1 = nameArr[0];
     player2 = nameArr[1];

     

     if (nameArr.length === 2) {
        $(".input-group").hide();
     }

     console.log("Player 2 will be " + player2);
        console.log("Player 1 will be " + player1);

        renderButtons();
    //function to establish presence of both players
    
    /*for (ii=0; ii< nameArr; ii++) {
        
    }
            
    });

 //Function to establish presence

 /*
 // Fetch the current user's ID from Firebase Authentication.
var uid = firebase.auth().currentUser.uid;

// Create a reference to this user's specific status node.
// This is where we will store data about being online/offline.
var userStatusDatabaseRef = firebase.database().ref('/status/' + uid);

// We'll create two constants which we will write to 
// the Realtime database when this device is offline
// or online.
var isOfflineForDatabase = {
    state: 'offline',
    last_changed: firebase.database.ServerValue.TIMESTAMP,
};

var isOnlineForDatabase = {
    state: 'online',
    last_changed: firebase.database.ServerValue.TIMESTAMP,
};

// Create a reference to the special '.info/connected' path in 
// Realtime Database. This path returns `true` when connected
// and `false` when disconnected.
firebase.database().ref('.info/connected').on('value', function(snapshot) {
    // If we're not currently connected, don't do anything.
    if (snapshot.val() == false) {
        return;
    };

    // If we are currently connected, then use the 'onDisconnect()' 
    // method to add a set which will only trigger once this 
    // client has disconnected by closing the app, 
    // losing internet, or any other means.
    userStatusDatabaseRef.onDisconnect().set(isOfflineForDatabase).then(function() {
        // The promise returned from .onDisconnect().set() will
        // resolve as soon as the server acknowledges the onDisconnect() 
        // request, NOT once we've actually disconnected:
        // https://firebase.google.com/docs/reference/js/firebase.database.OnDisconnect

        // We can now safely set ourselves as 'online' knowing that the
        // server will mark us as offline once we lose connection.
        userStatusDatabaseRef.set(isOnlineForDatabase);
    });
});
 */

//function for initial input and listener to deal with data from firebase and display

database.ref().on("child_added", function(childSnapshot){
    player1 = childSnapshot.val().name;
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

//game mechanics

//on click event for player's turn

//disabling player window when it's not their turn

//chat window


    });

    
