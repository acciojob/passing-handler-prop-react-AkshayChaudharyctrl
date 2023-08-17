import React, { useState } from 'react';
import ColourSelector from './ColourSelector';
import Selection from './Selection';

function App() {
  const [selectedColor, setSelectedColor] = useState(''); // State to store selected color

  // Handler function to update selected color
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="App">
      <ColourSelector onSelectColor={handleColorSelect} />
      <Selection selectedColor={selectedColor} />
    </div>
  );
}

export default App;
