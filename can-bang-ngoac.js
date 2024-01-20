const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

// rl.question('What is your age? ', (age) => {
//     console.log('Your age is: ' + age);
// });

const checkNumber = (number) => {
  let check = false;
  if (!isNaN(number) && number <= 100 && number > 0) {
    check = true;
  }
  return check;
};

const kyTuNgoac = {
  "(": ")",
  "[": "]",
  "{": "}",
};
const checkBalance = (string) => {
  const length = string.length;
  if (length == 0) return true;
  if (length % 2 == 1) {
    return false;
  } else {
    let check = true;
    for (let i = 0; i < length / 2; i++) {
      if (kyTuNgoac[string[i]] !== string[length - i - 1]) {
        check = false;
        break;
      } else {
        continue;
      }
    }
    return check;
  }
};

rl.question("", (number) => {
  if (checkNumber(number)) {
    let count = 0;
    let arrCheck = [];
    rl.on("line", (string) => {
      if (
        string.length == 0 ||
        string.includes("[") ||
        string.includes("{") ||
        string.includes("(") ||
        string.includes("]") ||
        string.includes("}") ||
        string.includes(")")
      ) {
        arrCheck.push(checkBalance(string));
        count++;

        if (count == number) {
          console.log("============ OUT PUT ============");
          for (const element of arrCheck) {
            console.log(element);
          }
          rl.close();
        }
      } else if (string.length > 100000) {
        console.log("No string is longer than 100000 characters.");
        rl.close();
      } else {
        console.log("All strings contain only characters in { [ ( ) ] }");
        rl.close();
      }
    });
  } else {
    console.log("0 < N <= 100");
    rl.close();
  }
});
