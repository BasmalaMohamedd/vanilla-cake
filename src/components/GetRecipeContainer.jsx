import React from 'react'

const GetRecipeContainer = ({setHasRecipe}) => {
  function handleGetRecipe()
  {
    setHasRecipe((prev)=>!prev);
  }
  return (
    <div className='getRecipeContainer'>
      <div>
        <h3>Ready for a Recipe?</h3>
        <p>Generate a recipe from your list of ingredients.</p>
      </div>
      <button onClick={()=>handleGetRecipe()}>Get a Recipe</button>

     </div>
  )
}

export default GetRecipeContainer
