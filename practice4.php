<html>
  <body>
    <style> table, th, td {border: 1px solid black; text-align: right;}</style>
    <?php 
     echo '<table> <tr>';
      $n = $_POST["n"];
      echo "<th></th>";
     for ($i = 1; $i <= $n; $i++) {
			echo "<th>{$i}</th>";
			}
			echo "</tr>";
			for ($i = 1; $i <= $n; $i++) {
					   echo "<tr><th>{$i}</th>";
					   for ($j = 1; $j <= $n; $j++) {
							      $k = $i * $j;
							      echo "<td>{$k}</td>";
							      }
							      echo "</tr>";
							      }
							      echo "</table>";
							     
							      

     ?>
    
  </body>
</html>
