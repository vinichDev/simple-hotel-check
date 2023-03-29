import React from 'react';
import FilterArrows from "../FilterArrows";

const FilterButton = ({name, text, filterType, filterOrder, toggleFilter, filterRef}) => {


  return (
    <button
      type='button'
      name={name}
      className='filter-button'
      ref={filterRef}
      onClick={toggleFilter}
    >
      <div className='filter-button__text'>{text}</div>
      <FilterArrows
        filterType={filterType}
        filterOrder={filterOrder}
      />
    </button>
  );
};

export default FilterButton;