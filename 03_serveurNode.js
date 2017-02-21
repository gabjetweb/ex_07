var http = require("http");//importe le module serveur http
var fs = require('fs');
var obj;

fs.readFile('provinces.JSON', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});

var monObjet=obj;
var ch="<table>"
function affiche_objet(monObjet){
	for (propriete in monObjet){
		ch+="<tr>"+"<td>"+propriete+'</td>'+'<td>'+monObjet[propriete]+'</td>'+"</tr>"
	}
	ch+="</table>"
	return ch;
}

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Exercice_07</h1>");
  response.write(affiche_objet(obj));
  response.end();
}).listen(3000);