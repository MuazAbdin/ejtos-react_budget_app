import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, expenses, dispatch, currency } = useContext(AppContext);
  let STEP_SIZE = 10, BUDGET_CEILING = 20000;

  const setBudget = (event) => {
    const spending = expenses.reduce((total, item) => (total = total + item.cost), 0);
    let value = event.target.value;
    if (value > BUDGET_CEILING) { alert(`The value cannot exceed £${BUDGET_CEILING}`); }
    else if (value < spending) { 
      alert(`You cannot reduce the budget value lower than the spending (${spending})`);
    }
    else { dispatch({type: 'SET_BUDGET', payload: value}); }
  }

  return (
    <div className='alert alert-secondary'>
      <label>Budget: {currency}</label>
      <input
        required='required'
        type='number'
        id='budget'
        min={0} step={STEP_SIZE}
        value={budget}
        style={{ marginLeft: '.5rem', size: 10, borderRadius: '5px'}}
        onChange={setBudget}
      />
    </div>
  );
}

export default Budget;
