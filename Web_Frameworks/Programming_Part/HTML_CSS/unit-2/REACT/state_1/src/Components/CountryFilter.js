import React from 'react';

function CountryFilter({ filterText, onFilterChange }) {
  return (
    <div>
      <h4>Filter Countries</h4>
      <input
        type="text"
        value={filterText}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="Search countries..."
      />
    </div>
  );
}

export default CountryFilter;
