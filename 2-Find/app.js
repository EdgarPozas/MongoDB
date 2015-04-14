//desde la linea de comandos

//mostrar todos los datos
db.Users.find();
//mostrar todos los datos ordenados por Id
//1 -> descendiente, -1 -> ascendiente
db.Users.find().sort({Id:1});
//Limitar los datos
db.Users.find().limit(4);
//seleccionar solo el primer dato
db.Users.findOne();
//seleccionar el dato donde Id sea 1 y Nombre Juan
//por defecto se usa el operador and
db.Users.find({Id:1,Nombre:"Juan"});
//operador or
db.Users.find({$or:[{Nombre:"Juan"},{Id:4},{Admin:false}]});