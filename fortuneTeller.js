// Prompt the user for their mother's first name
let motherFirstName = prompt("Enter your mother's first name:");

// Prompt the user for the name of the street they grew up on
let streetGrewUpOn = prompt("Enter the name of the street you grew up on:");

// Prompt the user for their favorite color as a child
let favoriteColor = prompt("Enter your favorite color as a child:");

// Prompt the user for their current age and convert it to a number
let currentAge = Number(prompt("Enter your current age:"));

// Prompt the user for a number between 1 and 10 and convert it to a number
let numberBetween1and10 = Number(prompt("Enter a number between 1 and 10:"));

// Calculate the number of years before meeting their best friend
let yearsToMeetBestFriend = numberBetween1and10;

// Calculate the age at which the user will get married
let yearsToGetMarried = currentAge + yearsToMeetBestFriend;

// Calculate the number of children based on a modulus operation
let numberOfChildren = currentAge % yearsToMeetBestFriend;

// Calculate the approximate number of years until the user dyes their hair
let yearsUntilDyeHair = Math.round(currentAge / yearsToMeetBestFriend);

// Combine the mother's first name and street name to generate the best friend's name
let bestFriendName = motherFirstName + " " + streetGrewUpOn;

// Log individual fortune details to the console
console.log(`You will meet your best friend in ${yearsToMeetBestFriend} years.`);
console.log(`Your best friend's name will be ${bestFriendName}.`);
console.log(`You will get married in ${yearsToGetMarried} years.`);
console.log(`You will have ${numberOfChildren} children.`);
console.log(
  `You will dye your hair in approximately ${yearsUntilDyeHair} years.`
);

// Construct a detailed fortune message using template literals
let fortuneMessage = `In ${yearsToMeetBestFriend} years you are going to meet your best friend named ${bestFriendName}.
You will get married in ${yearsToGetMarried} years and have ${numberOfChildren} children.
In ${yearsUntilDyeHair} years you are going to dye your hair ${favoriteColor}.`;

// Log the complete fortune message to the console
console.log(fortuneMessage);
