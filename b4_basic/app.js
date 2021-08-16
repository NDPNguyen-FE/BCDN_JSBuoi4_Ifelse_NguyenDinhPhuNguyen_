/**
 *khối 1: Input  
 *  nhập vào 3 số nguyên
 * khối 2: 
 *  B1: khai báo 
    *  var a = document.getElementById("number1").value;
        var b = document.getElementById("number2").value;
        var c = document.getElementById("number3").value;
        var result = document.getElementById("result");
        var type = "";
 *  B2: thuật toán
        if (a == b && b == c) {
            type = "Đây là tam giác đều";
        } else if (a == b || a == c || b == c) {
            type = "Đây là tam giác cân";
        } else if (
            a * a == b * b + c * c ||
            b * b == a * a + c * c ||
            c * c == a * a + b * b
        ) {
            type = "Đây là tam giác vuông";
        } else {
            type = "Một loại tam giác nào đó";
        }
 * khối 3: Output
 *  + in ra kết quả
 *  result.innerHTML = type;
 */

var btn = document.getElementById("button");

function typeTriangle() {
  var a = document.getElementById("number1").value;
  var b = document.getElementById("number2").value;
  var c = document.getElementById("number3").value;
  var result = document.getElementById("result");
  var type = "";

  if (a == b && b == c) {
    type = "Đây là tam giác đều";
  } else if (a == b || a == c || b == c) {
    type = "Đây là tam giác cân";
  } else if (
    a * a == b * b + c * c ||
    b * b == a * a + c * c ||
    c * c == a * a + b * b
  ) {
    type = "Đây là tam giác vuông";
  } else {
    type = "Một loại tam giác nào đó";
  }
  result.innerHTML = type;
}

btn.addEventListener("click", typeTriangle);
