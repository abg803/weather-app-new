import React from "react";

function Search (){
    return(
        <div className="p-2 flex-fill bd-highlight">
            <form className="search-form">
              <input
                type="search"
                placeholder="Enter city"
                autocomplete="off"
                className="locationInput"
              />
              <div className="d-flex align-items-start bd-highlight">
                <input type="submit" value="Search" />
                <button id="current-location-button">📍</button>
              </div>
            </form>
          </div>
    )
};
export default Search;