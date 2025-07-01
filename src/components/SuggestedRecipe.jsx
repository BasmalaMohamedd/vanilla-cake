import {useState} from 'react'

const SuggestedRecipe = () => {
  const instructions = [
    {
      step_label:"Preheat Oven & Prepare Pans",
      steps:["Preheat to 350°F (175°C).", "Grease and flour two 8-inch or 9-inch round cake pans (or line with parchment paper)"]
    },
    {
      step_label:"Mix Dry Ingredients",
      steps:["In a bowl, whisk together flour, baking powder, and salt.", "add your favorite falvors(optional)"]
    },
    {
      step_label:"Cream Butter & Sugar",
      steps:["In a large bowl, beat the butter and sugar together until light and fluffy (about 3-5 minutes)."]
    },
    {
      step_label:"Add Eggs & Vanilla",
      steps:["Add eggs one at a time, beating well after each. Stir in the vanilla extract."]
    },
    {
      step_label:" Combine Wet & Dry",
      steps:["Add flour mixture in 3 parts, alternating with milk in 2 parts (begin and end with flour). Mix just until combined—don’t overmix."]
    },
    {
      step_label:"Bake",
      steps:["Divide batter evenly between pans.", "Bake for 25–30 minutes or until a toothpick inserted in the center comes out clean."]
    },
    {
      step_label:"Cool",
      steps:["Let cakes cool in the pans for 10 minutes, then transfer to wire racks to cool completely."]
    },

  ];


  const instructionsElem = instructions.map((instruction)=>{
    return (
      <li key={instruction.step_label}>
        <span>
          {instruction.step_label}
        </span>
        { <ul>
          {instruction.steps.map((step)=> <li key={step}>{step}</li>)}
        </ul> }
        

      </li>

    )
  })
  return (
    <div className='suggested-recipe'>
      <h2>Suggested recipe:</h2>
      <p>Here’s the recipe:</p>
      <div className="recipe-ingredients">
        <h4>Ingredients</h4>
        <ul>
            <li>2 ½ cups (315g) all-purpose flour</li>
            <li>2 ½ tsp baking powder</li>
            <li>½ tsp salt</li>
            <li>1 cup (226g) unsalted butter, softened</li>
            <li>1 ¾ cups (350g) granulated sugar</li>
            <li>1/2 cup chicken broth</li>
            <li>4 large eggs</li>
            <li>1/2 cup grated Parmesan cheese</li>
            <li>1 tbsp pure vanilla extract</li>
            <li>1 cup (240ml) whole milk</li>
            <li>favorite extra falvors</li>
        </ul>
      </div>
      <div className='recipe-instructions'>
        <ol>
            {instructionsElem}
        </ol>
        <span>Enjoy</span>
      </div>
    </div>
  )
}

export default SuggestedRecipe
