module.exports = function createDreamTeam(members){
  if(!Array.isArray(members)){
    return false
  }

 let str = members.filter(item=>typeof(item)=="string")
 return str.map(i=>i.trim()[0].toUpperCase()).sort().join('')
};