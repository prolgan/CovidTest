<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/main.css">
	
	<title>Тестовое задание</title>

	<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    
    <!-- Don't use this in production: -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>

<body>
<div id="root"></div>

	<!-- Tab links -->
<div class="tab">
  <button class="tablinks" onclick="openTab(event, 'Table')" id="defaultOpen" >Таблица</button>
  <button class="tablinks" onclick="openTab(event, 'Graphic')">График</button>
</div>


<!-- Tab content -->
<div id="Table" class="tabcontent">
  <table style="width:100%">
  	<tr>
  		<td>Страна</td>
  		<td>Количество случаев</td>
  		<td>Количество смертей</td>
  		<td>Количество случаев на 1000 жителей</td>
  		<td>Количество смертей на 1000 жителей</td>
  	</tr>
  	<tr></tr>
  	<tr></tr>
  	<tr></tr>
  </table>
</div>

<div id="Graphic" class="tabcontent">
 
</div>

<script type="text/babel" src="scripts/react.js"></script>

<!-- Вкладки -->
<script src="scripts/tabs.js"></script>
</body>
</html>