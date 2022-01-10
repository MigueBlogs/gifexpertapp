import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types'

const GifExpertApp = () => {
    const [categories, setCategories] = useState(["IronMan"]);  //estado anterior (lo que esta en parentesis)

    return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
        <ol>
          {
            categories.map( (category,idx) => (
              //return <li key = {idx}>category</li> // así no se hace, no se usa KEY con el IDX porque es muy volatil el indice y puede ser moficable
              // return <li key={category}>{category}</li>
              <GifGrid 
                key={category}
                category={category}
              />
            ))
          }
        </ol>
      </>
    )
  }
  
  GifExpertApp.propTypes = {
  
  }
  
  export default GifExpertApp