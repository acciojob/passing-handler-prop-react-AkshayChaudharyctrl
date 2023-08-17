import React from 'react';

const Selection = ({ selectedColor }) => {
  const boxes = [1, 2, 3];

  return (
    <div className="selection-container">
      {boxes.map((boxNumber) => (
        <div
          key={boxNumber}
          className="fix-box"
          style={{ backgroundColor: selectedColor }}
        >
          Box {boxNumber}
        </div>
      ))}
    </div>
  );
};

export default Selection;

