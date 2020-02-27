module.exports = function createDreamTeam(members) {
  return Array.isArray(members) && members.length ?
    members.reduce((arrayFirst, currentName) => {
      if (typeof currentName === 'string') {
        const firstLetter = currentName.trim().charAt(0).toUpperCase();
        return arrayFirst.concat([firstLetter]);
      } else return arrayFirst;
    }, []).sort().join('') : false;
};
