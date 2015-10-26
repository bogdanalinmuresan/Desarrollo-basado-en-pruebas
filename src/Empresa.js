//Empresa.js

var Empresa = function(codigo,nombre,calificacion){

	this.codigo;
	this.nombre;
	this.calificacion;

	this.printInfo=function(){
		console.log('el codigo de la empresa es:', codigo);
		console.log('el nombre de la empresa es:', nombre);
		console.log('el calificacion de la empresa es:', calificacion);
	}

	this.test=function(){
		console.log('testing');
	}

	return this;

}
module.exports.Empresa = Empresa;
