import React from 'react';
import Button from './Button';

const FormSplitBill = () => {
  return (
    <form className='form-split-bill'>
      <h2>Split bill with X</h2>

      <label htmlFor="">💰 Amount</label>
      <input type="text" />

      <label htmlFor="">👨 My bill</label>
      <input type="text" />

      <label htmlFor="">🧔‍♂️ Friend's bill</label>
      <input type="text" disabled />

      <label htmlFor="">🧑‍🤝‍🧑 Who's paying?</label>
      <select name="" id="">
        <option value="user">Me</option>
        <option value="friend">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  )
}

export default FormSplitBill;