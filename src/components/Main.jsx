import IngrediantForm from "./IngredientForm";


export default function Main(){
    const ingrediants = ["floor", "eggs", "milk", "oil", "sugar", "vanilla"]
    const ingrediantsElement = ingrediants.map((ingrediant)=><li key={ingrediant}>{ingrediant}</li>)
    return(
        <main>
            <IngrediantForm />
            
        </main>
    )
}
