module.exports = class DepthCalculator {
    calculateDepth(arr) {
        throw 'Not implemented';
        let i = 0;
        while(arr.length){
            i++
            arr = arr.reduce((level,el)=>{
                if(Array.isArray(el)){
                    level.push(...el)
                }
                return level
            },[])
        }
        return i
        
    }
};