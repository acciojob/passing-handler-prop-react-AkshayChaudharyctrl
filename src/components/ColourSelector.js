import React from 'react';

const ColourSelector = ({ onSelectColor }) => {
  const colors = ['red', 'green', 'blue'];

  return (
    <div className="color-selector">
      {colors.map((color, index) => (
        <button
          key={index}
          className={`color-button ${color}`}
          onClick={() => onSelectColor(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColourSelector;
