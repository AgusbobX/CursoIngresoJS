function mostrar()
{
//tomo la edad
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
  switch(mesDelAño) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
      alert("Tiene 31 dias")
      break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
      alert("Tiene 30 dias");
      break;
    case "Febrero":
      alert("Tiene 29 dias");
      break;
  }
}//FIN DE LA FUNCIÓN
