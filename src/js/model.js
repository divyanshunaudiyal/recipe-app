import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helpers';
export const state = {
  recipe: {},
};

//function for fetching data from api amd update state object
export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.image_url,
      cookingTime: recipe.cooking_time,
      servings: recipe.servings,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    console.log(err); //to show error from controller use throw err
  }
};
