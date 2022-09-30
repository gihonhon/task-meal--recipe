import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = ({onChange}) => {
    return (
        <div className="mb-3">
            <input className="form-control form-control-sm" type="text" onChange={onChange} placeholder="Search Recipe..."/>
        </div>
    )
}

export default Search