/*Login*/

let EmailLog = document.getElementById("EmailLog");
let passwordLog = document.getElementById("passwordLog");


function login() {
  let Log = {
    Email: EmailLog.value,
    password: passwordLog.value,
  };
  if (!EmailLog.value == "" && !passwordLog.value == "") {
    document.getElementById("CheckLogin").classList.add("d-none");

    var data = JSON.parse(localStorage.getItem("User"));
    if (data.Email == EmailLog.value && data.password == passwordLog.value) {
        localStorage.setItem("IsLogin", "true");
      location.href = "Home.html";
      return true;
    }
  }
    document.getElementById("CheckLogin").classList.remove("d-none");
  return false;
}
document.getElementById("Login").addEventListener("click", login);
