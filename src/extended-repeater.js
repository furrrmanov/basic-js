module.exports = function repeater(str, options) {
  let {
    addition: add = "",
    additionSeparator: addsep = "",
    separator: sep = "+",
    repeatTimes: repTime = 1,
    additionRepeatTimes: addrep = 1
  } = options;

  if(addrep==1&&!addsep){
    return (str+(add+addsep).repeat(addrep) +sep).repeat(repTime).slice(0,-sep.length)
 }
 else{
 return (str+(add+addsep).repeat(addrep).slice(0,-addsep.length) +sep).repeat(repTime).slice(0,-sep.length)
 }
  
 
};
