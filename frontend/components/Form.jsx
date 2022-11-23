
import React from 'react';
import PropTypes from 'prop-types';

export default function Form({ onSubmit, currentAccountId }) {
  return (
    <form onSubmit={onSubmit}>
      <fieldset id="fieldset">
        <p>{ currentAccountId }</p>
        <p className="highlight">
          <label htmlFor="message">Message:</label>
          <input
            autoComplete="off"
            autoFocus
            id="message"
            required
          />
        </p>
        <p>
          <label htmlFor="donation">Transaction fee :<span title="NEAR Tokens"> <strong>1 Ⓝ</strong> </span></label>
          <input
            autoComplete="off"
            defaultValue={'1'}
            id="donation"
            min="1"
            max="1"
            step="1"
            type="number"
          />
          <span title="NEAR Tokens">Ⓝ</span>
        </p>
        
        <button type="submit">
          Sign the Will
        </button>
        
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  })
};