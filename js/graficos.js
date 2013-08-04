google.load("visualization", "1", {packages:["corechart"]});

function graficar (columna, provincia) {
	switch (columna) {
	  case "h6_1":
		lineas_activas(provincia);
	  break;
	  case "h8_a":
		computadora_escritorio(provincia);
	  break;
	  case "h8_b":
		computadora_portatil(provincia);
	  break;
	  case "h11":
		no_internet_fija(provincia);
	  break;

	}
}

function lineas_activas (provincia) {
        var data = google.visualization.arrayToDataTable([
          ['Lineas', 'Hogares'],
          ['Ninguna PC', hogarProvincia.getByField("jurisdiccion","h6_1_1",provincia)],
          ['2 lineas', hogarProvincia.getByField("jurisdiccion","h6_1_2",provincia)],
          ['3 lineas', hogarProvincia.getByField("jurisdiccion","h6_1_3",provincia)],
          ['4 lineas', hogarProvincia.getByField("jurisdiccion","h6_1_4",provincia)],
          ['5 lineas o mas', hogarProvincia.getByField("jurisdiccion","h6_1_5",provincia)]
        ]);

	var options = {
          title: 'Lineas de celular activas por hogar'
        };

        var grafico = new google.visualization.PieChart(document.getElementById('grafico_div'));
        grafico.draw(data, options);
}

function computadora_escritorio (provincia) {
        var data = google.visualization.arrayToDataTable([
          ['Computadoras de Escritorio', 'Hogares'],
          ['Ninguna PC', hogarProvincia.getByField("jurisdiccion","h8_a_0",provincia)],
          ['1 PC', hogarProvincia.getByField("jurisdiccion","h8_a_1",provincia)],
          ['2 PCs', hogarProvincia.getByField("jurisdiccion","h8_a_2",provincia)],
          ['3 PCs o mas', hogarProvincia.getByField("jurisdiccion","h8_a_3",provincia)]
        ]);

	var options = {
          title: 'Computadoras de Escritorio por hogar'
        };

        var grafico = new google.visualization.PieChart(document.getElementById('grafico_div'));
        grafico.draw(data, options);
}

function computadora_portatil (provincia) {
        var data = google.visualization.arrayToDataTable([
          ['Computadoras Portátiles', 'Hogares'],
          ['Ninguna PC portátil', hogarProvincia.getByField("jurisdiccion","h8_b_0",provincia)],
          ['1 PC portátil', hogarProvincia.getByField("jurisdiccion","h8_b_1",provincia)],
          ['2 PCs portátiles', hogarProvincia.getByField("jurisdiccion","h8_b_2",provincia)],
          ['3 PCs o mas portátiles', hogarProvincia.getByField("jurisdiccion","h8_b_3",provincia)]
        ]);

	var options = {
          title: 'Computadoras portátiles por hogar'
        };

        var grafico = new google.visualization.PieChart(document.getElementById('grafico_div'));
        grafico.draw(data, options);
}

function no_internet_fija (provincia) {
        var data = google.visualization.arrayToDataTable([
          ['Motivos', 'Hogares'],
          ['Motivos económicos', hogarProvincia.getByField("jurisdiccion","h11_1",provincia)],
          ['No lo necesitan o no les interesa', hogarProvincia.getByField("jurisdiccion","h11_2",provincia)],
          ['No sabe usarlo', hogarProvincia.getByField("jurisdiccion","h11_3",provincia)],
          ['No llega el servicio', hogarProvincia.getByField("jurisdiccion","h11_4",provincia)],
	  ['Accede a internet Móvil', hogarProvincia.getByField("jurisdiccion","h11_5",provincia)],
          ['Limitaciones/problemas de la empresa proveedora', hogarProvincia.getByField("jurisdiccion","h11_6",provincia)],
          ['Espera tener en el corto plazo', hogarProvincia.getByField("jurisdiccion","h11_7",provincia)],
          ['Robo o miedo al robo del equipamento', hogarProvincia.getByField("jurisdiccion","h11_8",provincia)],
          ['Mudanza', hogarProvincia.getByField("jurisdiccion","h11_9",provincia)],
          ['Seguridad y cuidado de los menores', hogarProvincia.getByField("jurisdiccion","h11_10",provincia)],
          ['Limitaciones de tiempo de los integrantes del hogar', hogarProvincia.getByField("jurisdiccion","h11_11",provincia)],
          ['Accede en otro lugar', hogarProvincia.getByField("jurisdiccion","h11_12",provincia)],
          ['Otro Motivo', hogarProvincia.getByField("jurisdiccion","h11_13",provincia)],
          ['NS/NC', hogarProvincia.getByField("jurisdiccion","h11_99",provincia)]
        ]);

	var options = {
          title: 'Motivos por los cuales no hay internet fija por hogar'
        };

        var grafico = new google.visualization.PieChart(document.getElementById('grafico_div'));
        grafico.draw(data, options);
}

