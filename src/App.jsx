import React, { useState } from 'react';

const App = () => {
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color="red"
          selectedColor={selectedColor}
          onClickCallback={(color) => setSelectedColor(color)}
        />
        <Color
          color="orange"
          selectedColor={selectedColor}
          onClickCallback={(color) => setSelectedColor(color)}
        />
        <Color
          color="green"
          selectedColor={selectedColor}
          onClickCallback={(color) => setSelectedColor(color)}
        />
        <Color
          color="blue"
          selectedColor={selectedColor}
          onClickCallback={(color) => setSelectedColor(color)}
        />
      </div>
    </div>
  );
};

const Color = ({ color, selectedColor, onClickCallback }) => {
  const handleClick = () => {
    onClickCallback(color);
  };

  return (
    <div
      className={`color ${color} ${selectedColor === color ? 'selected' : ''}`}
      onClick={handleClick}
    ></div>
  );
};

export default App;


