/* eslint-disable camelcase */
// the API data dosent use camel case!
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const dateFormater = () => {
  const date = new Date();

  const d = date.getDate();
  let m = date.getMonth();
  const y = date.getFullYear();
  m += 1;

  const dateString = `${y}-${m <= 9 ? `0${m}` : m}-${(d <= 9 ? `0${d}` : d)}`;
  return dateString;
};

export function Country({ name, today_confirmed }) {
  return (
    <div className="card">
      <NavLink to={`/${name}`}>
        <li className="countryCard">
          <div className="mapBox">
            <img
              className="map"
              src={`https://mapsvg.com/static/maps/geo-calibrated/${name.toLowerCase()}.svg`}
              alt="map"
              /* eslint-disable no-param-reassign */
              onError={(event) => {
                event.target.src = 'https://img.icons8.com/pastel-glyph/120/000000/map.png';
                event.onerror = null;
              }}
            />
          </div>
          <h4>{name}</h4>
          <h4>{today_confirmed}</h4>
        </li>
      </NavLink>
    </div>
  );
}

Country.propTypes = {
  name: PropTypes.string.isRequired,
  today_confirmed: PropTypes.number.isRequired,
};

function Countries() {
  const [searchField, setSearchField] = useState('');
  const countries = useSelector((state) => state.countriesReducer);
  const date = dateFormater();

  const handleSearch = (e) => setSearchField((e.target.value).toLowerCase());
  const filteredCountries = countries.filter((country) => country.id.includes(searchField));

  return (
    <div>
      <header className="cover">
        <div className="title">
          <div className="logo">
            <img src="https://img.icons8.com/external-wanicon-lineal-wanicon/120/ffffff/external-world-virus-transmission-wanicon-lineal-wanicon.png" alt="virus-transmission" />
            <div>
              <h1>2022</h1>
              <h3>covid-19 world tracker</h3>
            </div>
          </div>
        </div>
      </header>
      <div className="searchBar">
        <div className="dateSelection">
          <h2> Stats by country</h2>
          <h3 className="date">{date}</h3>
        </div>
        <input type="text" name="search" id="search" placeholder="Search Countries" value={searchField} onChange={handleSearch} className="searchField" />
      </div>
      <ul className="Countriescontainer">
        {filteredCountries.map(({ id, name, today_confirmed }) => (
          <Country
            key={id}
            id={id}
            name={name}
            today_confirmed={today_confirmed}
          />
        ))}
      </ul>
    </div>
  );
}

export default Countries;
