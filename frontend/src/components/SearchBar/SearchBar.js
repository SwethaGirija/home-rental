import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => {
  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === 'i' ? prev[name] + 1 : prev[name] - 1,
    }));
  };

  const handleSearch = () => {
    navigate('/login'); // Directing to the Login page
  };

  return (
    <div className="search-bar">
      <div className="search-bar-item">
        <FontAwesomeIcon icon={faBed} className="search-bar-icon" />
        <input
          type="text"
          placeholder="Where are you going?"
          className="search-bar-input"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="search-bar-item">
        <FontAwesomeIcon icon={faCalendarDays} className="search-bar-icon" />
        <span className="search-bar-text" onClick={() => setOpenDate(!openDate)}>
          {`${format(dates[0].startDate, 'MM/dd/yyyy')} - ${format(
            dates[0].endDate,
            'MM/dd/yyyy'
          )}`}
        </span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDates([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            className="date-range"
            minDate={new Date()}
          />
        )}
      </div>
      <button className="search-bar-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
