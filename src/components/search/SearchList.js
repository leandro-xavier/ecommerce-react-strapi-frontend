import React from 'react'
import { CardAllProduct } from '../Cards/CardAllProduct'


export const SearchList = ({filteredProduct}) => {
    const filtered = filteredProduct.map(product => <CardAllProduct key={product.id} product={product}/>) 
    return (
        <div>
            {filtered}
        </div>
    )
}
