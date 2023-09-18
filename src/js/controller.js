import * as model from './model.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import recipeview from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

///////////////////////////////////////

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;
    recipeview.renderSpinner();

    //loading recipe

    await model.loadRecipe(id);

    //rendering recipe
    recipeview.render(model.state.recipe);
  } catch (error) {
    console.log(error);
  }
}

// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);

['load', 'hashchange'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
