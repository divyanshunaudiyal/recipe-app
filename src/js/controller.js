import * as model from './model.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import recipeview from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
///////////////////////////////////////

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeview.renderSpinner();

    //loading recipe

    await model.loadRecipe(id);

    //rendering recipe
    recipeview.render(model.state.recipe);
  } catch (error) {
    recipeview.renderError();
  }
}
const controlSearchResults = async function () {
  try {
    // get search query
    const query = searchView.getQuery();
    if (!query) return;
    resultsView.renderSpinner();
    //load search results
    await model.loadSearchResults(query);

    //render results

    resultsView.render(model.state.search.results);
  } catch (error) {
    throw error;
  }
};
controlSearchResults();
const init = function () {
  recipeview.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
