/*Register*/ 
let NameReg = document.getElementById("NameReg")
let EmailReg = document.getElementById("EmailReg")
let passwordReg = document.getElementById("passwordReg");
let ConfirmpasswordReg = document.getElementById("ConfirmpasswordReg");











function Register() {
    let Reg = {
      Name: NameReg.value,
      Email: EmailReg.value,
      password : passwordReg.value,
      confirmpassword : ConfirmpasswordReg.value 
    };
    if (
      !NameReg.value == "" &&
      !EmailReg.value == "" &&
      !passwordReg.value == "" &&
      !ConfirmpasswordReg.value == ""
    ) {
      document.getElementById("InputSpan").classList.add("d-none");

      if (passwordReg.value === ConfirmpasswordReg.value) {
        localStorage.setItem("User", JSON.stringify(Reg));
        document.getElementById("passSpan").classList.add("d-none");
        location.href = "index.html";
      } else {
        document.getElementById("passSpan").classList.remove("d-none");
      }
    } else {
      document.getElementById("InputSpan").classList.remove("d-none");
    }
}





document.getElementById("Register").addEventListener("click",Register)

