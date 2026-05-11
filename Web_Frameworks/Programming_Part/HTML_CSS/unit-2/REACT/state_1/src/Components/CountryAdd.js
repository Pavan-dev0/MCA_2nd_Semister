import React, { Component } from 'react';
import CountryFilter from './CountryFilter';
import CountryTable from './CountryTable';

class CountryAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: ['India', 'USA', 'Canada'],
      newCountry: '',
      filterText: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ newCountry: event.target.value });
  };

  handleAddCountry = (event) => {
    event.preventDefault();
    const country = this.state.newCountry.trim();

    if (!country) {
      return;
    }

    this.setState((prevState) => ({
      countries: [...prevState.countries, country],
      newCountry: '',
    }));
  };

  handleFilterChange = (filterText) => {
    this.setState({ filterText });
  };

  handleDeleteCountry = (deleteIndex) => {
    this.setState((prevState) => ({
      countries: prevState.countries.filter((_, index) => index !== deleteIndex),
    }));
  };

  getFilteredCountries() {
    const { countries, filterText } = this.state;
    const normalizedFilter = filterText.toLowerCase();

    return countries
      .map((country, index) => ({ country, index }))
      .filter(({ country }) => country.toLowerCase().includes(normalizedFilter));
  }

  render() {
    const filteredCountries = this.getFilteredCountries();

    return (
      <div>
        <h3>Country Manager</h3>
        <CountryFilter
          filterText={this.state.filterText}
          onFilterChange={this.handleFilterChange}
        />
        <form onSubmit={this.handleAddCountry}>
          <input
            type="text"
            value={this.state.newCountry}
            onChange={this.handleInputChange}
            placeholder="Add a new country"
          />
          <button type="submit">Add Country</button>
        </form>
        <CountryTable
          countries={filteredCountries}
          onDeleteCountry={this.handleDeleteCountry}
        />
      </div>
    );
  }
}

export default CountryAdd;
