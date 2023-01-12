import { Ingredient } from './ingredient.js';

window.addEventListener("DOMContentLoaded", function() {

            let Bacon = new Ingredient("Bacon", "assets/img/bacon.png");
            let Carrots = new Ingredient("Carotte", "assets/img/carrots.png");
            let Cheese = new Ingredient("Fromage", "assets/img/cheese.png");
            let Egg = new Ingredient("Oeuf", "assets/img/egg.png");
            let Eggplant = new Ingredient("Aubergine", "assets/img/eggplant.png");
            let GoatCheese = new Ingredient("FromageDeChevre", "assets/img/goat-cheese.png");
            let Honey = new Ingredient("Miel", "assets/img/honey.png");
            let Mushroom = new Ingredient("Champignon", "assets/img/mushroom.png");
            let Olive = new Ingredient("Olive", "assets/img/olive.png");
            let Pepper = new Ingredient("Piment", "assets/img/pepper.png");
            let Potato = new Ingredient("PommeDeTerre", "assets/img/potato.png");
            let Tomato = new Ingredient("Tomate", "assets/img/tomato.png");
            
            let availableIngredients = [];

            availableIngredients.push("Bacon, Carrots, Cheese, Egg, Eggplant, GoatCheese, Honey, Mushroom, Olive, Pepper, Potato, Tomato");
            console.log(availableIngredients);
});