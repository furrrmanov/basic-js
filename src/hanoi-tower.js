module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const numberTurns = 2 ** disksNumber - 1;
    
    return {
        turns: numberTurns,
        seconds: numberTurns / (turnsSpeed / 3600)
    }
}