
export default function IngrediantForm({ setIngrediants}){
    

    function addIngrediant(formData)
    {
        //react 19
        const newIngrediant = formData.get("ingrediant");
        setIngrediants(preIngrediants=>[...preIngrediants, newIngrediant]);
    }

    return (
    
        <form action={addIngrediant} className="add-ingrediant-form">
            <input type="text" placeholder="e.g. cinnamon" aria-label="Add ingrediant" name="ingrediant"/>
            <button type="submit">+ Add ingrediant</button>
        </form>
    )
}