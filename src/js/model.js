import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helpers';
export const state = {
  recipe: {},
  search: {
    query: ' ',
    results: [],
  },
};

//function for fetching data from api amd update state object
export const loadRecipe = async function (id) {
  try {
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
    throw err; //to show error from controller use throw err
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
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
