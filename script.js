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
