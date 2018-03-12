//Vehicule est l'objet "complexe", composé de plusieurs autres objets 
var Vehicule = {
    TypeVehicule: undefined,
    NbRoues: undefined,
    Roues: undefined,
    Moteur: undefined,
    NbPhares: undefined,
    Phares: undefined
}
//Constructeur est la fonction qui va donner à l'objet complexe ses propritétés 
var Constructeur = function Assemblage (Plan) {
    Vehicule.TypeVehicule = Plan.TypeVehicule;
    Vehicule.NbRoues = Plan.NbRoues;
    Vehicule.Roues = Roue;
    Vehicule.Roues.Type = Plan.TypeRoue
    Vehicule.Moteur = Plan.Moteur;
    Vehicule.NbPhares = Plan.NbPhares;
    Vehicule.Phares = Phare;
    
}

//voici les objets simple qui vont composer l'objet complexe
var Roue = {
    type: undefined
}

var MoteurMoto = {
    Type: "moteur pour moto"
}

var MoteurVoiture = {
    Type: "moteur pour Voiture"
}

var Phare = "phare"

// ici, les plans font office de classe, ils donnent les instructions à la fonction pour créer l'objet complexe
var PlanVoiture = {
    TypeVehicule: "Voiture",
    NbRoues: 4,
    TypeRoue: "Roue de Voiture",
    Moteur: MoteurVoiture,
    NbPhares: 4
}

var PlanMoto = {
    TypeVehicule:  "Moto",
    NbRoues: 2,
    TypeRoue: "Roue de Moto",
    Moteur: MoteurMoto,
    NbPhares: 2
}


//fonction d'affichage, uniquement ici pour la présentation
function AffichageVehicule (Vehicule) {
    console.log(Vehicule.TypeVehicule + ", " + Vehicule.NbRoues + " roues, Type de roues: "+ Vehicule.Roues.Type + ", " + Vehicule.NbPhares + 
    " phares, " + Vehicule.Moteur.Type )
}