
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  
  let cols = [];
  for (let i = 0; i < letters[0].length; i++) {
    cols[i] = "";
  }
  
  for (let m of letters) {
    for (let j = 0; j < m.length; j++) {
      cols[j] += m[j];
    }
  }
  
  for (let n of cols) {
    if (n.includes(word)) return true;
  }
  
  return false;
};
  
module.exports = wordSearch;