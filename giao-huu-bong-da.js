const readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);

const tinhGiaiThua = (num) => {
  let k = 1;
  if (num == 0) {
    return k;
  } else {
    for (i = 1; i <= num; i++) {
      k = k * i;
    }
  }
  return k;
};
const checkNumber = (values) => {
  if (values.length == 2) {

    for (let element of values) {
      if (!isNaN(element) && element >= 0 && element <= 10) {
        return true;
      }
    }
  }
  return false;
};

rl.question("", (number) => {
  if (!isNaN(number) && number > 0 && number <= 100) {
    let count = 0;
    let arrCachDuDoanTySo=[];
    rl.on("line", (string) => {
      
      const values = string.split(" ");
      if (checkNumber(values)) {
        const x=Number(values[0]);
        const y= Number(values[1]);
        const tongSoCachDuDoanTySo=tinhGiaiThua(x+y)/(tinhGiaiThua(x)*(tinhGiaiThua(y)));
        arrCachDuDoanTySo.push(tongSoCachDuDoanTySo);
        count++;
      } else {
        console.log("0 <= x , y <= 10");
        rl.close();
      }
      if (count == number) {
        console.log("OUT PUT");
        for (let element of arrCachDuDoanTySo) {
          console.log(element);
        }
        rl.close();
      }
    });

  } else {
    console.log("0 < N <= 100");
    rl.close();
  }
});
