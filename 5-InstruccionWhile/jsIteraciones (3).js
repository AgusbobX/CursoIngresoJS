function mostrar()
{

//var clave = prompt("ingrese el número clave.");
	var clave;
	var intentos;
	var flag;

	intentos=0;
	flag=false;
	clave=prompt("Ingrese el numero clave");

	while(clave!="utn750")
	{
		alert("Clave incorrecta");
		clave=prompt("Ingrese el numero clave");
		intentos=intentos+1;
		if(intentos==2)
		{
			flag=true;
			alert("Clave incorrecta mas de tres veces");
			break;
		}
	}
	if(flag==false)
	{
		alert("Bienvenido al sistema");
	}



}//FIN DE LA FUNCIÓN
