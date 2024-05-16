import React, { useContext, useState } from 'react';
import { AppContext } from "../context/AppContext";
const Currency = () => {
  const [currency, setCurrency] = useState('');
  return (
    <select
      id="currency"
      className="custom-select"
      value={currency}
      style={{ color: "green" }}
      onChange={(event) => setCurrency(event.target.value)}
    >
      <option defaultValue>Currency(£ Pound)</option>
      <option value="dollar">$ Dollar</option>
      <option value="pound">£ Pound</option>
      <option value="euro">€ Euro</option>
      <option value="ruppee">₹ Ruppee</option>
    </select>
  );
};
export default Currency;
