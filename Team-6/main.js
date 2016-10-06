function fun()
{	
	//document.getElementById("test").innerHTML = "HELLO";
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
   //   document.getElementById("test").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "http://localhost:3000", true);

 // xhttp.send(document.getElementById("name").value);
  xhttp.send("ttt");
}

function maketable()
{

}

function register()
{

}

function allevents()
{
	var data = '{"type":"allevents"}';
  document.getElementById("events_table").innerHTML = '';
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var reply = this.responseText;
      reply = JSON.parse(reply);
       var data = '<tr style="background-color:orange;">';
        data = data + '<td>Event Id</td>';
        data = data + '<td>Event Name</td>';
        data = data + '<td>Event Description</td>';
        data = data + '<td>Event Starttime</td>';
        data = data + '<td>Event Endtime</td>';
        data = data + '<td>Event Location</td>';
        data = data + '<td></td>';
        data = data + '</tr>'
        document.getElementById("events_table").innerHTML = document.getElementById("events_table").innerHTML + data;
      for (var i = 0; i < reply.length; i++) {
        data = '<tr>';
        data = data + '<td>'+reply[i].event_id+'</td>';
        data = data + '<td>'+reply[i].event_name+'</td>';
        data = data + '<td>'+reply[i].event_description+'</td>';
        data = data + '<td>'+reply[i].event_starttime+'</td>';
        data = data + '<td>'+reply[i].event_endtime+'</td>';
        data = data + '<td>'+reply[i].event_location+'</td>';
        data = data + '<td>'+'<input type="button" value="Register" onclick="register('+ reply[i].event_id +')"></input>'+'</td>';
        data = data + '</tr>'
      	document.getElementById("events_table").innerHTML = document.getElementById("events_table").innerHTML + data;
      }
    }
  };
  xhttp.open("POST", "http://localhost:3000", true);

 // xhttp.send(document.getElementById("name").value);
  xhttp.send(data);
}

function register(event_id){
  var data = '{"type":"register" , "event_id":"'+event_id+'" , "user":"anna"}';
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var reply = this.responseText;
      reply = JSON.parse(reply);
    }
  };


}


function myevents(){
  var user = 'anna';
  var data = '{"type":"myevents", "user":"anna"}';
  document.getElementById("events_table").innerHTML = '';
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var reply = this.responseText;
      reply = JSON.parse(reply);
       var data = '<tr style="background-color:Green;">';
        data = data + '<td>Event Id</td>';
        data = data + '<td>event Name</td>';
        data = data + '<td>event_description</td>';
        data = data + '<td>event_starttime</td>';
        data = data + '<td>event_endtime</td>';
        data = data + '<td>event_location</td>';
        data = data + '<td></td>';
        data = data + '</tr>'
        document.getElementById("events_table").innerHTML = document.getElementById("events_table").innerHTML + data;
      for (var i = 0; i < reply.length; i++) {
        data = '<tr>';
        data = data + '<td>'+reply[i].event_id+'</td>';
        data = data + '<td>'+reply[i].event_name+'</td>';
        data = data + '<td>'+reply[i].event_description+'</td>';
        data = data + '<td>'+reply[i].event_starttime+'</td>';
        data = data + '<td>'+reply[i].event_endtime+'</td>';
        data = data + '<td>'+reply[i].event_location+'</td>';
        data = data + '<td>'+'<input type="textbox" placeholder="rating" id="rating" value = "'+reply[i].score+'">:rating</input>'+'</td>';
        data = data + '</tr>'
        document.getElementById("events_table").innerHTML = document.getElementById("events_table").innerHTML + data;
      };
    }
  };
  xhttp.open("POST", "http://localhost:3000", true);
  xhttp.send(data);
}



document.getElementById('all_events_btn').onclick = allevents;
document.getElementById('my_events_btn').onclick = myevents;