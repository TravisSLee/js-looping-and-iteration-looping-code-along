// Code your solutions in this file


let names = ["Ada", "Brendan", "Ali"];
let holiday = "birthday";

function writeCards(names, holiday) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`);
    }
    return messages;
  };

  function countDown(number) {
    let i = 0; 
    let subtract = number
    while (i <= number) {
        console.log(subtract);
        subtract = subtract - 1;
        i++; 
    };
  };