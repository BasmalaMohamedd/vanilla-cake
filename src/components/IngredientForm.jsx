export default function IngrediantForm(){
    return (
        <form className="add-ingrediant-form">
            <input type="text" placeholder="e.g. cinnamon" aria-label="Add ingrediant"/>
            <button>+ Add ingrediant</button>
        </form>
    )
}