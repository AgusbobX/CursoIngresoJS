/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe = parseInt(document.getElementById("importe").value);
    var descuento = 25;
    var resultado1 = parseInt(importe) * parseInt(descuento);
    var resultado2 = parseInt(resultado1) / 100;
    var resultado3 = parseInt(importe) - parseInt(resultado2);
    document.getElementById("resultado").value = resultado3;
}
