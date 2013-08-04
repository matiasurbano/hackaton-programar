google.load("visualization", "1", {packages:["corechart"]});

function graficar (columna) {
	switch (columna) {
	  case "h6_1":
		lineas_activas("Buenos Aires");
	  break;
	}
}

function lineas_activas (provincia) {
        var data = google.visualization.arrayToDataTable([
          ['Lineas', 'Hogares'],
          ['1 linea', hogarProvincia.getByField("jurisdiccion","h6_1_1",provincia)],
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


