class VigenereCipheringMachine {
    constructor(direct=true) {
        this.direct = direct;
    }

    sumCharCode(sum) {
        return sum.charCodeAt(0) - 'A'.charCodeAt(0);
    }

    shift(sum, length) {
        const code = this.sumCharCode(sum);
        return String.fromCharCode((code + length) % 26 + 'A'.charCodeAt(0));
    }

    encrypt(string, key) {
        return this.crypt(string, key, false);
    }

    decrypt(string, key) {
        return this.crypt(string, key, true);
    }

    crypt(string, key, isDecrypt) {
        if(string === undefined || key == undefined) {
            throw new Error();
        }

        string = string.toUpperCase();
        key = key.toUpperCase();

        const res = [];
        let coding = 0;
        for(let i = 0; i < string.length; ++i) {
            if(string[i] >= 'A' && string[i] <= 'Z') {
                if(isDecrypt) {
                    res.push(this.shift(string[i], 26 - this.sumCharCode(key[coding % key.length])));
                } else {
                    res.push(this.shift(string[i], this.sumCharCode(key[coding % key.length])));
                }
                coding++;
            } else {
                res.push(string[i]);
            }
        }

        if(!this.direct) {
            res.reverse();
        }

        return res.join('');
    }
}

module.exports = VigenereCipheringMachine;