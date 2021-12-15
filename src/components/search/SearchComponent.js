import React, { useState } from 'react'
import { FormControl } from 'react-bootstrap';
import { Scrool } from './Scrool'
import { SearchList } from './SearchList'


export const SearchComponent = ({details}) => {

    const [searchField, setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false);

    const filteredProduct = details.filter(product => {
        return (
            product
            .nombre
            .toLowerCase()
            .includes(searchField.toLowerCase())||
            product
            .descripcion
            .toLowerCase()
            .includes(searchField.toLowerCase())
        )
    })

    function searchList() {
        if(searchShow){
            return (
                <Scrool>
                    <SearchList filteredProduct={filteredProduct}/>
                </Scrool>
            )
        }
        
    }

    const handleChange = (e) => {
        e.preventDefault()
        setSearchField(e.target.value) 
        if(e.target.value ===""){
            setSearchShow(false)
        }else{
            setSearchShow(true)
        }
    }

    return (
        <div>
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleChange}
                style={{borderRadius:"25px", width:"25rem", alignItems:"center", marginTop:"20px", marginLeft:"450px"}}
            /> 
            {searchList()}
        </div>        
    )
}
