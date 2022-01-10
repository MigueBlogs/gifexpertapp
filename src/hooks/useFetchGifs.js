//Este custom Hook, me permite que cuando el componente de GifGrid carga, este automaticamente realice la petición fetch 
//y me va a indicar cuándo estoy cargando 
//y cuándo terminó la carga
import {useState, useEffect} from 'react'
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {
    const initialState = {
        data: [],
        loading: true
    }
    const [state, setState] = useState(initialState)

    useEffect(() => {
        getGifs(category)
            .then(imgs => {

                //solo para visualizar la carga---> le agregamos 3 segundos de espera
                setTimeout(() => {
                    setState({
                        data:imgs,
                        loading: false
                    });
                }, 3000);
            })
    }, [category])


    return state;
}
