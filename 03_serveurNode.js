var http = require("http");
var fs = require("fs");
var oProvince = fs.readFileSync("provinces.JSON");


var monObjet = oProvince

function affiche_objet(monObjet)
{
	for(propriete in monObjet)
	{
		console.log(propriete + ' - ' + monObjet[propriete])
	}
}


http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Exercice_07</h1>");
  response.write(affiche_objet(oProvince));
  response.end();
}).listen(3000);