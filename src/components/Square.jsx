import React from 'react';


const LIGHT_SQUARE = '#f0d9b5';
const DARK_SQUARE = '#b58863';
export const Square = ({black=false, children, onClack}) => (
  <div style={{
    backgroundColor:black? DARK_SQUARE:LIGHT_SQUARE, 
    width:100,
    height:100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}
  onClick={onClack}>
  { children }
  </div>
)