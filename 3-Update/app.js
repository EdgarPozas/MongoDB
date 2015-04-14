//desde la linea de comandos
//update

//actualizar con sobreescruitura
db.Users.update({
	//condicion
	{Id:1},
	//Actualizar
	{
		Nombre:"Juan",
		Edad:12,
		Tutoriales:["Ruby","Rails","SQL"]
	}
});
//actualizar solo ciertos campos
db.Users.update({
	//condicion
	{Id:1},
	//actualizar
	{
		//campos
		$set:{
			Nombre:"Pepe",
			Edad:17
		}
	}
});
//incremenar
db.Users.update({
	//condicion
	{Id:1},
	//actualizar
	{
		//incrementar
		$inc:{
			//en cuanto va a incrementar 
			Edad:1
		}
	}
});
//cambiar nombre campos
db.Users.update({
	//condicion
	{Id:1},
	//actualizar
	{
		//cambiar nombre al campo
		//primero nombre y luego el nombre nuevo
		$rename:{"Edad":"Age"}
	}
});
//agregar datos a arreglos
db.Users.update({
	//condicion
	{Id:1},
	//actualizar
	{
		//un solo valor 
		$push:{
			//nombre arreglo 	valor
			Tutoriales:"CSS"
		}
		//mas valores al arreglo
		$push:{
			Tutoriales:{$each:["HTML","Javascript","Java"]}
		}
	}
});
//eliminar el ultimo dato
db.Users.update({
	//condicion
	{Id:1},
	//actualizar
	{
		//ultimo dato
		$pop:{Tutoriales:1}
		//primero
		$pop:{Tutoriales:-1}
	}
});
//quitar elementos
db.Users.update({
	//condición
	{Id:1},
	//actualizar
	{
		//borrar un dato
		$pull:{
			//en cuanto va a quitar
			Tutoriales:"CSS"
		}
	}
});
//quitar mas elementos
db.Users.update({
	//condicion
	{Id:1},
	//actualizar
	{
		//quitar varios elementos
		$pullAll:{Tutoriales:["HTML","Javascript","Java"]}
	}
});
