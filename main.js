let estado
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
