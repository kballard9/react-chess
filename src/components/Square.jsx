import React, { useState } from 'react';

const LIGHT_SQUARE = '#f0d9b5';
const DARK_SQUARE = '#b58863';

export const Square = ({black=false, children, onClack, selected}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{
      backgroundColor:black? DARK_SQUARE:LIGHT_SQUARE, 
      width:100,
      height:100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: hovered ? .8 : 1,
      border: selected ? '3px dashed #ff0000' : '3px solid transparent'

    }}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    onClick={onClack}>
    { children }
    </div>
  );
}

