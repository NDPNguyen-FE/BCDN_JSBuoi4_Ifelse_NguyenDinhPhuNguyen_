/**
 * Khối 1: Input 
 *      Nhập vào 3 số nguyên
 * khối 2:  
 *  b1: khai báo biến cần dùng
 *      var num1 = document.getElementById("number1").value;
        var num2 = document.getElementById("number2").value;
        var num3 = document.getElementById("number3").value;
        var result = document.getElementById("result");
        var count = 0;
 *  b2: Thuật toán (if....)
        + Xác định các số chẵn sau đó sẽ lấy tổng số nhập vào trừ đi số chẵn sẽ ra cao bao nhiêu số lẻ
             if (num1 % 2 === 0) {
                count++;
            }

            if (num2 % 2 === 0) {
                count++;
            }

            if (num3 % 2 === 0) {
                count++;
            }

        
* khối 3: output (in ra kết quả )
    result.innerHTML = `Có ${count} số chẵn, có ${3 - count} số lẻ`;
 */

var btn = document.getElementById("button");

function parityNumber() {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;
  var num3 = document.getElementById("number3").value;
  var result = document.getElementById("result");
  var count = 0;

  if (num1 % 2 === 0) {
    count++;
  }

  if (num2 % 2 === 0) {
    count++;
  }

  if (num3 % 2 === 0) {
    count++;
  }

  result.innerHTML = `Có ${count} số chẵn, có ${3 - count} số lẻ`;
}

btn.addEventListener("click", parityNumber);
