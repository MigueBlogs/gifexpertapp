import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [input, setInput] = useState('');

    const handleInputChange = ((evento)=>{
        setInput(evento.target.value);
    });

    const handleSubmit = ((evento)=>{
        evento.preventDefault();
        // console.log("Submit hecho!")
        if( input.trim().length>2 ){
            setCategories((c)=>{
                    //   return c.concat(input);
                    return [input, ...c ]
            });
            setInput('');
        }

    })
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
            ></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
