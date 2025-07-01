import { useState } from "react";


import IngrediantForm from "./IngredientForm";
import IngredientsOnHand from "./IngredientsOnHand";
import GetRecipeContainer from "./GetRecipeContainer";
import SuggestedRecipe from "./SuggestedRecipe";


export default function Main(){
    const [ingrediants, setIngrediants] = useState(["floor", "baking powder", "salt", "eggs", "milk", "oil", "sugar", "vanilla"]);
    const [hasRecipe, setHasRecipe] = useState(false);
    return(
        <main>
            <IngrediantForm 
            setIngrediants = {setIngrediants}
            />

            {ingrediants.length > 0
            && 
            <IngredientsOnHand 
            ingrediants={ingrediants}
            />}


            {
                ingrediants.length >=4 
                &&
                <GetRecipeContainer 
                setHasRecipe={setHasRecipe}
                />
                }


            {hasRecipe &&
                <SuggestedRecipe />}
            
        </main>
    )
}
