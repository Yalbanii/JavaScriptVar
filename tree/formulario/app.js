const formEl = document.querySelector("form");
const divMessage =  document.querySelector("#message");

/*const errorAlert = `
<div class="alert alert-danger" role="alert">
  A simple success alert—check it out!
</div>`*/

/*const successAlert = `
<div class="alert alert-success" role="alert">
  Hola, fuiste registrado, 
</div>`*/

formEl.addEventListener("submit", (event) => { 
event.preventDefault (); //omite el comportamiento por default de reiniciar con submit//

/* const firstName = event.target.elements["firstName"].value;
//target tiene dentro los inputs en array//
const lastName = event.target.elements["lastName"].value;
const phoneNumber = event.target.elements["phoneNumber"].value;
const exampleInputEmail1 = event.target.elements["exampleInputEmail1"].value;
const exampleInputPassword1 = event.target.elements["exampleInputPassword1"].value;
*/
//formData unir valores como array de arrays
const dataArray = [...new FormData(formEl)];
//console.log(dataArray);//
  const dataObject = Object.fromEntries(dataArray);
//cada elemento que encuentre sera la llave del elemento//  
  if(validateUserEmail(dataObject.email) && validateUserPassword(dataObject.password)){
    divMessage.innerHTML = "";
    succesMessage(dataObject);
    return;
  }else{
    divMessage.innerHTML = "";
    errorMessage();
    return;
  }
})

/*console.log(validateUserEmail(dataObject.exampleInputEmail1));
console.log(validateUserPassword(dataObject.exampleInputPassword1));*/
/*ESTO ES PARA VALIDAR
*/
function validateUserEmail(email){
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const isValidEmail = regexEmail.test(email);
  return isValidEmail;
}
function validateUserPassword(password){
  const regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
  return regexPassword.test(password);
} ///^(?=.*[A-Z]).{8,}$/ 
// /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/ regix mas compleja//
function errorMessage(){
  divMessage.innerHTML ="";
  const errorAlert = `
  <div class="alert alert-danger" role="alert">
  Algo salio mal, revisa tus datos
</div>`
divMessage.insertAdjacentHTML("beforeend", errorAlert);
}
function succesMessage(infoUser){
  const successAlert = `
  <div class="alert alert-success" role="alert">
  Hola, fuiste registrado, ${infoUser.firstName} ${infoUser.lastName}, con el email ${infoUser.email} y tu phone es ${infoUser.phoneNumber}
</div>`

divMessage.insertAdjacentHTML("beforeend", successAlert);
}