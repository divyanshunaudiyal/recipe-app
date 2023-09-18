import { async } from 'regenerator-runtime';

export const state = {
  recipe: {},
};

//function for fetching data from api amd update state object
export const loadRecipe = async function (id) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );

    if (!res.ok) {
      throw new Error(`${data.message} (${res.status})`);
    }

    const data = await res.json();

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
    console.log(state.recipe);
  } catch (err) {
    alert(err);
  }
};
