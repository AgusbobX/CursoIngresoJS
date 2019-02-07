/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo = parseInt(document.getElementById("sueldo").value);
    var aumento = 10
    var resultado1 = parseInt(sueldo) / parseInt(aumento);
    var resultado2 = parseInt(resultado1) + parseInt(sueldo)
    document.getElementById("resultado").value = resultado2;    
}
