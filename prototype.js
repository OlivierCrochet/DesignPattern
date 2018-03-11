var carPrototype = { // On crée une variable carPrototype avec les attributs suivants
  init : function(carModel){ // Initialisation de la fonction ayant pour argument 'carModel'
    this.model = carModel // Sur cette ligne, le modèle de la voiture correspond a l'argument 'carModel'
  },
  getModel : function(){
    console.log("Le modèle de la voiture est" + " : " + this.model) // Renvoi, par une phrase dans la console le modèle de la voiture
  }
}

function car(model) {
  function A() {}; // Nouvelle fonction 'A' qui n'effectue rien
  A.prototype = carPrototype; // 'A' prend les caractéristiques de 'carPrototype' précédement définies

  var a = new A(); // Création d'un nouvel objet A

  a.init(model); // Cette fonction appelle 'init' défini plus haut et effectura les fonctions, elle va initialiser ce que vous voulez, en l'occurence 'model' dans notre cas
  return a;
}

var car1 = car("Audi"); // La variable 'car1' va appeller la fonction 'car', avec comme argument 'Audi'
console.log(car1.getModel()); // Va retourner la fonction getModel qui elle même revoit le modèle de la voiture
