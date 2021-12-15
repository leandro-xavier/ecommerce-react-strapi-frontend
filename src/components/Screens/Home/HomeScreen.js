import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
//import { initialDetails } from '../../../data/data';
import { SearchComponent } from '../../search/SearchComponent';


export const HomeScreen = () => {

    const [product, setProduct] = useState([])

    const getProducts = async () => {
        const url = 'http://localhost:1337/api/products';
        const response = await fetch(url)
        const {data} = await response.json()
        console.log(data);
        //setProduct(data)
        const datos = data.map(dato => {
            return {
                id: dato.id,
                nombre: dato.attributes.name,
                descripcion: dato.attributes.description,
                price: dato.attributes.price
            }
        })
        console.log(datos);
        setProduct(datos)
    }

    useEffect(() => {
        getProducts()
    }, [])
    
    return (
        <div>
            <SearchComponent details={product}/>
        </div>
    )
}
