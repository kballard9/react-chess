const white = {
  a1: { type: 'rook', color: 'white'},
  b1: { type: 'knight', color: 'white'},
  c1: { type: 'bishop', color: 'white'},
  d1: { type: 'queen', color: 'white'},
  e1: { type: 'king', color: 'white'},
  f1: { type: 'bishop', color: 'white'},
  g1: { type: 'knight', color: 'white'},
  h1: { type: 'rook', color: 'white'},
  a2: { type: 'pawn', color: 'white'},
  b2: { type: 'pawn', color: 'white'},
  c2: { type: 'pawn', color: 'white'},
  d2: { type: 'pawn', color: 'white'},
  e2: { type: 'pawn', color: 'white'},
  f2: { type: 'pawn', color: 'white'},
  g2: { type: 'pawn', color: 'white'},
  h2: { type: 'pawn', color: 'white'},
}

const black = {
  a8: { type: 'rook', color: 'black'},
  b8: { type: 'knight', color: 'black'},
  c8: { type: 'bishop', color: 'black'},
  d8: { type: 'queen', color: 'black'},
  e8: { type: 'king', color: 'black'},
  f8: { type: 'bishop', color: 'black'},
  g8: { type: 'knight', color: 'black'},
  h8: { type: 'rook', color: 'black'},
  a7: { type: 'pawn', color: 'black'},
  b7: { type: 'pawn', color: 'black'},
  c7: { type: 'pawn', color: 'black'},
  d7: { type: 'pawn', color: 'black'},
  e7: { type: 'pawn', color: 'black'},
  f7: { type: 'pawn', color: 'black'},
  g7: { type: 'pawn', color: 'black'},
  h7: { type: 'pawn', color: 'black'},
}

const rows = [8, 7, 6, 5, 4, 3, 2, 1];
const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const emptyBoard = [].concat(
  ...rows
    .map(row => columns.map(column => `${column}${row}`)))
    .reduce((acc, cur) => ({
      ...acc,
      [cur]: null
    }), {});

export default {
  ...emptyBoard,
  ...white,
  ...black
};