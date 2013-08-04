      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
	var datos = [234,34,565,435,600];
	lineas_activas(datos);
      }

function lineas_activas (datos) {
        var data = google.visualization.arrayToDataTable([
          ['Lineas', 'Hogares'],
          ['1 linea', datos[0]],
          ['2 lineas', datos[1]],
          ['3 lineas', datos[2]],
          ['4 lineas', datos[3]],
          ['5 lineas o mas', datos[4]]
        ]);

	var options = {
          title: 'Lineas de celular activas por hogar'
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
}


