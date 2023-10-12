//your JS code here. If required.

let date = new Date();
const time = document.getElementById("timer");
let d = date.getDate();

let arr = date.toString().split(' ');
let month = date.getMonth();
let year = date.getFullYear();
time.innerText = d+"/"+month+"/"+year+", "+arr[4];