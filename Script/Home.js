/*Home */
let UserHome = document.getElementById("User");
let SignOut = document.getElementById("SignOut");

var islogin = localStorage.getItem("IsLogin");
console.log(islogin)

if (islogin ==="false") {
    location.href="index.html"
}

SignOut.addEventListener("click",function(){
    localStorage.setItem("IsLogin" , "false");
    location.href="index.html"
})

var data = JSON.parse(localStorage.getItem("User"))
UserHome.textContent +=data.Name;