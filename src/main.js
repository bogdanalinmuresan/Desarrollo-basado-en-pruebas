//main.js

var empresa = require('./Empresa.js');

var coleccionEmpresas = [];

for(var i=0; i<4;i++){
	var esta_empresa=new empresa.Empresa(i,0,10);
	coleccionEmpresas.push(esta_empresa);
}

coleccionEmpresas[0].calificacion=9;

for( var i in coleccionEmpresas){
	coleccionEmpresas[i].printInfo();
}
