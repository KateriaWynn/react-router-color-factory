import React, { useState } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { useHistory } from 'react-router-dom';
import './new-color-form.scss';

export default function NewColorForm({ addColor }) {
  let [color, setColor] = useState('#aabbcc');
  const history = useHistory();

  function handleSubmit(e) {
    const colorHex = e.target[0].defaultValue;
    e.preventDefault();
    addColor(colorHex);
    history.push('/colors');
  }

  return (
    <div>
      <form className="new-color-form" onSubmit={handleSubmit}>
        <h1>Choose</h1>
        <HexColorPicker color={color} onChange={setColor} />
        <HexColorInput color={color} onChange={setColor} />
        <button type="submit">Add color</button>
      </form>
    </div>
  );
}
