var assert = require('assert');


empresa = require(__dirname+"/../main.js");

describe('Empresa', function(){//Describe un módulo llamado Empresa.
	// Testea que se haya cargado bien la librería
	describe('Carga', function(){ //Describe un submódulo llamado Carga
  	it('should be loaded', function(){ //Describe el nombre de la prueba unitaria
  		assert(empresa, "Cargado");
  	});
   var esta_empresa=new empresa.Empresa(i,0,10);
   it('crear nueva empresa', function(){
     assert(esta_empresa,"creada la empresa");
   });

	});

});

/*
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
*/
