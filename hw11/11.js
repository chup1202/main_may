// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.


const url1 = 'https://dummyjson.com/carts'
fetch(url1)
    .then(res => res.json())
    .then(cartsObject => {

        let cartContainer = document.getElementById('carts');

        const {carts} = cartsObject;
        console.log(carts)

        for (const cart of carts) {
            let div = document.createElement('div');

            div.innerText = `
            Cart ID: ${cart.id}, 
            Total: ${cart.total},
            Discounted Total: ${cart.discountedTotal},
            Total Products: ${cart.totalProducts},
            Total Quantity: ${cart.totalQuantity}
            `;


            cartContainer.appendChild(div)


        }


    })


//
//     #whXxOBlYS0H
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.


fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipesObj => {
        const {recipes} = recipesObj
        console.log(recipes);

        const recipeContainer = document.getElementById('recipes')

        for (const recipe of recipes) {
        const divRecipe = document.createElement('div')

            let ingredientsList = '';
            let instructions = ''
            let mealArr = ''
            let tagsList = ''

            const img = document.createElement('img');
            img.src = recipe.image;


            recipe.ingredients.forEach(ingredient => {
                ingredientsList += `- ${ingredient}\n`;
            });


            recipe.instructions.forEach(instruction => {
                instructions += `- ${instruction}\n`
            })

            recipe.mealType.forEach(meal => {
                mealArr += `${meal}\n`
            })

            recipe.tags.forEach(tag => {
                tagsList += `${tag}\n`
            })




            divRecipe.innerText =
                `
                caloriesPerServing: ${recipe.caloriesPerServing}
                cookTimeMinutes:${recipe.cookTimeMinutes}
                cuisine:${recipe.cuisine}
                difficulty:${recipe.difficulty}
                id:${recipe.id}
                
                ingredients:${ingredientsList}
                instructions:${instructions}
                mealType:${mealArr}
                name:${recipe.name}
                prepTimeMinutes:${recipe.prepTimeMinutes}
                rating:${recipe.rating}
                reviewCount:${recipe.reviewCount}
                servings:${recipe.servings}
                tags:${tagsList}
                userId:${recipe.userId}
                
                `
            recipeContainer.appendChild(divRecipe)
            divRecipe.insertBefore(img, divRecipe.firstChild);

        }


    })


// caloriesPerServing
//     :
//     300
// cookTimeMinutes
//     :
//     15
// cuisine
//     :
//     "Italian"
// difficulty
//     :
//     "Easy"
// id
//     :
//     1
// image
//     :
//     "https://cdn.dummyjson.com/recipe-images/1.webp"
// ingredients
//     :
//     (6) ['Pizza dough', 'Tomato sauce', 'Fresh mozzarella cheese', 'Fresh basil leaves', 'Olive oil', 'Salt and pepper to taste']
// instructions
//     :
//     (6) ['Preheat the oven to 475°F (245°C).', 'Roll out the pizza dough and spread tomato sauce evenly.', 'Top with slices of fresh mozzarella and fresh basil leaves.', 'Drizzle with olive oil and season with salt and pepper.', 'Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.', 'Slice and serve hot.']
// mealType
//     :
//     ['Dinner']
// name
//     :
//     "Classic Margherita Pizza"
// prepTimeMinutes
//     :
//     20
// rating
//     :
//     4.6
// reviewCount
//     :
//     98
// servings
//     :
//     4
// tags
//     :
//     (2) ['Pizza', 'Italian']
// userId
//     :
//     166

