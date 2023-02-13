import React from 'react';

/**
 * Component for Filter of Prices
 *
 * @component
 *
 * @param {*} props
 * @return {React.ReactElement}
 */
function FilterPrices(props) {
  return (
    <div className='filterprices-container'>
      <div className='filterprices-container__filter
                      filterprices-container__filter--focus'
      onClick={changeFocus}>
        MOST CHEAPEST
      </div>
      <div className='filterprices-container__filter'
        onClick={changeFocus}>
        MOST FASTEST
      </div>
      <div className='filterprices-container__filter'
        onClick={changeFocus}>
        OPTIMAL
      </div>
    </div>
  );
}
/**
 * Add focus-class to clicked element and delete from other
 *
 * @param {*} e
 */
function changeFocus(e) {
  if (e.target.classList.contains('filterprices-container__filter--focus')) {
    return;
  }
  const elems = document
      .getElementsByClassName('filterprices-container__filter');

  for (const elem of elems) {
    if (elem.classList.contains('filterprices-container__filter--focus')) {
      elem.classList.remove('filterprices-container__filter--focus');
    }
  };

  e.target.classList.add('filterprices-container__filter--focus');
}

FilterPrices.propTypes = {};

export default FilterPrices;
