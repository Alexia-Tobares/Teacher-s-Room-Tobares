let estado
let inicio = document.getElementById("pag")
let formulario = document.getElementById("formulario")
inicio.style.visibility = "hidden"
const nombre = document.getElementById("username");
const clave = document.getElementById("clave");
const button = document.getElementById("button");
const button2 = document.getElementById("button2");
let dato = document.getElementById("dato");

button2.addEventListener("click", (e) =>{ 
    e.preventDefault()
    localStorage.setItem("docente", nombre.value)
    localStorage.setItem("clave", clave.value)
    Toastify({
        text: "Usuario registrado!",
        duration: 3000,
        gravity: "bottom",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
        }).showToast();
})


function error(){
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Usuario o contraseña incorrecta',
        showConfirmButton: false,
        timer: 1800
      })
}

function validar(docente, nombre, clav, clave){
    ((docente == nombre.value) && (clav == clave.value)) ? (formulario.remove(), inicio.style.visibility = "visible") : error();
}

button.addEventListener("click", (e) =>{ 
    e.preventDefault()
    let docente = localStorage.getItem("docente")
    let clav = localStorage.getItem("clave")
    validar(docente, nombre, clav, clave)
    }
    
)


document.addEventListener("DOMContentLoaded", function () {
    cargarNotas();
});

function calcularPromedio() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);



    const promedio = (nota1 + nota2 + nota3 + nota4) / 4;
    promedio > 6 ? estado = "Aprobado" : estado = "Desaprobado"
    document.getElementById("resultado").innerText = "*El promedio es: " + promedio.toFixed(2) + " " + "*Condición:" + estado;

    const notasJSON = JSON.stringify({ nota1, nota2, nota3, nota4 });
    localStorage.setItem("notas", notasJSON);
}

function cargarNotas() {
    const notasJSON = localStorage.getItem("notas");
    if (notasJSON) {
        const notas = JSON.parse(notasJSON);
        document.getElementById("nota1").value = notas.nota1;
        document.getElementById("nota2").value = notas.nota2;
        document.getElementById("nota3").value = notas.nota3;
        document.getElementById("nota4").value = notas.nota4;
    }
}

dato.addEventListener("click", (e) =>{
    e.preventDefault()
    const number = 28;
    const apiUrl = `http://numbersapi.com/${number}`;

    fetch(apiUrl)
        .then(response =>
            response.ok ? response.text() : Promise.reject(`Error de red - Código: ${response.status}`)
        )
        .then(data => {
            Swal.fire({
                title: 'Dato del número ' + number,
                text: data,
                icon: 'info'
            });
        })
        .catch(error => {
            console.error(error);
        });
})