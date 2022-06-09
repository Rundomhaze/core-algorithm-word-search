let puzzle = [
  ["a", "k", "f", "o", "x", "e", "s"],
  ["s", "o", "a", "w", "a", "h", "p"],
  ["i", "t", "c", "k", "e", "t", "n"],
  ["o", "t", "s", "d", "h", "o", "h"],
  ["s", "e", "x", "g", "s", "t", "a"],
  ["u", "r", "p", "i", "w", "e", "u"],
  ["z", "s", "b", "n", "u", "i", "r"]
]

function searchStraightLineInclude(word, puzzle) {
  let str1 = puzzle.map((el) => el.reduce((acc, el) => acc + el, '')).join('').includes(word)
  let str2 = puzzle.map((el, i) => puzzle.map((el) => el[i]))
    .map((el) => el.reduce((acc, el) => acc + el, ''))
    .join('').includes(word)

  let arr = []
  for (let y = 6; y >= 0; y--) {    
    for (let g = 0; g < 7; g++) {      
      const p = g + 6 - y;
      const el = puzzle[y][g];
      if (!arr[p]) {
        arr[p] = []
      } else {
        arr[p].push(el)
      }
    }
  }
  return str1 || str2
}

// let str = ['foxes', 'otters', 'bison']
// searchStraightLineInclude('otters', puzzle)



function searchSnakingInclude(word, puzzle, startI = 0, startJ = 0, endI = puzzle.length, endJ = puzzle.length){
  let result = false;
  startI = startI < 0 ? 0 : startI;
  startJ = startJ < 0 ? 0 : startJ;
  endI = endI > puzzle.length ? puzzle.length : endI;
  endJ = endJ > puzzle.length ? puzzle.length : endJ;
  for (let i = startI; i < endI; i += 1) {
      for (let j = startJ; j < endJ; j += 1) {
          if (puzzle[i][j] === word[0]) {
              if (word.length === 1) {
                  return true;
              }
              let saveLetter = puzzle[i][j];
              puzzle[i][j] = null;
              result = searchSnakingInclude(word.slice(1), puzzle, i - 1, j - 1, i + 2, j + 2);              
              puzzle[i][j] = saveLetter; 
              if (result) {
                  return result;
              }             
          }
      }
  }
  return result;
}

// searchSnakingInclude('nighthawks', puzzle, startI = 0, startJ = 0, endI = puzzle.length, endJ = puzzle.length)


module.exports = { searchStraightLineInclude, searchSnakingInclude }
