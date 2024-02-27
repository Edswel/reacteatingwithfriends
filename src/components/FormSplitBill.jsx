import React, { useState } from 'react';
import Button from './Button';

const FormSplitBill = ({selectedFriend, onSplitBill}) => {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser : '';
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
  }

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Split bill with {selectedFriend.name}</h2>

      <label htmlFor="">💰 Amount</label>
      <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />

      <label htmlFor="">👨 My bill</label>
      <input type="text" value={paidByUser} onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))} />

      <label htmlFor="">🧔‍♂️ {selectedFriend.name}'s bill</label>
      <input type="text" value={paidByFriend} disabled />

      <label htmlFor="">🧑‍🤝‍🧑 Who's paying?</label>
      <select name="" id="" value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">Me</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  )
}

export default FormSplitBill;