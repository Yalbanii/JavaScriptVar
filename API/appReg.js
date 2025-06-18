const formEl = document.querySelector("form");
const divMessage = document.querySelector("#message");

/*
//fijando valor al localstorage//
localStorage.setItem("ch55", "Yalbani, Josue, Maara, etc"); //ch55 es la llave, asi se obtiene el valor de localstorage//
console.log(localStorage.getItem("ch55")); //elimina llave y valor//
localStorage.removeItem("ch55"); //eliminar todo del local//
localStorage.clear(); //borra todalas llaves//
*/

formEl.addEventListener("submit", (event)=>{
  //previene el comportamiento por defecto donde se actualiza la página
  event.preventDefault();
  //console.log(event);

  const dataArray = [...new FormData(formEl)];
  const dataObject = Object.fromEntries(dataArray);
  const dataText = JSON.stringify(dataObject); //cambia a texto para poder ser guardada y se manda al local storage://
localStorage.setItem(dataObject.email,dataText);//email es la llave, se guarda todo el form//
 /* console.log(dataObject);
  console.log(dataText);*/
  formEl.reset(); //una vez que pique submit o enter se borra el form//
  setTimeout(() => {  //intervalo de tiempo antes de ejecutar algo + informacion callback donde va lo que se va a ir. Recibe segundos x milisegundos //
    window.location.href = "../index.html"; //primero se guarda y luego redirecciona a login//
  } ,3000); 
  if(validateUserEmail(dataObject.email) && validateUserPassword(dataObject.password)){ 
    divMessage.innerHTML = "";
    succesMessage(dataObject);
    return true;
  }else{
    divMessage.innerHTML = "";
    errorMessage();
    return false;
  }
})


function validateUserEmail(email){
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValidEmail = regexEmail.test(email);
  return isValidEmail;
}

function validateUserPassword(password){
  const regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
  return regexPassword.test(password);
}

function errorMessage(){
  divMessage.innerHTML = "";
  const errorAlert = `
  <div class="alert alert-danger" role="alert">
    Algo salio mal, revisa tus datos
  </div>
`;
  divMessage.insertAdjacentHTML("beforeend", errorAlert);
}

function succesMessage(infoUser){
  const successAlert = `
  <div class="alert alert-success" role="alert">
    Hola fuiste registrado, ${infoUser.firstName} ${infoUser.lastName},
    con el email ${infoUser.email} y tu phone es ${infoUser.phoneNumber}
  </div>
`
divMessage.insertAdjacentHTML("beforeend",successAlert);
}
