let numArr = [];

let sum = 0;
let fNum = 0;
let counter = 0;
let firstProcess = false;

let num = document.getElementById("num");
function calc() {
  for (i = counter; i < numArr.length; i++) {
    if (numArr[i] == "+" && numArr[i + 1] != "+" && numArr[i + 1] != null) {
      numArr[i + 1] = numArr[i - 1] + numArr[i + 1];
      sum = numArr[i + 1];
      //console.log(sum);
    }
    if (numArr[i] == "-" && numArr[i + 1] != "-" && numArr[i + 1] != null) {
      numArr[i + 1] = numArr[i - 1] - numArr[i + 1];
      sum = numArr[i + 1];
    }
    if (numArr[i] == "*" && numArr[i + 1] != "*" && numArr[i + 1] != null) {
      numArr[i + 1] = numArr[i - 1] * numArr[i + 1];
      sum = numArr[i + 1];
    }
    if (numArr[i] == "/" && numArr[i + 1] != "/" && numArr[i + 1] != null) {
      numArr[i + 1] = numArr[i - 1] / numArr[i + 1];
      sum = numArr[i + 1];
    }
  }
}

const add = () => {
  numArr.push(Number(num.value));
  numArr.push("+");
  if ((firstProcess = true)) {
    counter = numArr.length - 3;

    calc();
  }
  firstProcess = true;
  console.log(sum);
  num.value = null;
};

let minus = () => {
  numArr.push(Number(num.value));
  numArr.push("-");
  if ((firstProcess = true)) {
    counter = numArr.length - 3;

    calc();
  }
  firstProcess = true;
  console.log(sum);
  num.value = null;
};

let mult = () => {
  numArr.push(Number(num.value));
  numArr.push("*");
  if ((firstProcess = true)) {
    counter = numArr.length - 3;

    calc();
  }
  firstProcess = true;
  console.log(sum);
  num.value = null;
};

let div = () => {
  numArr.push(Number(num.value));
  numArr.push("/");
  if ((firstProcess = true)) {
    counter = numArr.length - 3;

    calc();
  }
  firstProcess = true;
  console.log(sum);
  num.value = null;
};

let ac = () => {
  sum = 0;
  console.log(sum);
  num.value = null;
};
