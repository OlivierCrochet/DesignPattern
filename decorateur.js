var Recette = {
  ListeIngredient : ["Poivre", "Carotte",]
};

var DecorateurIngredient = function ajouterIngredient (Ingredient) {
    Plat.RecettePlat[Plat.RecettePlat.length] = Ingredient
  };

var Plat = {
  RecettePlat : [],
  DecorateurIngredient : DecorateurIngredient,
  PreparationPlat : function (Recette, IngredientSupplementaire) {
    for (var i = 0; i < Recette.ListeIngredient.length; i++) {
      Plat.RecettePlat[i] = Recette.ListeIngredient[i]
    }
    DecorateurIngredient (IngredientSupplementaire)
    return "fait"
    }
  };

function AfficherPlat (Plat) {
  for (var i = 0; i < Plat.RecettePlat.length; i++) {
    console.log(Plat.RecettePlat[i])
  }
  return "fini"
};
