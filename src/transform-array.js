module.exports = function transform(arr) {
    throw 'Not implemented';
    if(! Array.isArray(arr)){
        return 'Error'
        }
        for(let i =0;i<arr.length;i++){
        if(arr[i]=='--double-next'&&i!==arr.length-1){
        return arr.join('').replace(arr[i],arr[i+1]).split('')
        }
        else if(arr[i]=='--double-next'&&i==arr.length-1){
        return arr
        }
        
        if(arr[i]=='--discard-prev'&&i!==0){
        arr.splice(i-1,2,'')
        return arr.join('').split('')
        }
        else if(arr[i]=='--discard-prev'&&i==0){
        return arr
        }
        if(arr[i]=='--double-prev'&&i!==0){
        return arr.join('').replace(arr[i],arr[i-1]).split('')
        }
        else if(arr[i]=='--double-prev'&&i==0){
        return arr
        }
        }
};
