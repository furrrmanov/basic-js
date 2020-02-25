const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(value);

    return this;
  },

  removeLink(position) {
    if (typeof(position) !== "number") {
      this.result = [];
      throw new Error();
    }
    position--;

    if (position < 0 || position >= this.getLength()) {
      this.result = [];
      throw new Error();
    }
    this.result.splice(position, 1);
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let str = "";

    for (let i = 0; i < this.getLength(); ++i) {
      str += `( ${this.result[i]} )`;

      if (i < this.getLength() - 1) {
        str += "~~";
      }
    }

    this.result = [];
    return str;
  }
};

module.exports = chainMaker;
