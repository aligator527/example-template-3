import React from 'react';
import FilterPrices from './TicketsPanel/FilterPrices';
import Ticket from './TicketsPanel/Ticket';

/**
 * Component to display Panel of Tickets with Filter of Prices
 *
 * @component
 *
 * @param {*} props
 * @return {React.ReactElement}
 */
function TicketsPanel(props) {
  return (
    <div>
      <FilterPrices></FilterPrices>
      {(()=> {
        const arr = [];
        for (let i = 0; i < 5; i++) {
          arr.push(<Ticket></Ticket>);
        }
        return arr;
      })()}
      <div className='showmore'>
        SHOW MORE 5 TICKETS!
      </div>
    </div>
  );
}

TicketsPanel.propTypes = {};

export default TicketsPanel;
