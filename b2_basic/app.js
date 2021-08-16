/**
 * Khối 1: Input
 *  Nhập vào người cần gửi lời chào từ ô Select
 *Khối 2:
 *     b1:Khai báo biến
 *          var select = document.getElementById("name");
            var result = document.getElementById("result");
            var total = "";
 *      b2: Thuật toán
 *          + Nếu giá trị là  "B" thì Chào Bố
                if (select.value === "B") {
                    total = "Xin chào Bố";
                }
 *          + Nếu giá trị là  "M" thì Chào Mẹ
                else if (select.value === "M") {
                    total = "Xin Chào Mẹ";
                } 
 *          + Nếu giá trị là  "A" thì Chào Anh Trai
                else if (select.value === "A") {
                    total = "Xin Chào Anh Trai";
                }
 *          + Nếu giá trị là  "E" thì Chào Em Gái
 *               else if (select.value === "E") {
                    total = "Xin Chào Em Gái";
                } 
*Khối 3: Output
    in ra lời chào
        result.innerHTML = total;                
 */

var btn = document.getElementById("button");

function sayHello() {
  var select = document.getElementById("name");
  var result = document.getElementById("result");
  var total = "";

  if (select.value === "B") {
    total = "Xin chào Bố";
  } else if (select.value === "M") {
    total = "Xin Chào Mẹ";
  } else if (select.value === "A") {
    total = "Xin Chào Anh Trai";
  } else if (select.value === "E") {
    total = "Xin Chào Em Gái";
  } else {
    total = "";
  }

  result.innerHTML = total;
}

btn.addEventListener("click", sayHello);
