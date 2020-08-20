/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let sexo;
	let edad;
	let cantidaddemujeres=0;
	let hombremaspesado;
	let pesomax=0;
	let sumaedades=0;
	let promedio;
	
	
	for (let i = 0; i < 5; i++)
	{
		nombre=prompt("Ingrese su nombre ");
		while(!(isNaN(nombre)))
		{
			nombre=prompt("Error. Ingrese un nombre válido ");
		}

		peso=parseFloat(prompt("Ingrese su peso "));
		
		while(peso<0 || isNaN(peso))
		{ 
			peso=parseFloat(prompt("El peso es inválido. Ingréselo nuevamente "));

		}
		//NO PONGAS ; DESPUES DE UN WHILE
		
		sexo = prompt("Ingrese su sexo (m o f)").toLowerCase();
		
		while(sexo != 'm' && sexo != 'f')
		{
			sexo = prompt("El sexo no es válido. Ingréselo nuevamente ").toLowerCase();
		}

		edad=parseInt(prompt("Ingrese su edad "));
		while(isNaN(edad) || edad <0)
		{
			edad = parseInt(prompt("La edad no es válida. Ingrésela nuevamente "));

		}
		
		if(sexo == 'f')

		//DEJA DE PONER PUNTO Y COMAA
		//usa bien el while 
		//PONE CERO EN LA VARIABLE 
		{
			cantidaddemujeres++;
		}

		if(pesomax < peso && sexo == 'm')
		{
			pesomax = peso;
			hombremaspesado = nombre;
		}

		//sumar +=
		sumaedades += edad;
	}
	promedio = sumaedades/5;
	
//EJERCICIO A
alert("La cantidad de mujeres es " + cantidaddemujeres);
//EJERCICIO C
alert("El hombre más pesado es " + hombremaspesado + " y su peso es " + pesomax);
//EJERCICIO B 
alert ("El promedio total de las edades es " + promedio);
}
