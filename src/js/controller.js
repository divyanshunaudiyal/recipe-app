import * as model from './model.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import recipeview from './views/recipeView.js';

console.log(icons);

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

///////////////////////////////////////

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;
    renderSpinner(recipeContainer);

    //loading recipe

    await model.loadRecipe(id);

    //rendering recipe
    recipeview.render(model.state.recipe);
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('hashchange', controlRecipes);
window.addEventListener('load', controlRecipes);
