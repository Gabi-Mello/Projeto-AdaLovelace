document.getElementById("sendbutton").addEventListener ("click", validaFormulario)

function validaFormulario(){

  if (document.getElementById("nome").value != "" && 
      document.getElementById("email").value != "" &&
      document.getElementById('telefone').value != ""){
    alert("Pronto!")
  }else{
    alert("tente de novo")
  }
}

 