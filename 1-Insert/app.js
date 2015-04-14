//desde la linea de comandos
//De esta manera creamos un nuevo campo
db.Users.insert({
	//podemos poner datos numericos
	"Edad":12,
	//datos string
	"Nombre":"Juan",
	"Apellido":"Perez",
	//arreglos
	"Lenguajes":["Mongodb","SQL","Java","C++"],
	//booleanos
	"Admin":false,
	//datos embebidos
	"Tutorial":{
		"Mongodb":{
			"Alumnos":20,
			"Nivel":1,
			"Acreditados":["Juan","Miguel","Antonio"]
		},
		"SQL":{
			"Alumnos":15,
			"Nivel":1,
			"Acreditados":["Juan","Miguel","Antonio"]
		}
	}
});
//Metodo save
db.Users.save({
	"Edad":12,
	"Nombre":"Pedro",
	"Apellido":"Lopez",
	"Lenguajes":["Mongodb","Go","C#"]
});