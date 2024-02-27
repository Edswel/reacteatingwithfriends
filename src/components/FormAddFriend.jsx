import React from 'react';
import Button from './Button';

const FormAddFriend = () => {
  return (
    <form className='form-add-friend'>
      <label htmlFor="">🧑‍🤝‍🧑 Name</label>
      <input type="text" />

      <label htmlFor="">🖼️ Image</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  )
}

export default FormAddFriend;