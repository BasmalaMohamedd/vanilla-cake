import { useState } from "react";

export default function IngrediantForm(){
    const [ingrediants, setIngrediants] = useState(["floor", "eggs", "milk", "oil", "sugar", "vanilla"]);
    const ingrediantsElement = ingrediants.map((ingrediant)=><li key={ingrediant}>{ingrediant}</li>)
    function addIngrediant(formData)
    {
        //react 19
        const newIngrediant = formData.get("ingrediant");
        setIngrediants(preIngrediants=>[...preIngrediants, newIngrediant]);
        console.log(ingrediants);
    }
    return (
        <>
            <form action={addIngrediant} className="add-ingrediant-form">
                <input type="text" placeholder="e.g. cinnamon" aria-label="Add ingrediant" name="ingrediant"/>
                <button type="submit">+ Add ingrediant</button>
            </form>
            <ul>
                {ingrediantsElement}
                
            </ul>
        </>
        
    )
}