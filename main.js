//main.js
//importamos el módulo empresa
var empresa = require('./Empresa.js');
assert= require("assert");
//array de empresas
var coleccionEmpresas = [];


for(var i=0; i<4;i++){
	var esta_empresa=new empresa.Empresa(i,0,10);
	assert(esta_empresa, "Creada empresa");
	coleccionEmpresas.push(esta_empresa);
}


coleccionEmpresas[0].calificacion=9;

//mostrar info de las empresas
for( var i in coleccionEmpresas){
	coleccionEmpresas[i].printInfo();
}

console.log("Si has llegado aquí, han pasado todos los tests");
