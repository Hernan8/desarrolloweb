function startTime(){
today=new Date();
h=today.getHours();
m=today.getMinutes();
s=today.getSeconds();
m=checkTime(m);
s=checkTime(s);
document.getElementById('reloj').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);}
function checkTime(i)
{if (i<10) {i="0" + i;}return i;}
window.onload=function(){startTime();}






function confirmClose() {        
    alert("Error: 107x.  Un virus ha infestado su disco duro, es necesario eliminar todos los archivos y formatear la unidad C")         
    if (confirm("Informe a su vendedor de este error."))
    alert('El navegador se cerrará ya que es imposible comunicarse con ningún sitio web.'); 
    else 
    alert('Es imposible recuperar el sistema, se comenzará a eliminar archivos.');
    {              
    parent.close();        
    }
    }




var muestra;
function makeArray(n){this.length = n;
for (i=1;i<=n;i++){this[i]=0;}
return this;}

function Muestrafecha() {
//arreglo de los meses
var meses = new makeArray(12);
meses[0]  = "Enero";
meses[1]  = "Febrero";
meses[2]  = "Marzo";
meses[3]  = "Abril";
meses[4]  = "Mayo";
meses[5]  = "Junio";
meses[6]  = "Julio";
meses[7]  = "Agosto";
meses[8]  = "Septiembre";
meses[9]  = "Octubre";
meses[10] = "Noviembre";
meses[11] = "Diciembre";

//arreglo de los dias
var dias_de_la_semana = new makeArray(7);
dias_de_la_semana[0]  = "Domingo";
dias_de_la_semana[1]  = "Lunes";
dias_de_la_semana[2]  = "Martes";
dias_de_la_semana[3]  = "Miércoles";
dias_de_la_semana[4]  = "Jueves";
dias_de_la_semana[5]  = "Viernes";
dias_de_la_semana[6]  = "S&#225;bado";

var today = new Date();
var day   = today.getDate();
var month = today.getMonth();
var year  = today.getYear();
var dia = today.getDay();
if (year < 1000) {year += 1900; }

// mostrar la fecha 
return( "Hoy es " + dias_de_la_semana[dia] + ", " + day + " de " + meses[month] + " del " + year);
}
