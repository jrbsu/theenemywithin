var seatsChart;

var seatsChartData = [
    {
        "party": "European People's Party",
        "seats": 274,
        "description": "EPP"
    },
    {
        "party": "Social and Democrats",
        "seats": 195,
        "description": "S&D"
    },
    {
        "party": "Alliance of Liberals and Democrats for Europe",
        "seats": 85,
        "description": "ALDE"
    },
    {
        "party": "The Greens-European Free Alliance",
        "seats": 58,
        "description": "G-EFA"
    },
    {
        "party": "European Conservatives and Reformists",
        "seats": 56,
        "description": "ECR"
    },
    {
        "party": "European United Left-Nordic Green Left",
        "seats": 35,
        "description": "EUL-NGL"
    },
    {
        "party": "Europe of Freedom and Democracy",
        "seats": 33,
        "description": "EFD"
    },
    {
        "party": "Non-Inscrits",
        "seats": 30,
        "description": "NI"
    }
];


AmCharts.ready(function () {
// PIE CHART
seatsChart = new AmCharts.AmPieChart();
   
seatsChart.dataProvider = seatsChartData;
seatsChart.titleField = "party";
seatsChart.valueField = "seats";
seatsChart.descriptionField = "description";
seatsChart.sequencedAnimation = true;
seatsChart.startEffect = "bounce";
seatsChart.innerRadius = "0%";
seatsChart.startDuration = 2;
seatsChart.labelRadius = 15;
seatsChart.labelText = "[[description]]: [[value]]";
seatsChart.balloonText = "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>";
seatsChart.colors = ["#0099ff", "#ff0000", "#ffff00", "#009900", "#0000cc", "#990000", "#ff6600", "#999999"]
    
// WRITE                                 
seatsChart.write("seatsChartDiv");
});

var partiesChart;

            var partiesChartData = [
                {
                    "year": "1979",
                    "farleft": 44,
                    "SD": 113,
                    "RG": 0,
                    "Greens": "null",
                    "Independent": 20,
                    "LC": 40,
                    "CD": 107,
                    "Eurosceptic": "null",
                    "CN": 0,
                    "farright": 22
                },
                {
                    "year": "1984",
                    "farleft": 41,
                    "SD": 130,
                    "RG": 20,
                    "Greens": 0,
                    "Independent": 7,
                    "LC": 31,
                    "CD": 110,
                    "Eurosceptic": "null",
                    "CN": 29,
                    "farright": 16
                },
                {
                    "year": "1989",
                    "farleft": 42,
                    "SD": 180,
                    "RG": 13,
                    "Greens": 30,
                    "Independent": 12,
                    "LC": 49,
                    "CD": 121,
                    "Eurosceptic": 0,
                    "CN": 20,
                    "farright": 17
                },
                {
                    "year": "1994",
                    "farleft": 28,
                    "SD": 198,
                    "RG": 0,
                    "Greens": 23,
                    "Independent": 27,
                    "LC": 52,
                    "CD": 184,
                    "Eurosceptic": 19,
                    "CN": 26,
                    "farright": 0
                },
                {
                    "year": "1999",
                    "farleft": 42,
                    "SD": 180,
                    "RG": 48,
                    "Greens": 0,
                    "Independent": 27,
                    "LC": 50,
                    "CD": 233,
                    "Eurosceptic": 16,
                    "CN": 30,
                    "farright": "null"
                },
                {
                    "year": "2004",
                    "farleft": 41,
                    "SD": 200,
                    "RG": 42,
                    "Greens": "null",
                    "Independent": 29,
                    "LC": 88,
                    "CD": 268,
                    "Eurosceptic": 37,
                    "CN": 27,
                    "farright": "null"
                },
                {
                    "year": "2009",
                    "farleft": 35,
                    "SD": 184,
                    "RG": 55,
                    "Greens": "null",
                    "Independent": 26,
                    "LC": 84,
                    "CD": 265,
                    "Eurosceptic": 32,
                    "CN": 0,
                    "farright": "null"
                },
            ];

            AmCharts.ready(function () {
                // SERIAL CHART
                partiesChart = new AmCharts.AmSerialChart();
                partiesChart.pathToImages = "../amcharts/images/";
                partiesChart.dataProvider = partiesChartData;
                partiesChart.categoryField = "year";
				partiesChart.colors = ["#660000", "#ff0000", "#009900", "#00ff00", "#999999", "#ffff00", "#0066ff", "#ff9900", "#000099", "#000000"];
                partiesChart.rotate = false;

                // AXES
                // Category
                var categoryAxis = partiesChart.categoryAxis;
                categoryAxis.gridAlpha = 0.07;
                categoryAxis.axisColor = "#DADADA";
                categoryAxis.startOnAxis = true;

                // Value
                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.title = "percentage of seats"; // this line makes the chart "stacked"
                valueAxis.stackType = "100%";
                valueAxis.gridAlpha = 0.07;
                partiesChart.addValueAxis(valueAxis);

                // GRAPHS
                // first graph
                var graph = new AmCharts.AmGraph();
                graph.type = "line"; // it's simple line graph
                graph.title = "Far Left";
                graph.valueField = "farleft";
                graph.lineAlpha = 0;
                graph.fillAlphas = 0.6; // setting fillAlphas to > 0 value makes it area graph
                graph.balloonText = "[[value]]";
                partiesChart.addGraph(graph);

                // second graph
                graph = new AmCharts.AmGraph();
                graph.type = "line";
                graph.title = "Socialists, Social Democrats";
                graph.valueField = "SD";
                graph.lineAlpha = 0;
                graph.fillAlphas = 0.6;
                graph.balloonText = "[[value]]";
                partiesChart.addGraph(graph);

                // third graph
                graph = new AmCharts.AmGraph();
                graph.type = "line";
                graph.title = "Regionalist Greens";
                graph.valueField = "RG";
                graph.lineAlpha = 0;
                graph.fillAlphas = 0.6;
                graph.balloonText = "[[value]]";
                partiesChart.addGraph(graph);
                
                graph = new AmCharts.AmGraph();
                graph.type = "line";
                graph.title = "Greens";
                graph.valueField = "Greens";
                graph.lineAlpha = 0;
                graph.fillAlphas = 0.6;
                graph.balloonText = "[[value]]";
                partiesChart.addGraph(graph);
                
                graph = new AmCharts.AmGraph();
                graph.type = "line";
                graph.title = "Independents";
                graph.valueField = "Independent";
                graph.lineAlpha = 0;
                graph.fillAlphas = 0.6;
                graph.balloonText = "[[value]]";
                partiesChart.addGraph(graph);
                
                graph = new AmCharts.AmGraph();
                graph.type = "line";
                graph.title = "Liberals, Centrists";
                graph.valueField = "LC";
                graph.lineAlpha = 0;
                graph.fillAlphas = 0.6;
                graph.balloonText = "[[value]]";
                partiesChart.addGraph(graph);
                
                graph = new AmCharts.AmGraph();
                graph.type = "line";
                graph.title = "Christian Democrats";
                graph.valueField = "CD";
                graph.lineAlpha = 0;
                graph.fillAlphas = 0.6;
                graph.balloonText = "[[value]]";
                partiesChart.addGraph(graph);
                
                graph = new AmCharts.AmGraph();
                graph.type = "line";
                graph.title = "Eurosceptics";
                graph.valueField = "Eurosceptic";
                graph.lineAlpha = 0;
                graph.fillAlphas = 0.6;
                graph.balloonText = "[[value]]";
                partiesChart.addGraph(graph);
                
                graph = new AmCharts.AmGraph();
                graph.type = "line";
                graph.title = "Conservative Nationalists";
                graph.valueField = "CN";
                graph.lineAlpha = 0;
                graph.fillAlphas = 0.6;
                graph.balloonText = "[[value]]";
                partiesChart.addGraph(graph);
                
                graph = new AmCharts.AmGraph();
                graph.type = "line";
                graph.title = "Far-Right";
                graph.valueField = "farright";
                graph.lineAlpha = 0;
                graph.fillAlphas = 0.6;
                graph.balloonText = "[[value]]";
                partiesChart.addGraph(graph);

                // LEGEND
                var legend = new AmCharts.AmLegend();
                legend.align = "center";
                legend.valueText = "[[value]] ([[percents]]%)";
                legend.valueWidth = 100;
                legend.valueAlign = "right";
                legend.equalWidths = true;
                legend.reversedOrder = true;
                legend.periodValueText = "total: [[value.sum]]"; // this is displayed when mouse is not over the chart.
                partiesChart.addLegend(legend, partylegend);

                // CURSOR
                var chartCursor = new AmCharts.ChartCursor();
                chartCursor.zoomable = true;
                chartCursor.cursorAlpha = 0;
                partiesChart.addChartCursor(chartCursor);

                // WRITE
                partiesChart.write("partiesChartDiv");
            });