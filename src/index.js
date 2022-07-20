//const, let等の変数宣言

// //var変数は上書き可能
// var val1 = "変数";
// val1 = "上書き";
// console.log(val1);

// //var変数は再宣言可能 ESリントがデフォで入っているため〜出る
// var val1 = "varの再宣言";
// console.log(val1);

//letは上書き可能 だだし、再宣言不可能  ex let val2 = "再宣言"
// let val2 = "let変数";
// val2 = "上書き";
// console.log(val2);

//const変数は 上書きも再宣言も不可能  ex val3 = "上書き"
// const val3 = "const変数";
// console.log(val3);

//constで定義したオブジェクトは書き換え可能 (プロパティの追加も可能)
// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };

// val4.name = "jak";
// val4.address = "@gmail.com"

// console.log(val4);

//const で定義した配列もプロパティの書き換えが可能（pushも）
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monky");
// console.log(val5);

/////テンプレート文字列////////////////////////
//私の名前はじゃけぇです。年齢は28歳です
// const name = "じゃけぇ";
// const age = 28;

// //従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);
// //テンプレート文字列(バッククウォート)
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//アロー関数/////////////////////////////
//従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));
// //アロー関数 ( (str)はstrでも可能　, 一行の場合(return等)は{}の省略が可能,{}を使用すると returnは必要)
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// //引数が二つの場合　（省略後）
// const func3 = (num1, num2) => num1 + num2　;
// console.log(func3(10, 20));

/////分割代入//////////////////////////
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

//配列でも使用可能
// const myProfile = ["じゃけぇ", 28];
// const messege3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(messege3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/////
/////デフォルト値/////////////////////////////////
// const sayHello = (name = "じゃけぇ") => console.log(`こんにちは、${name}さん`);
// sayHello();//（）デフォルト値が設定される, ない場合はundifined

/////
/////スプレッド構文/////////////////////////
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1)

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1); //1
// console.log(num2); //2
// console.log(arr3); //3,4,5

//配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6); //[10, 20]

// const arr7 = [...arr4, ...arr5];
// console.log(arr7); //[10,20,30,40]
//スプレッド構文だと参照先で変更しても元の値は引き継がれない ex arr6[0] = 100; console.log(arr4) print内容: [10,20]

//exそのままコピーするとコピー先を変更したとしても値が引き継がれてしまう
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

//////mapやfilterを使った配列の処理////////////////
//従来のfor文
const nameArr = ["田中", "山田", "じゃけい"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

//map (回す)
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`)); //書き換え(2番目にindex引数を取ることも可能)

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけい") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr); //　[田中さん, 山田さん, じゃけい]

//filter (抽出)
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1; //[1.3.5] ex num%2===0; [2,4]
// });
// console.log(newNumArr);

//
/////三項演算子/////////////////////////////
//　ある条件 ? 条件がtureの時 : 条件がfalseの時
// const val1 = 1 < 0 ? "tureです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString()); //三桁区切りにしてくれる関数

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum); //typeofは型推定

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(50 + 40));

//
/////論理演算子の本当の意味を知ろう////////////////////
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("１か２はtureになります");
// }
// if (flag1 && flag2) {
//   console.log("１も２もtureになります");
// }

// // ||(パイプライン)は左側がfalseとなる時、右を返す
// const num = 100;
// const fee = num || "金額未定です";
// console.log(fee); //左の数字(100)がそのまま出力される

// const num1 = null;
// const fee1 = num1 || "金額未定です";
// console.log(fee1); //右側の”金額未定です”が出力される

// // &&(アンパサンド)は左側がtureなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2); //右側の”何か設定されました”が出力される

// const num25 = null;
// const fee25 = num25 && "何か設定されました";
// console.log(fee25); //左の"null"がそのまま出力される
