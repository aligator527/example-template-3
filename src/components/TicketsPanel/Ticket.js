import React from 'react';
import logo from '../../assets/img/S7 Logo.svg';

/**
 * Component for Ticket
 *
 * @component
 *
 * @param {*} props
 * @return {React.ReactElement}
 */
function Ticket(props) {
  return (
    <div className='ticket-container'>
      <div className='ticket-container__ticket-header'>
        <div className='ticket-header__ticket-price'>13 400￥</div>
        <div className='ticket-header__aircompany-logo'>
          <img src={logo} alt='Logo of S7 Arlines' />
        </div>
      </div>
      <div className='ticket-container__ticket-body'>
        <div className='ticket-body__ticket-airway'>
          <div className='ticket-airway__destination-container'>
            <div className='destination-container__destination'>
              MOW - HKT
            </div>
            <div className='destination-container__da-time'>
              10:45 - 08:00
            </div>
            {/* da-time, da - departure-arrive  */}
          </div>
          <div className='ticket-airway__intime-container'>
            <div className='intime-container__header'>
              IN WAY
            </div>
            <div className='intime-container__intime'>
              21ч 15м
            </div>
          </div>
          <div className='ticket-airway__transfer-container'>
            <div className='transfer-container__header'>
              2 TRANSFER(S)
            </div>
            <div className='transfer-container__transfer-airports'>
              HKG, JNB
            </div>
          </div>
        </div>
        {/* SECOND AIRWAY */}
        <div className='ticket-body__ticket-airway'>
          <div className='ticket-airway__destination-container'>
            <div className='destination-container__destination'>
              MOW - HKT
            </div>
            <div className='destination-container__da-time'>
              11:20 - 00:50
            </div>
            {/* da-time, da - departure-arrive  */}
          </div>
          <div className='ticket-airway__intime-container'>
            <div className='intime-container__header'>
              IN WAY
            </div>
            <div className='intime-container__intime'>
              13ч 30м
            </div>
          </div>
          <div className='ticket-airway__transfer-container'>
            <div className='transfer-container__header'>
              1 TRANSFER(S)
            </div>
            <div className='transfer-container__transfer-airports'>
              HKG
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Ticket.propTypes = {};

export default Ticket;
