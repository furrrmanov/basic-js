module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
      }
    
      if(arr.length==0){
        return []
      }
    
      let app = []
      for (let i = 0; i < arr.length; i++) {
         if (/^--(double|discard)-(next|prev)$/.test(arr[i]) ) {
            if (arr[i] == "--double-next" & (i+1) < arr.length ) app.push(arr[i+1]);
           
            if (arr[i] == "--double-prev" & (i-1) >= 0 ) app.push(arr[i-1]);
           
            if (arr[i] == "--discard-prev") app.pop();
         } else {
           if (arr[i-1] !== "--discard-next") app.push(arr[i]);
         }
      }
      return app

};
