import React, { useState } from 'react';

function ChangeUserRole({ onChangeRole }) {
  const [role, setRole] = useState('User');

  const handleChange = (event) => {
    setRole(event.target.value);
    console.log('Role changed to:', event.target.value); // Debugging log
    onChangeRole(event.target.value);
  };

  return (
    <div>
      <label htmlFor="role">Change Role: </label>
      <select id="role" value={role} onChange={handleChange}>
        <option value="User">User</option>
        <option value="Admin">Admin</option>
        <option value="Seller">Seller</option>
      </select>
    </div>
  );
}

export default ChangeUserRole;
