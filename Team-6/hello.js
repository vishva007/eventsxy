const http = require('http');
const mysql = require('mysql');

const hostname = '127.0.0.1';
const port = 3000;

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'eventio'
});

function getuserid(person_name)
{
    connection.query('select * from person where person_name = "' + person_name +'"' , function(err, rows, fields){
      if(err) throw err;

      for (var i = 0; i < rows.length; i++) {
                            
                            return rows[i].person_id;
                          }; 
    });

}

const server = http.createServer(function(req, res){
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  req.setEncoding('utf8');
  req.on('data',function(chunk){
    var type_call = (JSON.parse(chunk).type);
  	switch (type_call) {
    case 'allevents' :
                      //connection.connect();
                      connection.query('select * from events',function(err , rows , fields){
                        if(err) throw err;

                        //res.end(rows + '\n');
                        console.log(rows);
                         var data = [{event_id:1}];
                         
                         for (var i = 0; i < rows.length; i++) {
                            
                            //data = data.push(rows[i]);
                          }; 
                          res.end(JSON.stringify(rows));
                      });
                      //connection.end();
                      break;
    case 'myevents' :
                      var user = (JSON.parse(chunk).user);

                      connection.query('select * from events,eveorg,person where events.event_id = eveorg.event_id and eveorg.person_id=person.person_id and person.person_name = "'+ user +'"',function(err , rows , fields){
                        if(err) throw err;

                        //res.end(rows + '\n');
                         console.log(rows);
                         var data = [{event_id:1}];
                         
                         for (var i = 0; i < rows.length; i++) {
                            
                            //data = data.push(rows[i]);
                          }; 
                          res.end(JSON.stringify(rows));
                      });
                      break;
    case 'register' :
                        var event_id = (JSON.parse(chunk).event_id);
                        var user = (JSON.parse(chunk).user);
                        var user_id =getuserid(user);
                        connection.query('insert into eveorg values ()')



    default : 
              res.end('{}');

    }
  });
  


  
});

server.listen(port, hostname, function(){
  console.log("ppp");
});