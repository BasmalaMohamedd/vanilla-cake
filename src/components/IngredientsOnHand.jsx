import React from 'react'

const IngredientsOnHand = ({ingrediants = []}) => {
    const ingrediantsElement = ingrediants.map((ingrediant)=><li key={ingrediant}>{ingrediant}</li>);

  return (
    <div>
      <h2>Ingredients On Hand:</h2>
      <ul className='ingrediants-list'>
        {ingrediantsElement}   
     </ul>
     
    </div>
      
  )
}

export default IngredientsOnHand
