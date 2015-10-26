//Empresa.js
//creamos una clase  que representa a una Empresa
var Empresa = function(codigo,nombre,calificacion){

	this.codigo;
	this.nombre;
	this.calificacion;
	//metodo que imprime la información una empresa
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
//exportamos el módulo.
module.exports.Empresa = Empresa;
