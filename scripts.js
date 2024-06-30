document.addEventListener("DOMContentLoaded", () => {
    const ingredients = ["Tomato", "Cheese", "Bread", "Chicken", "Lettuce", "Mayo", "Onion", "Pepper"];
    const recipes = [
        {
            name: "Chicken Sandwich",
            image: "",
            ingredients: ["Bread", "Chicken", "Lettuce"],
            procedure: "Cook chicken, place on bread, add lettuce, and serve."
        },
        {
            name: "Cheese Sandwich",
            image: "",
            ingredients: ["Bread", "Cheese"],
            procedure: "Place cheese between bread slices and serve."
        },
        {
            name: "Tomato Salad",
            image: "",
            ingredients: ["Tomato", "Lettuce"],
            procedure: "Chop tomato and lettuce, mix, and serve."
        },
        {
            name: "Chicken Cheese Sandwich",
            image: "",
            ingredients: ["Bread", "Chicken", "Cheese", "Mayo"],
            procedure: "Cook chicken, place on bread, add cheese and mayo, then serve."
        },
        {
            name: "Tomato Cheese Sandwich",
            image: "",
            ingredients: ["Bread", "Tomato", "Cheese"],
            procedure: "Place tomato and cheese between bread slices and serve."
        },
        {
            name: "Chicken Salad",
            image: "",
            ingredients: ["Chicken", "Lettuce", "Mayo", "Onion", "Pepper"],
            procedure: "Chop and mix chicken, lettuce, mayo, onion, and pepper. Serve chilled."
        },
        {
            name: "Chicken Tomato Sandwich",
            image: "",
            ingredients: ["Bread", "Chicken", "Tomato"],
            procedure: "Cook chicken, place on bread, add sliced tomato, and serve."
        },
        {
            name: "Cheese Lettuce Sandwich",
            image: "",
            ingredients: ["Bread", "Cheese", "Lettuce"],
            procedure: "Place cheese and lettuce between bread slices and serve."
        },
        {
            name: "Chicken Mayo Sandwich",
            image: "",
            ingredients: ["Bread", "Chicken", "Mayo"],
            procedure: "Cook chicken, place on bread, add mayo, and serve."
        },
        {
            name: "Tomato Onion Salad",
            image: "",
            ingredients: ["Tomato", "Onion"],
            procedure: "Chop tomato and onion, mix, and serve."
        },
        {
            name: "Chicken Cheese Lettuce Sandwich",
            image: "",
            ingredients: ["Bread", "Chicken", "Cheese", "Lettuce"],
            procedure: "Cook chicken, place on bread, add cheese and lettuce, and serve."
        },
        {
            name: "Chicken Tomato Cheese Sandwich",
            image: "",
            ingredients: ["Bread", "Chicken", "Tomato", "Cheese"],
            procedure: "Cook chicken, place on bread, add tomato and cheese, and serve."
        },
        {
            name: "Tomato Cheese Onion Sandwich",
            image: "",
            ingredients: ["Bread", "Tomato", "Cheese", "Onion"],
            procedure: "Place tomato, cheese, and onion between bread slices and serve."
        },
        {
            name: "Chicken Cheese Mayo Sandwich",
            image: "",
            ingredients: ["Bread", "Chicken", "Cheese", "Mayo"],
            procedure: "Cook chicken, place on bread, add cheese and mayo, and serve."
        }
    ];


    if (!localStorage.getItem("recipes")) {
        localStorage.setItem("recipes", JSON.stringify(recipes));
    }


    function createIngredientCheckboxes(ingredientList) {
        const form = document.getElementById("ingredient-form");
        ingredientList.forEach(ingredient => {
            const label = document.createElement("label");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = ingredient;
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(ingredient));
            form.appendChild(label);
            form.appendChild(document.createElement("br"));
        });
    }


    function findRecipes(selectedIngredients) {
        const storedRecipes = JSON.parse(localStorage.getItem("recipes"));
        return storedRecipes.filter(recipe => 
            recipe.ingredients.every(ingredient => selectedIngredients.includes(ingredient))
        );
    }


    function displayRecipes(recipes) {
        const recipeList = document.getElementById("recipe-list");
        recipeList.innerHTML = "<h2>Recipes</h2>"; // Clear previous recipes
        if (recipes.length === 0) {
            recipeList.innerHTML += "<p>No recipes found with the selected ingredients.</p>";
        } else {
            recipes.forEach(recipe => {
                const recipeDiv = document.createElement("div");
                recipeDiv.classList.add("recipe");
                recipeDiv.innerHTML = `
                    <h3>${recipe.name}</h3>
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
                    <p><strong>Procedure:</strong> ${recipe.procedure}</p>
                `;
                recipeList.appendChild(recipeDiv);
            });
        }
    }


    document.getElementById("find-recipes").addEventListener("click", () => {
        const selectedIngredients = Array.from(document.querySelectorAll("#ingredient-form input:checked"))
            .map(checkbox => checkbox.value);
        const foundRecipes = findRecipes(selectedIngredients);
        displayRecipes(foundRecipes);
    });


    createIngredientCheckboxes(ingredients);
});
