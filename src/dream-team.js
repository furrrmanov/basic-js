module.exports = function createDreamTeam(members){
  throw 'Not implemented';
  if(!Array.isArray(members)){
    return false
  }
 return members.filter(item=>typeof(item)=="string").sort().map(i=>i[0].toUpperCase()).join('')
};