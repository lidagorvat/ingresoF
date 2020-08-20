/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexo;
	let destino;
	let temporada;
	let cantpasajeros;
	let bariloche=0;
	let cataratas=0;
	let salta=0;
	let lugarmáselegido1;
	let lugarmáselegido2;
	let respuesta;
	let cantidaddevisitas;
	let sexotitularmáspasajeros;
	let cantidadmáspasajeros=0;
	let invierno=0;
	let personasinvierno=0;
	let promedio;


	let flagbariloche=0;
	let flagcataratas=0;
	let flagsalta=0;
	let sumaflags;

	do 
	{
		sexo=prompt("Ingrese el sexo del pasajero (m o f) ").toLowerCase();
		while(sexo != 'f' && sexo != 'm')
		{
			sexo=prompt("El sexo ingresado no es válido. Inténtelo nuevamente ").toLowerCase();
		}

		destino=prompt("Ingrese el destino a elegir (Bariloche, Cataratas o Salta) ").toLowerCase();
		while(destino !='bariloche' && destino !='cataratas' && destino !='salta') 
		{
			destino=prompt("El destino es incorrecto. Ingréselo nuevamente. ").toLowerCase();
		}

		temporada=prompt("Ingrese la temporada en la que desea viajar (Otoño, invierno, verano o primavera) ").toLowerCase();
		while(temporada !='otoño' && temporada !='invierno' && temporada !='verano' && temporada !='primavera')
		{
			temporada=prompt("La temporada ingresada no es válida. Ingréselo nuevamente. ").toLowerCase();
		}

		cantpasajeros=parseInt(prompt("Ingrese la cantidad de pasajeros (mayor a cero) ").toLowerCase());
	
		while(cantpasajeros <=0)
		{
			cantpasajeros=parseInt(prompt("La cantidad ingresada no es válida. Inténtelo nuevamente ").toLowerCase());
		}

		respuesta=prompt("¿Desea ingresar otro viaje? Ingrese 'si' para realizarlo ").toLowerCase();

		if(destino == 'bariloche') 
		{
			bariloche++;
		}
		else if(destino == 'cataratas')
		{
			cataratas++;
		}
		else(destino == 'salta')
		{
			salta++;
		}

		if(cantidadmáspasajeros<cantpasajeros)
		{
			cantidadmáspasajeros=cantpasajeros;

			if(sexo=='f')
			{
				sexotitularmáspasajeros='femenino';
			}
			if(sexo='m')
			{
				sexotitularmáspasajeros='masculino';
			}
		}
		
		if(temporada=='invierno')
		{
			invierno++;
			personasinvierno+=cantpasajeros;
		}
		alert("caca");
	}while (respuesta == 'si');

	

	if(bariloche>=salta && bariloche>=cataratas)
	{
		flagbariloche=1;
		cantidaddevisitas=bariloche;
	}
	if(salta>=bariloche && salta>=cataratas)
	{
		flagsalta=1;
		cantidaddevisitas=salta;
	}
	if(cataratas>=bariloche && cataratas>=salta)
	{
		flagcataratas=1;
		cantidaddevisitas=cataratas;
	}

	sumaflags=flagbariloche + flagsalta + flagcataratas;

	//a

	if(sumaflags==1)
	{
		if(flagbariloche==1)
		{
			lugarmáselegido1=="Bariloche";
		}
		else if(flagsalta==1)
		{
			lugarmáselegido1=="Salta";
		}
		else
		{
			lugarmáselegido1=="Cataratas";
		}
		console.log("El destino más visitado es " + lugarmáselegido1);
	}

	if(sumaflags==2)
	{
		if(flagbariloche==1)
		{
			lugarmáselegido1=="Bariloche";
		}
		if(flagsalta==1)
		{
			if(lugarmáselegido1=="Bariloche")
			{
				lugarmáselegido2=="Salta";
			}
			else
			{
				lugarmáselegido1=="Salta";
			}
		if(flagcataratas==1)
		{
			lugarmáselegido2=="Cataratas";
		}
		}
		console.log("Los destinos más visitados son " + lugarmáselegido1 + " y " + lugarmáselegido2);
	}
	
	if(sumaflags==3)
	{
		console.log("Todos los destinos tuvieron " + cantidaddevisitas + " cantidad de visitas.");
	}
	
	 //b

	 console.log("El sexo del titular que lleva más pasajeros es " + sexotitularmáspasajeros);

	 //c
	 if (invierno!=0)
	 {
		promedio=personasinvierno/invierno;
	 }
	 else 
	 {
		 promedio=0
	 }
	console.log("El promedio de gente que viajo en invierno es " + promedio);
}




