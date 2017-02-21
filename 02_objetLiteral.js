 var fs = require("fs");
 console.log("\n *START* \n");
 var content = fs.readFileSync("provinces.JSON");
 console.log("Output Content : \n"+ content);
 console.log("\n *EXIT* \n");


var monObjet = oProvince

function affiche_objet(monObjet)
{
	for(propriete in monObjet)
	{

		console.log(propriete + ' - ' + monObjet[propriete])
	}
}

affiche_objet(oProvince)
