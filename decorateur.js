var Recette = {
  ListeIngredient : ["Poivre", "Carotte",]
}; //l'objet "Recette" contient toute la liste des ingrédient qu'il faut pour le plat.

var DecorateurIngredient = function ajouterIngredient (Ingredient) {
    Plat.RecettePlat[Plat.RecettePlat.length] = Ingredient
  }; //L'objet "DecorateurIngredient" comporte une fonction qui permet d'ajouter
    //un ingrédient à la recette du plat.

var Plat = {
  RecettePlat : [],
  //"PreparationPlat" récupère les ingrédients de la recette et du décorateur.
  PreparationPlat : function (Recette, IngredientSupplementaire) {
    for (var i = 0; i < Recette.ListeIngredient.length; i++) {
      Plat.RecettePlat[i] = Recette.ListeIngredient[i]
    }
    DecorateurIngredient (IngredientSupplementaire)
    return "fait"
    }
  };

function AfficherRecettePlat (Plat) {
  for (var i = 0; i < Plat.RecettePlat.length; i++) {
    console.log(Plat.RecettePlat[i])
  }
  return "fini"
}; // la fonction "AfficherRecettePlat" permet d'afficher les ingrédients du plat.
