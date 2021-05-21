import React from "react";

function SearchBar(props){

    return(
        <form className="search">
        <div className="form-group">
          <label htmlFor="search">Breed Name:</label>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="users"
            list="users"
            type="text"
            className="form-control"
            placeholder="Type in name of a User"
            id="users"
          />
        </div>
      </form>
    )
}

export default SearchBar;