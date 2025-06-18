const loginForm = document.querySelector("form");
const alertError = document.querySelector("#alert_error");
const alertSuccess = document.querySelector("#alert_success"); //seleccionado por ID//

const dataUser = {
  email: "yarandacardona@gmail.com",
  password: "Yalbani123+"
}


loginForm.addEventListener("submit", (e)=>{
  //previene el comportamiento por defecto donde se actualiza la página
  e.preventDefault();
  alertSuccess.classList.add("hidden");
  alertError.classList.add("hidden");
 // console.log(event);//
  const loginData =Object.fromEntries([...new FormData(loginForm)]); // aqui obtenemos la logica//
const localData = JSON.parse(localStorage.getItem(loginData.email));
loginForm.reset() //PARA BORRAR FORMULARIO ANTES DE CAMBIAR//
console.log(localData); //obtener y transformar data local en objeto js//
  //  console.log(loginData) ver si los valores entran bien//
  //Comprobando que la data local exista//

 // const dataText = JSON.stringify(dataObject); //cambia a texto para poder ser guardada y se manda al local storage://
//localStorage.setItem(dataObject.email,dataText);//email es la llave, se guarda todo el form//
 /* console.log(dataObject);
  console.log(dataText);*/
  loginForm.reset(); //una vez que pique submit o enter se borra el form//
  setTimeout(() => {  //intervalo de tiempo antes de ejecutar algo + informacion callback donde va lo que se va a ir. Recibe segundos x milisegundos //
    window.location.href = "/pages/product.html"; //primero se guarda y luego redirecciona a login//
  } ,3000); 


if(localData === null){
  alertError.classList.remove("hidden")
  return;
}//EVALUAMOS CONTRASENIA//
if(loginData.password === localData.password){
  alertSuccess.classList.remove("hidden");
 // console.log(alertSucc.classList); //nos deja ver todas las clases que tenemos//
} else{
alertError.classList.remove("hidden");
}

})

/*if(loginData.email === dataUser.email && loginData.password === dataUser.password){
  alertSuccess.classList.remove("hidden");
 // console.log(alertSucc.classList); //nos deja ver todas las clases que tenemos//
} else{
alertError.classList.remove("hidden");
}

//que si exista la llave que mandamos a llamar// EVALIAMOS SOLO EMAIL
})*/ 

  
  /*login*/ 


  /*const dataObject = Object.fromEntries(dataArray);
  console.log(dataArray);

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
}*/