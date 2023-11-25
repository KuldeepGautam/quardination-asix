import React, { useState } from "react";

const Quardination = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleClick = (event) => {
    const { clientX, clientY } = event;
    setCoordinates({ x: clientX, y: clientY });
  };

  return (
    <div className="main" onClick={handleClick}>
      <img
        src="/Assets/wizaart.gif"
        alt="wizaart"
        className="image-area"
        style={{
          left: coordinates.x,
          top: coordinates.y,
        }}
      />
    </div>
  );
};

export default Quardination;
