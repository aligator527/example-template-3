import React from 'react';

/**
 * Component for Panel of Filter
 *
 * @component
 *
 * @param {*} props
 * @return {React.ReactElement}
 */
function FilterPanel(props) {
  return (
    <div className='filterPanel-container'>
      <div className='filterPanel-container__list-item'>
        NUMBER OF TRANSFERS
      </div>
      <div className='filterPanel-container__list-item
                      filterPanel-container__list-item--hover'>
        <div className='list-item__container'>
          <input type="checkbox" className="checkbox"></input>
          <div>ALL</div>
        </div>
      </div>
      <div className='filterPanel-container__list-item
                      filterPanel-container__list-item--hover'>
        <div className='list-item__container'>
          <input type="checkbox" className="checkbox"></input>
          <div>Without transfers</div>
        </div>
      </div>
      <div className='filterPanel-container__list-item
                      filterPanel-container__list-item--hover'>
        <div className='list-item__container'>
          <input type="checkbox" className="checkbox"></input>
          <div>1 transfer</div>
        </div>
      </div>
      <div className='filterPanel-container__list-item
                      filterPanel-container__list-item--hover'>
        <div className='list-item__container'>
          <input type="checkbox" className="checkbox"></input>
          <div>2 transfers</div>
        </div>
      </div>
      <div className='filterPanel-container__list-item
                      filterPanel-container__list-item--hover'>
        <div className='list-item__container'>
          <input type="checkbox" className="checkbox"></input>
          <div>3 transfers</div>
        </div>
      </div>
    </div>
  );
}

FilterPanel.propTypes = {};

export default FilterPanel;
