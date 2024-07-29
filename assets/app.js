let inputCorreo = document. getElementById("formControlInput1")
let inputMensaje = document.getElementById("formControlTextarea1")
let mensajeCorreo = document.getElementById("mensajeCorreo")
let mensajeTextArea = document.getElementById("mensajeTextArea")
let formulario = document.getElementById("formulario")
let mensaje = document.getElementById("mensaje")
let limpiar = document.getElementById("btnLimpiar")

function limpiarErrores() {
    mensajeCorreo.textContent = ""
    mensajeTextArea.textContent = ""
   
}

formulario.addEventListener("submit", function(e){
    e.preventDefault()
    limpiarErrores();
    let valido = true
    if(inputCorreo.value == ""){
        mensajeCorreo.textContent = "El campo de correo es obligatorio"
        mensajeCorreo.classList.add("bg-danger")
        mensajeCorreo.classList.add("text-light")
        valido = false
        mensaje.classList.add("d-none")

    }

    if(inputMensaje.value == "") {
        mensajeTextArea.textContent = "El campo de mensaje es obligatorio"
        mensajeTextArea.classList.add("bg-danger")
        mensajeTextArea.classList.add("text-light")
        valido = false
        mensaje.classList.add("d-none")

    }

    if(valido){
        mensaje.classList.remove("d-none")
       
    }
})
limpiar.addEventListener("click", function(){
    limpiarErrores()
    inputCorreo.value = ""
    inputMensaje.value = ""
    mensaje.classList.add("d-none")
}
)

let btnEspañol = document.getElementById("btnEspañol")
let btnEnglish = document.getElementById("btnEnglish")
let texto = document.getElementById("texto")
let contacto = document.getElementById("contactame")

btnEspañol.addEventListener("click", function(){
    texto.innerHTML = `Apasionada y dedicada <span class="span">desarrolladora web </span> con experiencia en la creación de interfaces de usuario <span class="span"> dinámicas y funcionales</span>. Soy capaz de trabajar tanto de manera independiente como en equipo, priorizando la usabilidad y la <span class="span"> experiencia del usuario  </span>en cada proyecto.`
    contacto.innerHTML = `¡Contáctame!`

})

btnEnglish.addEventListener("click", function(){
    texto.innerHTML = `Passionate <span class="span">web developer </span> with experience in the creation of user interfecas <span class="span"> dynamic and functional</span>. I am able to work both independently and as part of a team, prioritizing the usage and the <span class="span"> user experience  </span>in every project.`
    contacto.innerHTML = `Contact me!`

})

