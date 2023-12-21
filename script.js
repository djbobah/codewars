//task1
function spinWords(string) {
  return string
    .split(" ")
    .map((word) => {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}
spinWords("Hey fellow warriors");

//

//task2
function solution(pairs) {
  const arr = [];
  Object.keys(pairs).forEach((el) => {
    arr.push(`${el} = ${pairs[el]}`);
  });

  return `"${arr.join(",")}"`;
}
solution({ a: 1, b: "2" });
// console.log(solution({ a: 1, b: "2" })); // should return "a = 1,b = 2"

//

//task3

function score(dice) {
  const res = dice.reduce((acc, i) => {
    if (acc.hasOwnProperty(i)) {
      acc[i] += 1;
    } else {
      acc[i] = 1;
    }
    return acc;
  }, {});
  // console.log(res);

  let sum = 0;
  Object.keys(res).map((item) => {
    if (Number(item) === 1) {
      if (res[item] >= 3) {
        sum += 1000 + 100 * (res[item] - 3);
      } else {
        sum += 100 * res[item];
      }
    }
    if (Number(item) === 2 && res[item] >= 3) {
      sum += 200;
    }
    if (Number(item) === 3 && res[item] >= 3) {
      sum += 300;
    }
    if (Number(item) === 4 && res[item] >= 3) {
      sum += 400;
    }
    if (Number(item) === 5) {
      if (res[item] >= 3) {
        sum += 500 + 50 * (res[item] - 3);
      } else {
        sum += 50 * res[item];
      }
    }
    if (Number(item) === 6 && res[item] >= 3) {
      sum += 600;
    }
  });
  return sum;
}
// console.log(score([2, 3, 4, 6, 2]));
// console.log(score([4, 4, 4, 3, 3]));

// console.log(score([2, 4, 4, 5, 4]));
// console.log(score([1, 1, 1, 3, 3]));
///
//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point

// task4
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

function productFib(prod) {
  let number = 0,
    i = 0;
  // debugger;
  while (number <= prod) {
    number = fib(i) * fib(i + 1);
    if (number == prod) {
      // number = fib(i) * fib(i + 1);
      return [fib(i), fib(i + 1), true];
    } else if (number < prod) {
      i++;
    } else {
      return [fib(i), fib(i + 1), false];
    }
  }
}

// console.log(productFib(4895)); //, [55, 89, true]);
// console.log(productFib(5895)); //, [89, 144, false]);
// console.log(productFib(74049690)); //, [6765, 10946, true]);
// console.log(productFib(84049690)); //, [10946, 17711, false]);
// console.log(productFib(193864606)); //, [10946, 17711, true]);
// console.log(productFib(447577)); //, [610, 987, false]);
// console.log(productFib(602070)); //, [610, 987, true]);

// task5
function Nulls(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += "0";
  }
  return str;
}
function expandedForm(num) {
  const strNum = String(num);
  let res = "";

  for (let i = 0; i <= strNum.length - 1; i++) {
    if (strNum[i] !== "0" && strNum.length - i - 1 > 0) {
      res += strNum[i].toString() + Nulls(strNum.length - i - 1) + " + ";
    } else if (strNum.length - i - 1 == 0 && strNum[i] != 0) {
      res += strNum[i].toString();
    } else if (strNum.length - i - 1 == 0 && strNum[i] == 0) {
      res = res.slice(0, res.length - 3);
    }
  }
  return res;
}
// console.log(expandedForm(12)); // Should return '10 + 2'
// console.log(expandedForm(42)); // Should return '40 + 2'
// console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'
// console.log(expandedForm(9000000)); // Should return 9000000;

//task6
function check(board) {
  let strQx = "",
    strQy = "",
    strKx = "",
    strKy = "",
    chekh = false;

  board.map((item, x) => {
    item.map((i, y) => {
      if (i === "q") {
        strQx = x;
        strQy = y;
        // console.log(strQx, strQy);
      }
      if (i === "k") {
        strKx = x;
        strKy = y;
      }
    });
    // console.log(`q ${strQx}:${strQy} k ${strKx}:${strKy}`);
  });

  if (strQx === strKx || strQy === strKy) {
    chekh = true;
  }

  const RowLength = board.length;

  const ColumnLength = board[0].length;
  let text = "";
  let arr = [];

  for (i = 0; i <= RowLength + ColumnLength - 2; i++) {
    text = "";
    for (x = 0; x <= i; x++) {
      if (board[i - x] && board[i - x][x]) {
        text += board[i - x][x];
      }
    }
    arr.push(text);
  }
  arr.map((item) => {
    if (item.indexOf("q") >= 0 && item.indexOf("k") >= 0) {
      chekh = true;
    }
  });

  text = "";
  arr = [];
  // for (i = RowLength + ColumnLength - 2; i >= 0; i--) {

  // console.log("--------------");
  // console.log(board[0][4]);
  // console.log(board[0][3], board[1][4]);
  // console.log(board[0][2], board[1][3], board[2][4]);
  // console.log(board[0][1], board[1][2], board[2][3], board[3][4]);
  // console.log(board[0][0], board[1][1], board[2][2], board[3][3], board[4][4]);
  // console.log(board[1][0], board[2][1], board[3][2], board[4][3]);
  // console.log(board[2][0], board[3][1], board[4][2]);
  // console.log(board[3][0], board[4][1]);
  // console.log(board[4][0]);

  // console.log("--------------");
  // console.log(board[0][0]);
  // console.log(board[1][0], board[0][1]);
  // console.log(board[2][0], board[1][1], board[0][2]);
  // console.log(board[3][0], board[2][1], board[1][2], board[0][3]);
  // console.log(board[4][0], board[3][1], board[2][2], board[1][3], board[0][4]);
  // console.log(board[4][1], board[3][2], board[2][3], board[1][4]);
  // console.log(board[4][2], board[3][3], board[2][4]);
  // console.log(board[4][3], board[3][4]);
  // console.log(board[4][4]);
  console.log(board[4][0]);
  console.log(board[3][0], board[4][1]);
  console.log(board[2][0], board[3][1], board[4][2]);
  console.log(board[1][0], board[2][1], board[3][2], board[4][3]);
  console.log(board[0][0], board[1][1], board[2][2], board[3][3], board[4][4]);
  console.log(board[0][1], board[1][2], board[2][3], board[3][4]);
  console.log(board[0][2], board[1][3], board[2][4]);
  console.log(board[0][3], board[1][4]);
  console.log(board[0][4]);
  // for (i = 0; i <= RowLength + ColumnLength - 2; i++) {
  // for (x = 0; x <= i; x++) {
  //   if (board[i - x] && board[i - x][x]) {
  //     text += board[i - x][x];
  //   }
  // }

  for (i = 1; i >= 0; i--) {
    text = "";
    for (x = 0; x <= i; x++) {
      if (board[i] && board[i + x]) {
        text += board[i + x][x];
      }

      // arr.push(text);
    }
    console.log(text);
    arr.map((item) => {
      if (item.indexOf("q") >= 0 && item.indexOf("k") >= 0) {
        chekh = true;
      }
    });

    return chekh;
  }
}
var board5 = [
  ["1", "k0", "100", "1000", "10000"],
  ["2", "20", "q00", "2000", "20000"],
  ["3", "30", "300", "3000", "30000"],
  ["4", "40", "400", "4000", "40000"],
  ["5", "50", "500", "5000", "50000"],
];

// [
//   ["1", "1", "1", "1", "1"],
//   ["2", "2", "2", "2", "2"],
//   ["3", "3", "3", "3", "3"],
//   ["4", "4", "4", "4", "4"],
//   ["5", "5", "5", "5", ""],
// ];

var board1 = [
  ["1", "q", "1", "1", "k"],
  ["2", "2", "2", "2", "2"],
  ["3", "3", "3", "3", "3"],
  ["4", "4", "4", "4", "4"],
  ["5", "5", "5", "5", "5"],
];
// var board1 = [
//   ["*", "q", "*", "*", "k"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
// ];
var board2 = [
  ["*", "*", "*", "*", "*"],
  ["*", "k", "*", "q", "*"],
  ["*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
];
var board3 = [
  ["k", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
  ["q", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
];
var board4 = [
  ["*", "*", "*", "*", "q"],
  ["*", "*", "*", "*", "k"],
  ["*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
];
// var board5 = [
//   ["*", "k", "*", "*", "*"],
//   ["*", "*", "q", "*", "*"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
//   ["*", "*", "*", "*", "*"],
// ];

var board6 = [
  ["*", "*", "k", "*", "*"],
  ["*", "q", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
];
var board7 = [
  ["*", "*", "*", "q", "*"],
  ["*", "*", "k", "*", "*"],
  ["*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
];
var board8 = [
  ["*", "*", "q", "*", "k"],
  ["*", "*", "*", "k", "*"],
  ["*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
];
var board9 = [
  ["*", "*", "q", "*", "*"],
  ["k", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
];

// console.log(check(board1)); //rue, "check to the right should return true");
// console.log(check(board2)); //rue, "check to the left should return true");
// console.log(check(board3)); //rue, "check to the top should return true");
// console.log(check(board4)); //rue, "check to the bottom should return true");
console.log(check(board5)); //rue, "check to the top left should return true");
// console.log(check(board6)); //rue, "check to the top right should return true");
// console.log(check(board7)); //rue, "check to the bottom left should return true");
// console.log(check(board8)); // true,  "check to the bottom right should return true");
// console.log(check(board9)); //alse, "Expect 'false' when king not in check");
//task7 "Cuckoo Clock" "HH:MM", where 1 ≤ HH ≤ 12 and 0 ≤ MM ≤ 59,

function cuckooClock(inputTime, chimes) {
  // Write code
  return inputTime;
}
const initialTimes = ["07:22", "12:22", "01:30", "04:01", "03:38"];
const chimes = [1, 2, 2, 10, 19];
//     const expectedTimes = ["07:30", "12:45", "01:45", "05:30", "06:00"];

cuckooClock("07:22", 1);
cuckooClock("12:22", 2);
