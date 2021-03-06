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

// // const変数は上書き不可 再宣言も不可能
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
// const val5 = ["dog", "cat"];
// // 0番目の要素を入れ替える
// val5[0] = "bird";
// //配列を追加
// val5.push("monkey");
// console.log(val5);

// const name = "だいすけ";
// const age = 28;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// //テンプレート文字列を用いた方法
// //``バッククォートを用いて囲まれた中で変数を使用したい場合は${}で変数名を囲む。
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// 引数が一つの時はカッコはいらない
//returnを省略することができる。その場合は{}も省略しなければならない
// const func2 = (str) => str;

// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 * num2;
// };

// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "ダイスケ",
//   age: 26
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// //分割代入
// const { name, age } = myProfile;

// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["大輔", 26];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// // 最初に設定したものが最初の要素に入り、二番目は二番目に入る。
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// javascriptは引数が設定されていない場合はundefindが発生する。
// (name = "ゲスト")でデフォルト値をゲストに設定
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
// sayHello("大輔");

// /**
//  * スプレッド構文
//  */
// // 配列の展開
// // 配列を順番に展開できる。
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

////まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, num3, num4, num5] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(num5);

// //配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// //コピ-
// //参照を引き継がずにコピーできる。
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

//結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// 参照先が同じになってしまうため、不具合の元になってしまう。
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "原田"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// mapを使用すると内部でアロー関数を使用することができる。
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
// mapで何番目に引数があるのか知りたい場合は第二引数を用意する。
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// // filterはreturnに条件式を書いて、条件に合致するものだけをreturnで返す。
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "原田") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */

// ある条件 ? 条件がtrueの時　: 条件がfalseの時
// ifやelseが１行で表現できるのが三項演算子です。
//  const val1 = 1 < 0 ? 'trueです' : 'falseです。';
//  console.log(val1);

// const　num = 1300;
// //３桁区切りさせる。
// // toLocaleString();
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています!" : "許容範囲内です。";
// };

// console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味を知ろう　&& ||
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も2はtrueになります");
// }
//実はまたはとかかつという意味ではない
// ||は左側がfalseとなる時右側を返すという意味。
// javascriptはnullをfalse判定する。
// const num = 100;
// const fee = num || "金額未設定です。";
// console.log(fee);

// &&は左側がtrueなら右側を返す。
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
