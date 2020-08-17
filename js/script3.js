function Tinh() {
    var A = document.getElementById("txtS1").value;
    var B = document.getElementById("txtS2").value;
    alert("Kết quả là: " + merge2String(A, B));
}
function merge2String(A, B) {
    var C = "";
    var len = A.length + B.length;
    for (var i = 0; i < len; i++) {
        if (A[i] != null) {
            C += A[i];
        }
        if (B[i] != null) {
            C += B[i];
        }
    }
    return C;
}