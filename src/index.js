/**
 * const, let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// // let val2 = "let変数を再宣言"

// // const変数は上書き不可　再宣言も不可能
// const val3 = "const変数";
// console.log(val3);

// constはオブジェクトの中身のプロパティは変更することができる。
// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };
// val4.name = "daisuke";
// val4.addres = "hirosima";
// console.log(val4);

//Reactでは主にconstを変数として使用する。
// constで作成した配列の中身のプロパティは変更することができる。

const val5 = ["dog", "cat"];
// 0番目の要素を入れ替える
val5[0] = "bird";
//配列を追加
val5.push("monkey");
console.log(val5);
