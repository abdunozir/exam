// Problem #1
// let n = "10011011";
// let a = 2;
// function convertIt(n, a) {
//   let res = 0;
//   for (let i = n.length - 1; i >= 0; i--) {
//     res += n[i] * a ** (n.length - i - 1);
//   }
//   return res;
// }

// console.log(convertIt(n, a));

// Problem #2
// let arr = [1, -3, 12, -1, 3, -4, -2, 1, -7];
// function checkIt(arr) {
//   let n = true;
//   if (newArr[0] < 0) {
//     for (let i = 0; i < arr.length; i++) {
//       if (i % 2 == 0 && arr[i] > 0) {
//         n = i;
//         break;
//       } else if (i % 2 != 0 && arr[i] < 0) {
//         n = i;
//         break;
//       }
//     }
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       if (i % 2 == 0 && arr[i] < 0) {
//         n = i;
//         break;
//       } else if (i % 2 != 0 && arr[i] > 0) {
//         n = i;
//         break;
//       }
//     }
//   }
//   console.log(n);
// }

// Problem #3
// let Obj = {
//   arr: [15, 20, 12, 4, -13, 5],
//   at(index) {
//     if (this.arr.length > 0) {
//       if (index >= 0) {
//         for (let i = 0; i < this.arr.length; i++) {
//           if (i == index) {
//             console.log(this.arr[i]);
//           }
//         }
//       } else {
//         for (let i = 0; i < this.arr.length; i++) {
//           if (i == Math.abs(index)) {
//             console.log(this.arr.reverse()[Math.abs(i) - 1]);
//           }
//         }
//       }
//     }
//   },
// };
// Obj.at(-1);

// Problem #4
let i = " salom ";
// function revers(i) {
//   let l = "";
//   for (let k = i.length - 1; k >= 0; k--) {
//     l += i[k];
//   }
//   return l;
// }
// // console.log(revers(i));

// function trim(i) {
//   let el = i.split("");
//   console.log(el);
// }
// trim(i);

// pronlem #5
// let obj = { x: 1, y: 2 };
// function testlovchi(obj) {
//   let arr = [];
//   for (let index in obj) {
//     let p = [index, obj[index]];
//     arr.push(p);
//   }

//   console.log(arr);
// }
// testlovchi(obj);

// problem #7
// let a = [1, "t", 15, "t"];
// let b = [2, 4];

// function conCat(a, b) {
//   let newArr = [...a, ...b];
//   for (let i = 0; i < newArr.length; i++) {
//     for (let l = 0; l < newArr.length; l++) {
//       if (i !== l) {
//         if (newArr[i] == newArr[l]) {
//           newArr.splice(i, 1);
//         }
//       }
//     }
//   }

//   console.log(newArr);
// }

// conCat(a, b);

// problem #8
// let arr = [
//   [1, 1, 1, 1],
//   [5, 2, 2, 100],
//   [9, 4, 2, 1],
// ];

// for (let i = 1; i < arr[0].length; i++) {
//   arr[0][i] += arr[0][i - 1];
// }

// for (let i = 1; i < arr.length; i++) {
//   arr[i][0] += arr[i - 1][0];
// }

// for (let i = 1; i < arr.length; i++) {
//   for (let j = 1; j < arr[i].length; j++) {
//     let top = arr[i - 1][j]
//     let left = arr[i][j - 1]
//     if (top > left) {
//       arr[i][j] += left
//     } else {
//       arr[i][j] += top
//     }
//   }
// }

// console.log(arr[arr.length-1][arr[0].length-1]);
