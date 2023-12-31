import { async } from 'regenerator-runtime';
import { API_URL, RESULTS_PER_PAGE } from './config';
import { getJSON } from './helpers';
export const state = {
  recipe: {},
  search: {
    query: ' ',
    results: [],
    page: 1,
    resultsPerPage: RESULTS_PER_PAGE,
  },
};

//function for fetching data from api and update state object
export const loadRecipe = async function (id) {
  try {
    if (!id) return;
    const data = await getJSON(`${API_URL}${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      image: recipe.image_url,
      sourceUrl: recipe.source_url,
      cookingTime: recipe.cooking_time,
      servings: recipe.servings,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    throw err; //to show error from controller
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    if (!query) return;
    const data = await getJSON(`${API_URL}?search=${query}`);

    state.search.results = data.data.recipes.map(elem => {
      return {
        id: elem.id,
        title: elem.title,
        publisher: elem.publisher,
        image: elem.image_url,
      };
    });
  } catch (error) {
    throw error;
  }
};
export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(element => {
    element.quantity = (element.quantity * newServings) / state.recipe.servings;
    // new quantity= oldQuantity *newServings / oldServings
  });
  state.recipe.servings = newServings;
};
