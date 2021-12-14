import React from 'react';
import { initialDetails } from '../../../data/data';
import { SearchComponent } from '../../search/SearchComponent';


export const HomeScreen = () => {
    
    return (
        <div>
            <SearchComponent details={initialDetails}/>
        </div>
    )
}
