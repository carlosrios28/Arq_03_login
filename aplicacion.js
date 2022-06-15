var listusuario = require('./basedatos');
var btlogin =document.getElementById('login');
var cbtn =document.getElementById('cbtn');
var usname = document.getElementById("email");
var pass = document.getElementById("pwd1");  


function login(){
    var uname = document.getElementById("email").value;
    var pwd = document.getElementById("pwd1").value;  
    // var listusuario = {carlos:'rios', paul:'cardenas', maxi: 'elsezar', patricia: 'yañez'};
    var clave = siExiteClave(listusuario,uname);
    var valor = siExisteValor(listusuario, uname, pwd);
    
    console.log(verificarnombre(uname));

    //validacion del usuario y password 
    if(uname == ''){
        alert('por favor ingrese su nombe');
    }else if(clave){
        console.log(clave);
        alert('usuario incorrecto o no registrado ');
    }else if(pwd == ''){
        alert('ingrese su password');
    }else if(valor){
        alert('ingrese un password valido...');
    }
    else{
        alert('gracia por ingresar al sito web');
                       
        pass.value = '';
        habilitarBtn(btlogin, true);
        habilitarBtn(cbtn, false);

    }
}

// validad usuario y password
function siExiteClave(listusuario,uname){
    if(listusuario[uname] == undefined){
        return true;
    }else{
        return false;
    }
}
function siExisteValor(listusuario, uname, pwd){
  let clave = listusuario[uname]
    if(pwd == clave){
        valor = false;                
    }else{
        return true;
    }
   
}
// reseteo de los campos 
function clearFunc(){
    usname.value = '';
    pass.value ='';
    
}
//Cerrar
function cerrar(){
    console.log('habilita el login');    
    habilitarBtn(btlogin, false);
    habilitarBtn(cbtn, true);
    clearFunc();
    
    
}
// habilito/desabilito boton login
function habilitarBtn(btn, xvalor){
btn.disabled = xvalor;
}

function verificarnombre(uname){

}