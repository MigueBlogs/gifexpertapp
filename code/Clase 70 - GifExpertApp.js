import React, {useState} from 'react'
// import PropTypes from 'prop-types'

const GifExpertApp = () => {
    // const categories = ["IronMan", "Thor", "Hawkeye"];
    const [categories, setCategories] = useState(["IronMan", "Thor", "Hawkeye"]);  //estado anterior (lo que esta en parentesis)

    const handleAdd = () =>{
        setCategories((c)=>{
          // console.log(c.length);
          return c.('Captain America'); //nuevo estado)
        });
        //otra manera más simple:
        // setCategories([ ...categories, 'Hulk']);
        //el setCategories tiene un callback que es el estado anterior (otra manera)
        // setCategories(cats =>
        //     [...cats, 'BlackWidow']
        // );
    }
    return (
      <>
        <h2>GifExpertApp</h2>
        <hr></hr>
        <button onClick={handleAdd}>Agregar</button>
        <ol>
          {
            categories.map( (category,idx) => {
              //return <li key = {idx}>category</li> // así no se hace, no se usa KEY con el IDX porque es muy volatil el indice y puede ser moficable
              return <li key={category}>{category}</li>
            })
          }
        </ol>
      </>
    )
  }
  
  GifExpertApp.propTypes = {
  
  }
  
  export default GifExpertApp