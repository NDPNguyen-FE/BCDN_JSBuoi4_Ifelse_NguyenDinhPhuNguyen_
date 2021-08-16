/**
 * Khối 1: Input 
 *      Nhập vào 3 số nguyên
 * khối 2:  
 *  b1: khai báo biến cần dùng
 *      var a = parseInt(document.getElementById("number1").value);
        var b = parseInt(document.getElementById("number2").value);
        var c = parseInt(document.getElementById("number3").value);
        var result = document.getElementById("result");
        var total = ""; 
 *  b2: Thuật toán (if....else if .... else)
        + Nếu a < b và a >c thì c < b < a
            if (a < b && a > c) {
                total = `${c} < ${b} < ${a}`;
            }  
        + Nếu a > b và c >b thì b < c < a
            else if (a > b && c > b) {
                total = `${b} < ${c} < ${a}`;
            } 
        + Nếu a > b và c > a thì b < a < c
            else if (a > b && c > a) {
                total = `${b} < ${a} < ${c}`;
            }
        + Nếu b >a và b > c thì c < a < b
            else if (b > a && b > c) {
                total = `${c} < ${a} < ${b}`;
            } 
        + Nếu b > c và c > a thì a < c < b
             else if (b > c && c > a) {
                total = `${a} < ${c} < ${b}`;
            }
        + Nếu không thuộc các điều kiện trên thì a < b < c
            else {
                total = `${a} < ${b} < ${c}`;
            } 
* khối 3: output (in ra kết quả )
    result.innerHTML = total;
 */

var btn = document.getElementById("button");

function sortNumber() {
  var a = parseInt(document.getElementById("number1").value);
  var b = parseInt(document.getElementById("number2").value);
  var c = parseInt(document.getElementById("number3").value);
  var result = document.getElementById("result");
  var total = "";
  if (a < b && a > c) {
    total = `${c} < ${b} < ${a}`;
  } else if (a > b && c > b) {
    total = `${b} < ${c} < ${a}`;
  } else if (a > b && c > a) {
    total = `${b} < ${a} < ${c}`;
  } else if (b > a && b > c) {
    total = `${c} < ${a} < ${b}`;
  } else if (b > c && c > a) {
    total = `${a} < ${c} < ${b}`;
  } else {
    total = `${a} < ${b} < ${c}`;
  }
  console.log(result);
  result.innerHTML = total;
}

btn.addEventListener("click", sortNumber);
