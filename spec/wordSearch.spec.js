
const { searchStraightLineInclude, searchSnakingInclude} = require('../wordSearch');

let puzzle;
beforeEach(() => {
  puzzle = [
    ['a', 'k', 'f', 'o', 'x', 'e', 's'],
    ['s', 'o', 'a', 'w', 'a', 'h', 'p'],
    ['i', 't', 'c', 'k', 'e', 't', 'n'],
    ['o', 't', 's', 'd', 'h', 'o', 'h'],
    ['s', 'e', 'x', 'g', 's', 't', 'a'],
    ['u', 'r', 'p', 'i', 'w', 'e', 'u'],
    ['z', 's', 'b', 'n', 'u', 'i', 'r'],
  ];
});

describe ('searchStraightLineInclude', () => {
  it('should return true for foxes', () => {
    expect(searchStraightLineInclude('foxes', puzzle)).toBeTruthy();
  })

  it('should return true for otters', () => {
    expect(searchStraightLineInclude('otters', puzzle)).toBeTruthy();
  })

  it('should return true for bison', () => {
    expect(searchStraightLineInclude('bison', puzzle)).toBeTruthy();
  })

  it('should return false for hello', () => {
    expect(searchStraightLineInclude('hello', puzzle)).toBeFalsy();
  })
  
})


describe ('searchSnakingInclude', () => {
  it('should return true for nighthawks', () => {
    expect(searchSnakingInclude('nighthawks', puzzle)).toBeTruthy();
  })

  it('should return false for hello', () => {
    expect(searchSnakingInclude('word', puzzle)).toBeFalsy();
  })
})
