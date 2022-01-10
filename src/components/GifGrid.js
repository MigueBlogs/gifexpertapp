import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    //recibir la categoría
    const {data:images, loading} = useFetchGifs(category);
    return (
        <>
            <h3 className='animate__animated animate__fadeInBottomLeft'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading</p>
            //esto && se usa cuando no hay acción cuando se evalua en false
            }
            <div className='card-grid'>
                    {
                        images.map( img => (
                            <GifGridItem 
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
            </div>
        </>
    )
}
