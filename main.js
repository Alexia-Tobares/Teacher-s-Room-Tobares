/*este va a ser un programa destinado a ingresar calificaciones de alumnos y calcular sus promedios anuales*/

const Prom = (n1,n2,n3,n4) => (n1 + n2 + n3 + n4) / 4;
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

alert("Bienvenido profesor/a!")
let respuesta = prompt("¿Esta usted registrado/a en el sistema? (si/no)")
while (respuesta == "si" || respuesta == "no") {
    switch (respuesta.toLowerCase()) {
        case "no":
            crearnombre = prompt("Ingrese su nombre completo:")
            crearclave = prompt("Ingrese una clave:")
            alert("Usuario creado!")
            respuesta = prompt("¿Esta usted registrado/a en el sistema? (si/no)")
            break;
        case "si":
            nombre = prompt("Ingrese su nombre completo:")
            clave = prompt("Ingrese su clave:")
            if (crearnombre == nombre && crearclave == clave) {
                cantalumnos = parseInt(prompt("Ingrese la cantidad de alumnos:"))
                for (let i = 1; i = cantalumnos; i++) {
                    nombreal = prompt("Ingrese nombre completo del alumno:");
                    calif1 = parseFloat(prompt("Ingrese la calificacion del examen 1:"))
                    calif2 = parseFloat(prompt("Ingrese la calificacion del examen 2:"))
                    calif3 = parseFloat(prompt("Ingrese la calificacion del examen 3:"))
                    calif4 = parseFloat(prompt("Ingrese la calificacion del examen 4:"))
                    promedio = Prom(calif1, calif2, calif3, calif4)
                    if (promedio >= 6) {
                        estado = "Aprobado"
                    } else {
                        estado = "Desaprobado"
                    }
                    console.log(i + " " + nombreal + ":" + "Promedio:" + promedio + " " + "Condición:" + estado)
                    

                }
            } else {
                alert("Usuario o contraseña incorrectos!")
            }
            break;
        default:
            alert("Ha ingresado una opción incorrecta")
            break;
    }
}


