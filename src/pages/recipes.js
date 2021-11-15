import React from 'react'
import {Link} from 'react-router-dom';

const Recipes = () => {
  return (
    <div>
      <h1>
        <Link to={'/recipes/1'}>Receptik</Link>
      </h1>
    </div>
  )
}

export default Recipes
