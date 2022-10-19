import React from 'react';


function SearchBar() {
    return <div style={{
        marginLeft: "18px" ,
        marginRight: "22px",
        marginTop: "15px"}}><form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    </form></div>
}

export default SearchBar;