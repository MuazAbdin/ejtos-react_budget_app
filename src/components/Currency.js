import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);
  const currencies = [
    {name: 'Dollar', logo: '$'},
    {name: 'Pound', logo: '£'},
    {name: 'Euro', logo: '€'},
    {name: 'Ruppee', logo: '₹'},
    {name: 'NIS', logo: '₪'}
  ];
  const options = currencies.map( (item, index) => {
    return (
      <option 
        key={index + 1}
        value={`${item.logo} ${item.name}`} 
        name={`${item.name}`.toLowerCase()}>
          {`${item.logo} ${item.name}`}
      </option>
    );
  } );

  const setCurrency = (currency) => {
    dispatch({type: 'CHG_CURRENCY', payload: currency});
  };

  return (
    <div className='alert alert-success'>
      <label htmlFor='currencyGroupSelect' style={{ marginRight: '.5rem'}}>Currency:</label>
      <select className="custom-select" id="currencyGroupSelect" 
              defaultValue={options[0]}
              onChange={(event) => setCurrency(event.target.value.slice(0,1))}>
        {options}
      </select>
    </div>

  );
}

export default Currency;