function Tinh() {
    var n = Number(document.getElementById("txtN").value);
    var a = Number(document.getElementById("txtnFirtnum").value);
    if(n<4||n>20){
        alert(n + ' không được bé từ 4 đến 20');
        return;
    }
    if(n % 2 != 0){
        alert(n + ' là số lẻ, hảy nhập số chẳn');
        return;
    }
    alert("Số đối diện với " + a + " là: " + findOppositeNumber(n, a));
}

function findOppositeNumber(n, a) {

    var lenght = n / 2;
    var Opposite = lenght + a;
    
    if (Opposite <= n - 1) {
        return Opposite;
    }
    else {
        return Opposite - n;
    }
}