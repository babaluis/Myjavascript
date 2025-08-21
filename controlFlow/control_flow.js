let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);

if (userRole === "admin") {
    accessLevel = "Full access granted";
    console.log("Access Level:", accessLevel);
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
    console.log("Access Level:", accessLevel);
} else {
    accessLevel = "No access granted";
    console.log("Access Level:", accessLevel);
}

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
        console.log("User Message:", userMessage);
    } else {
        userMessage = "Welcome, User!";
        console.log("User Message:", userMessage);
    }
} else {
    userMessage = "Please log in to access the system.";
    console.log("User Message:", userMessage);
}

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        console.log("User Category:", userCategory);
        break;
    case "manager":
        userCategory = "Manager";
        console.log("User Category:", userCategory);
        break;
    case "subscriber":
        userCategory = "Subscriber";
        console.log("User Category:", userCategory);
        break;
    default:
        userCategory = "Unknown";
}
