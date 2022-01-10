import React, {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    //recibir la categoría
    // const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=5&api_key=uEeVLTYfPITKv4XHLUxJhdeVaUG8IVfu`;
    //hacer una consulta a la API (peticion HTTP)
    const [images, setImages] = useState([])
    useEffect( () => {
        // const HTTPcall = fetch(url); //la comento porque creé en el curso el archivo getGifs.js que facilita la consulta y organiza mejor el codigo segun su funcionalidad
        // HTTPcall.then((resp)=> resp.json())
        //         .then(({data})=>{
        //             // console.log(data);
        //             const gifs = data.map(img => {
        //                 return{
        //                     id:img.id,
        //                     title:img.title,
        //                     url:img.images.downsized_medium.url
        //                 }
        //             })
        //             console.log(gifs);
        //             setImages(gifs)
        //         });
        getGifs(category)
            .then( imgs => setImages( imgs)) //también puede quedar esta linea como .then( setImages )
    }, [ category ])

    return (
        <>
            <h3>{category}</h3> 
            <div className='card-grid'>
                    {
                        images.map( img => (
                            <GifGridItem 
                                key={img.id}
                                {...img}
                            />
                        )
                        )

                        //tambien se puede con destructuración y queda mas elegante:
                        //images.map(({id,title})=>{return <li key={id}>{title}</li>})
                    }
            </div>
        </>
    )
}
