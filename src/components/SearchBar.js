import React, { Component } from 'react';

class SearchBar extends Component {
  
  render() {
    const { handleChange, handleSortAlpha, handleSortPrice } = this.props
    return (
      <div>
  
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={null} onChange={handleSortAlpha}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={null} onChange={handleSortPrice}/>
          Price
        </label>
        <br/>
  
        <label>
          <strong>Filter:</strong>
          <select onChange={handleChange}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
  
  
      </div>
    );
  }
}


export default SearchBar;
