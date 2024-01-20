const readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);

const checkInput = (string) => {
  let check = false;
  if(string.length==4){
    for (let i = 0; i < string.length; i++) {
        if (!isNaN(string[i])) {
          if (i == 1) {
            if (string[i] <= 1000 && string[i] > 0) {
              check = true;
            }
          } else {
            if (string[i] <= 1000 && string[i] >= 0) {
              check = true;
            }
          }
        }
      }
  }

  return check;
};

rl.on("line", (string) => {
  const values = string.split(" ");
  let minGold = -1;
  if (checkInput(values)) {
    const m = values[0];
    const d = values[1];
    const k = values[2];
    const c = values[3];
    if(d<k){
        if(m==1){
            minGold=0;
        }
    }else if(m==0||k==0||c==0){
        minGold=0;
    }else{
        if (d % k == 0) {
            if (m % (Math.floor(d / k) - 1) > 1) {
              minGold = Math.floor(m / (Math.floor(d / k) - 1)) * c;
            } else if (m % (Math.floor(d / k) - 1) == 1) {
              minGold = (Math.floor(m / (Math.floor(d / k) - 1)) - 1) * c;
            } else {

              minGold = (Math.floor(m / (Math.floor(d / k) - 1)) - 2) * c;
            }
          } else {
            if (m % Math.floor(d / k) > 1) {

              minGold = Math.floor(m / Math.floor(d / k)) * c;
            }
            if (m % Math.floor(d / k) == 1) {
              minGold = (Math.floor(m / Math.floor(d / k)) - 1) * c;
            } else {

              minGold = (Math.floor(m / Math.floor(d / k)) - 2) * c;
            }
          }
    }


    console.log(minGold);
  } else {
    console.log("Invalid");
    rl.close();
  }
});
