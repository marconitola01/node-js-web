//conexion a la database (definiendo los detalles de la base de datos)
var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'node_mysql',
   port: 3306
});
//conexion normal
/*
connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});
*/

//para insertar un registro en la base de datos
/*
var jquery = connection.query('INSERT INTO personaje(nombre, apellido, biografia) VALUES(?,?,?)',['Batman', 'wayne', 'defensar de la justicia en gotham'],
function(error,result){
    if(error){
        throw error;
    }else{
        console.log(result);
    }
})
*/


//para seleccionar un registro de la base de datos
/*
var query = connection.query('SELECT nombre, apellido, biografia FROM personaje WHERE personaje_id = ?', [1], 
function(error, result){
      if(error){
         throw error;
      }else{
         var resultado = result;
         if(resultado.length > 0){
            console.log(resultado[0].nombre + ' ' + resultado[0].apellido + ' / ' + resultado[0].biografia);
         }else{
            console.log('Registro no encontrado');
         }
      }
   }
);
connection.end();
*/
//guardar multiples registros
/*
connection.connect(function(err) {
    if (err) throw err; 
   console.log("Connected!");
    var sql = "INSERT INTO personaje (nombre, apellido, biografia) VALUES ?";
    var values = [
      ['John', 'Highway 71', 'severenda lampara'],
      ['Peter', 'Lowstreet 4','otra staci'],
      ['Amy', 'Apple st 652', 'la gomela'],
      ['Hannah', 'Mountain 21', 'no sabes quien soy yo?'],
      ['Michael', 'Valley 345', 'alovorgo'],
      ['Sandy', 'Ocean blvd 2', 'asdasd'],
      ['Betty', 'Green Grass 1','fumarato xdxd '],
      ['Richardial', 'Sky st 331', 'el guilches xdxd'],
      
    ];

    connection.query(sql, [values] , function (err, result) {
      if (err) throw err;
      console.log("numero de registros insertados " + result.affectedRows);
  
    });
  });
  connection.end();
  */

  //ordenar una tabla
  /*
  connection.connect(function(err){
     if(err) throw err;
    console.log("connected");
    connection.query('SELECT * FROM personaje ORDER BY nombre', function(err,result){
        if(err) throw err;
        console.log(result);
    });
  });
  connection.end();
  */
 