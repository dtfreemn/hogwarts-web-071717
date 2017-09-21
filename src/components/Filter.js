import React from 'react';

const Filter = (props) => {
  return (
    <select onChange={props.filterChangeCallback} defaultValue='All'>
      {props.filters.map((filter) => <option key={filter} value={filter}>{filter}</option>)}
    </select>
  )
}

Filter.defaultProps = {
  filters: [],
  filterChangeCallback: function () {}
}

export default Filter;