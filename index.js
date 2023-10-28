// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) { 
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }

//     return gifts;
// }

// wrapGifts(gifts);

// const tyCards = {
//     guestName: ["Charlie", "Samip", "Ali"],
//     eventName: "birthday"
// }

// function writeCards(friend, eventName) {
//     for (let counter = 0; counter < friend.length; counter++) {
//         console.log(`"Thank you, ${friend[counter]}, for the wonderful ${eventName} gift!"`);
//         debugger;
//     }
// }

// writeCards(["Charlie", "Samip", "Ali"], "birthday");



function writeCards(friends, eventName) {
    let messages = []
    for (let i = 0; i < friends.length; i++) {
        messages.push(`Thank you, ${friends[i]}, for the wonderful ${eventName} gift!`)
    }
    return messages
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown() {
    let i = 10;
    while (i >= 0) {
        console.log(i--);
    }
}

countDown();