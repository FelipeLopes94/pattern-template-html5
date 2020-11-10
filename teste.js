var semana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
var d = new Date();
console.log(d)
document.getElementById("demo").innerHTML = semana[d.getDay()];