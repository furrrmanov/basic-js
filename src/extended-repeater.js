module.exports = function repeater(str, options) {
    throw 'Not implemented';
    his.repeatTimes=options.repeatTimes

this.separator=options.separator

this.addition=options.addition

this.additionRepeatTimes=
options.additionRepeatTimes

this.additionSeparator=
options.additionSeparator

let res =str+(this.addition+this.additionSeparator).repeat(this.additionRepeatTimes).slice(0,-2) +this.separator

return res.repeat(this.repeatTimes)
    
};
  