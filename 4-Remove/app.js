//desde la linea de comandos

//borrar campo donde id sea 1
db.Users.remove({Id:1});
//borrar datos de la coleccion
db.Users.remove();
//borrar coleccion
db.Users.drop();