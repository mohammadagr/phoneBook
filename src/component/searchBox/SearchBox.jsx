import React from 'react';
import './searchBox.css'
const SearchBox = ({setFilter}) => {
    return (
        <div className='input-group'>
            <input placeholder='search ...' onChange={e => setFilter(e.target.value)}/>
        </div>
    );
};

export default SearchBox;
