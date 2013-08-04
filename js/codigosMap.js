var codigosMapper = {
	values : [	
		{key: "h6" , value : "tiene lineas activas"},
		{key: "h6_1" , value : "cantidad lineas activas"},
		{key: "h6_1_1" , value : "1 linea activa"},
		{key: "h6_1_2" , value : "2 lineas activas"},
		{key: "h6_1_3" , value : "3 lineas activas"},
		{key: "h6_1_4" , value : "4 lineas activas"},
		{key: "h6_1_5" , value : "5 o mas lineas activas"},
		{key: "h7" , value : "tiene computadoras"},
		{key: "h8_a" , value : "cantidad computadoras escritorio"},
		{key: "h8_a_0" , value : "ninguna computadora escritorio"},
		{key: "h8_a_1" , value : "1 computadora escritorio"},
		{key: "h8_a_2" , value : "2 computadoras escritorio"},
		{key: "h8_a_3" , value : "3 o mas computadoras escritorio"},
		{key: "h8_b" , value : "cantidad computadoras portatiles"},
		{key: "h8_b_0" , value : "ninguna computadora portatil"},
		{key: "h8_b_1" , value : "1 computadora portatil"},
		{key: "h8_b_2" , value : "2 computadoras portatiles"},
		{key: "h8_b_3" , value : "3 o mas computadoras portatiles"},
		{key: "h9_1" , value : "acceso a internet movil"},
		{key: "h9_2" , value : "acceso a internet fija"},
		{key: "h11_0" , value : "sin internet fija por motivos economicos"},
		{key: "h11_1" , value : "sin internet fija por no necesitan o no interesa"},
		{key: "h11_2" , value : "sin internet fija por no saben usarlo"},
		{key: "h11_3" , value : "sin internet fija por no llega servicio"},
		{key: "h11_4" , value : "sin internet fija por accede por internet movil"},
		{key: "h11_5" , value : "sin internet fija por limitaciones del proveedor"},
		{key: "h11_6" , value : "sin internet fija por espera tener en corto plazo"},
		{key: "h11_7" , value : "sin internet fija por robo o miedo al robo del equipamiento"},
		{key: "h11_8" , value : "sin internet fija por mudanza"},
		{key: "h11_9" , value : "sin internet fija por seguridad y cuidado menores"},
		{key: "h11_10" , value : "sin internet fija por limitacion de tiempo"},
		{key: "h11_11" , value : "sin internet fija por accede en otro lugar"},
		{key: "h11_12" , value : "sin internet fija por otro motivo"}],
    getByField: function(field,returnField, valueId){
        return _.filter(this.values,function(v){ 
        	return  (v[field]==valueId);
        })[0][returnField];
    }
	
}



// Si quiero traerme el TEXTO por valor h6 lo hago asi... 
//---------------------------------------------------------

// codigosMapper.getByField("key","value","h6")