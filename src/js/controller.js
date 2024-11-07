const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

// https://forkify-api.herokuapp.com/api/v2/recipes?search=${nomeDoPrato}&key=c5a05781-2a28-4dcc-bb57-630183e7181d

///////////////////////////////////////

const buscarReceita = async function (nomeDoPrato) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=83a663a4-838c-4dfa-b018-d7b9a3945d12`
    );

    const data = await res.json();

    if (data.status === 'fail')
      throw new Error(`${data.message} (${res.status})`);

    console.log(res, data);

    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      image: recipe.image,
    };
    console.log(recipe);
  } catch (error) {
    console.error(error);
    alert(error);
  }
};
buscarReceita();
