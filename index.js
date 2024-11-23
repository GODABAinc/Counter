const dbtn = document.getElementById("dbtn");
const rbtn = document.getElementById("rbtn");
const ibtn = document.getElementById("ibtn");
const cnt = document.getElementById("cnt");
let count = 0;

dbtn.onclick = function(){
    count--;
    cnt.textContent = count;
}
rbtn.onclick = function(){
    count = 0;
    cnt.textContent = count;
}
ibtn.onclick = function(){
    count++;
    cnt.textContent = count;
}