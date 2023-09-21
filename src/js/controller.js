import * as model from './model.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import recipeview from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
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
    resultsView.renderSpinner();

    // get search query
    const query = searchView.getQuery();
    if (!query) return;

    //load search results
    await model.loadSearchResults(query);

    //render results
    resultsView.render(model.getSearchResultsPage(1));

    //render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (error) {
    throw error;
  }
};
const init = function () {
  recipeview.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
