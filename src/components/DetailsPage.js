/* eslint-disable camelcase */
// the API data dosent use camel case!

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Region({
  name, todayConfirmed, todayDeaths, todayOpenCases, todayRecovered,
}) {
  return (
    <li className="detailsRow">
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <h4>
          Confirmed:
          {' '}
          {todayConfirmed}
        </h4>
        <h4>
          Deaths:
          {' '}
          {todayDeaths}
        </h4>
        <h4>
          Open Cases:
          {' '}
          {todayOpenCases}
        </h4>
        <h4>
          Recovered:
          {' '}
          {todayRecovered}
        </h4>
      </div>
    </li>
  );
}

Region.propTypes = {
  name: PropTypes.string.isRequired,
  todayConfirmed: PropTypes.number.isRequired,
  todayDeaths: PropTypes.number.isRequired,
  todayOpenCases: PropTypes.number.isRequired,
  todayRecovered: PropTypes.number.isRequired,
};

function Regions() {
  const countries = useSelector((state) => state.countriesReducer);
  const { id } = useParams();
  let country = [];
  countries.forEach((element) => {
    if (element.name === id) {
      country = element;
    }
  });

  const {
    name, regions, today_confirmed, today_deaths, today_open_cases, today_recovered,
  } = country;

  return (
    <div>
      <div className="detailsBaner">
        <img
          className="map2"
          src={`https://mapsvg.com/static/maps/geo-calibrated/${name.toLowerCase()}.svg`}
          alt="map"
          /* eslint-disable no-param-reassign */
          onError={(event) => {
            event.target.src = 'https://img.icons8.com/pastel-glyph/120/000000/map.png';
            event.onerror = null;
          }}
        />
        <div className="countryStatus">
          <h2>{name}</h2>
          <h4>
            Today Confirmed:
            {' '}
            {today_confirmed}
          </h4>
          <h4>
            Today Deaths:
            {' '}
            {today_deaths}
          </h4>
          <h4>
            Today Open Cases:
            {' '}
            {today_open_cases}
          </h4>
          <h4>
            Today Recovered:
            {' '}
            {today_recovered}
          </h4>
        </div>
      </div>
      <div className="searchBar">
        <h2>City/Town breakdown - 2022</h2>
      </div>
      <ul className="regionContainer">
        {regions.length === 0 ? (<h2 style={{ margin: '0.5% 5%' }}>No data available </h2>)
          : regions.map(({
            id, name, today_confirmed, today_deaths, today_open_cases, today_recovered,
          }) => (
            <Region
              key={id}
              id={id}
              name={name}
              todayConfirmed={today_confirmed}
              todayDeaths={today_deaths}
              todayOpenCases={today_open_cases}
              todayRecovered={today_recovered}
            />
          ))}
      </ul>
    </div>
  );
}

export default Regions;
