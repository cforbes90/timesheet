

var config = {
    apiKey: "AIzaSyAkGb7T0WJeezQLBcwprhQl-HneGplPCqw",
    authDomain: "timesheet-89c97.firebaseapp.com",
    databaseURL: "https://timesheet-89c97.firebaseio.com",
    projectId: "timesheet-89c97",
    storageBucket: "",
    messagingSenderId: "455143007002",
    appId: "1:455143007002:web:2eef0a838e7a367f9602a3"
  };

  firebase.initializeApp(config);

  // Create a variable to reference the database
  var database = firebase.database();

  // Initial Values
  var employeeName = "";
  var role= "";
  var startDate = "";
  var monthlyRate = "";

  // Capture Button Click
//   $("#add-user").on("click", function(event) {
//     // Don't refresh the page!
//     event.preventDefault();

//     // YOUR TASK!!!
//     // Code in the logic for storing and retrieving the most recent user.
//     // Don't forget to provide initial data to your Firebase database.
//     name = $("#name-input").val().trim();
//     email = $("#email-input").val().trim();
//     age = $("#age-input").val().trim();
//     comment = $("#comment-input").val().trim();

//     database.ref().set({
//       name: name,
//       email: email,
//       age: age,
//       comment: comment
//     });
//   });