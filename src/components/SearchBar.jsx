import React from 'react';


function SearchBar({value , onSearch}) {
    return <div style={{
        marginLeft: "18px" ,
        marginRight: "22px",
        marginTop: "15px"}}><form className="form-inline my-2 my-lg-0">
        <input defaultValue={value} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"    onKeyUp={onSearch}/>
    </form></div>
}

export default SearchBar;