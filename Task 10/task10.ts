// Store the names of friends in an array
const friendNames: string[] = ["Usama", "Abdul Ghaffoor", "Shahbaz Ahmed", "Ghulam Rasool"];

// Print a personalized message to each person
for (let i = 0; i < friendNames.length; i++) {
    const message: string = `Hello, ${friendNames[i]}! How are you today?`;
    console.log(message);
}
