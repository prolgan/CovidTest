<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/main.css">
	
	<title>Тестовое задание</title>

	<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    
    <!-- Don't use this in production: -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.js"></script>	

    
   
</head>

<body>

<div class=.allcontent">
		<!-- Tab links -->
	<div class="tab">
	  <button class="tablinks" onclick="openTab(event, 'Table')" id="defaultOpen" >Таблица</button>
	  <button class="tablinks" onclick="openTab(event, 'Graphic')">График</button>
	</div>

	<div></div>
	<!-- Tab content -->
	<div id="Table" class="tabcontent">

	  	<table id="root">
	  		
	  	</table>
	  
	</div>

	<div id="Graphic" class="tabcontent">
	 
	 	<canvas id="myChart" width="400" height="200"></canvas>

	</div>
</div>
<script type="text/babel" src="scripts/react.js"></script>

<!-- Вкладки -->
<script src="scripts/tabs.js"></script>
</body>
</html>