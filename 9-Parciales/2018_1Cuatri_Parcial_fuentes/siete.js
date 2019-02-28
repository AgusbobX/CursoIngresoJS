function mostrar()
{
var contador = 0;
var totalnotas = 0;
var sexo;
var promedio;
var notabaja;
var varonesnota6 = 0;
var nota;

	while(contador < 5)
	{
		contador++;
		nota = prompt("Ingresar nota del alumno "+contador);
		nota = parseInt(nota);
		while(nota<0 || nota>10 || isNaN(nota) == true)
		{
			nota = prompt("Reingrese la nota entre 0 y 10 para el alumno "+contador);
			nota = parseInt(nota);
		}
		if(contador == 1)
		{
      notabaja = nota;
    }
		else {
			if(nota < notabaja)
			{
        notabaja = nota;
      }
		}
        sexo=prompt("Ingresar sexo del alumno con las letras F o M");
		while(sexo !="F" && sexo !="M")
		{
			sexo = prompt("Reingrese el sexo del alumno (F o M)");
		}
		if(nota >= 6 && sexo == "M")
		{
			varonesnota6++;
		}
    totalnotas = totalnotas+nota;
    totalnotas = parseInt(totalnotas);
		promedio = totalnotas/contador;
	}
	alert("El promedio de las notas totales es: "+promedio);
	alert("La nota mas baja es: "+notabaja);
	alert("Varones con nota mayor o igual a 6: "+varonesnota6);
}
