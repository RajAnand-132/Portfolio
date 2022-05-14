dob = document.querySelector(".dob span");
var originaldate = '20001210';
var year = Number(originaldate.substr(0, 4));
var month = Number(originaldate.substr(4, 2)) - 1;
var day = Number(originaldate.substr(6, 2));
var today = new Date();
var age = today.getFullYear() - year;
if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  age--;
}
dob.innerHTML=age;