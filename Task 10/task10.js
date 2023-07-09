// Store the names of friends in an array
var friendNames = ["Usama", "Abdul Ghaffoor", "Shahbaz Ahmed", "Ghulam Rasool"];
// Print a personalized message to each person
for (var i = 0; i < friendNames.length; i++) {
    var message = "Hello, ".concat(friendNames[i], "! How are you today?");
    console.log(message);
}
