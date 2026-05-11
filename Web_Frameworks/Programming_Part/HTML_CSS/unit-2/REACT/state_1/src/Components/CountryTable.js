import React from 'react';

function CountryTable({ countries, onDeleteCountry }) {
  return (
    <div>
      <h4>Country Table</h4>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>#</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {countries.length > 0 ? (
            countries.map(({ country, index }, rowIndex) => (
              <tr key={`${country}-${index}-${rowIndex}`}>
                <td>{rowIndex + 1}</td>
                <td>{country}</td>
                <td>
                  <button type="button" onClick={() => onDeleteCountry(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No countries to display.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CountryTable;
