/*este va a ser un programa destinado a ingresar calificaciones de alumnos y calcular sus promedios anuales*/

const Prom = (n1,n2,n3,n4) => (n1 + n2 + n3 + n4) / 4;

function Alumnno(nombre, n1, n2, n3, n4, prom, cond) {
    this.nombre = nombre;
    this.nota1 = n1;
    this.nota2 = n2;
    this.nota3 = n3;
    this.nota4 = n4;
    this.promedio = prom;
    this.condicion = cond;
};

let crearnombre;
let crearclave;
let nombre;
let clave;
let cantalumnos;
let nombreal; 
let calif1; 
let calif2; 
let calif3; 
let calif4; 
let promedio; 
let estado;
let respuesta = "si"
let alumno
let curso = []
let promedios = []
let mejor
let nombreant = " "
alert("Bienvenido profesor/a!")

while (respuesta == "si" || respuesta == "no") {
    respuesta = prompt("¿Esta usted registrado/a en el sistema? (si/no)")
    switch (respuesta.toLowerCase()) {
        case "no":
            crearnombre = prompt("Ingrese su nombre completo:")
            crearclave = prompt("Ingrese una clave:")
            alert("Usuario creado!")
            break;
        case "si":
            nombre = prompt("Ingrese su nombre completo:")
            clave = prompt("Ingrese su clave:")
            if (crearnombre == nombre && crearclave == clave) {
                if (nombreant != nombre) {
                        curso = [];
                        promedios = [];
                }
                cantalumnos = parseInt(prompt("Ingrese la cantidad de alumnos:"))
                for (let i = 0; i < cantalumnos; i++) {
                    nombreal = prompt("Ingrese nombre completo del alumno:");
                    calif1 = parseFloat(prompt("Ingrese la calificacion del examen 1:"))
                    calif2 = parseFloat(prompt("Ingrese la calificacion del examen 2:"))
                    calif3 = parseFloat(prompt("Ingrese la calificacion del examen 3:"))
                    calif4 = parseFloat(prompt("Ingrese la calificacion del examen 4:"))
                    
                    promedio = Prom(calif1, calif2, calif3, calif4)
                    if (promedio >= 6) {
                        estado = "Aprobado/a"
                    } else {
                        estado = "Desaprobado/a"
                    }
                    alumno = new Alumnno(nombreal,calif1, calif2, calif3, calif4, promedio, estado)
                    console.log(alumno)
                    
                    curso.push(alumno.nombre)
                    promedios.push(alumno.promedio)
                }
                console.log("Estudiantes profesor/a" + " " + nombre + ":" + curso)
                mejor = promedios.sort((a,b)=> b - a)
                console.log("Mejor promedio de este curso:" + mejor[0])
                nombreant = nombre
                respuesta = prompt("¿Desea seguir utilizando la plataforma?(finalizar/si)")
            } else {
                alert("Usuario o contraseña incorrectos!")
            }
            break;
        default:
            alert("Ha ingresado una opción incorrecta")
            break;
    }
}


