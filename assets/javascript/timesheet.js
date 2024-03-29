

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
var role = "";
var startDate = "";
var monthlyRate = 0;
var totalEmployees =["Richard", "Cassidy", "Erik", "Nolan", "Juan"];

// Capture Button Click
$("#add-employee").on("click", function (event) {
    // Don't refresh the page!
    event.preventDefault();

    //      YOUR TASK!!!
    //      Code in the logic for storing and retrieving the most recent user.
    //      Don't forget to provide initial data to your Firebase database.
    employeeName = $("#employee-name-input").val().trim();
    role = $("#role-input").val().trim();
    startDate = $("#start-date-input").val().trim();
    monthlyRate = $("#monthly-rate-input").val().trim();

    database.ref().set({
        name: employeeName,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate
    })
    for (i = 0; i <= totalEmployees.length; i++) {
        var newEmployeeRow = $("<tr>");
        newEmployeeRow.attr("id", totalEmployees[i]);
        $("#new-employee-row").append(newEmployeeRow)
        //newEmployeeRow.attr("class", i)

        for (a = 1; a <=6 ; a++) {
            var newEmployee = $("<td>");
            newEmployee.addClass("column " + a);
            $("#" + totalEmployees[i]).append(newEmployee);
        }


        //$("#new-employee-row".append(newEmployee));


    }
});