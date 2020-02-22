const chainMaker = {
  result:[],
  str:'',
  getLength() {
    throw 'Not implemented';
    this.result=this.result.length
    return this
  },
  addLink(value) {
    throw 'Not implemented';
    if(!value){
      this.result.push('')
    }
    else{
      this.result.push(value)
    }
  },

  removeLink(position) {
    throw 'Not implemented';
    this.result=this.result.filter((item)=>item!==position)
    return this
  },
  reverseChain() {
    throw 'Not implemented';
    this.result=this.result.reverse()
  },
  finishChain() {
    throw 'Not implemented';
    for(let i of this.result){
      this.str+=`(${i})`
    }
    this.str=this.str.slice(1,-1)
    return this
  }
};

module.exports = chainMaker;
