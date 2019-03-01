import React from 'react';
import { Square } from './Square';
import Pawn from './Pawn';

const rows = [8, 7, 6, 5, 4, 3, 2, 1];
const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const isEven = n => n % 2 === 0;
const isBlack = (row, columnIndex) => {
  const shift = row % 2;
  return !isEven(columnIndex + shift);
}

export default class Board extends React.Component {
  state = {
    position: 'b2',
    selected: null
  }

  onPositionChange = (column, row) => () => {console.log(column, row)
  this.setState({position:`${column}${row}`})
  }

  onSelect = (column, row) => () => {
    this.setState({selected:`${column}${row}`});
  }

  render() {
    const { position, selected } = this.state;
    return (<div>
      {rows.map(r => (
        <div key={r} style={{ display: 'flex' }}>
          {columns.map((c, index) => (
            <Square key={c} selected={`${c}${r}` === selected} black={isBlack(r, index)} onClack={this.onSelect(c,r)}>
            { position === `${c}${r}` && <Pawn></Pawn> }
            </Square>
          ))}
        </div>)
      )}
    </div>
    )
  }
}