export default (text) => {
    
    const wordsPerMinute = 200
    let time
    let textLength = text?.split(" ").length; // Split by words
    if(textLength > 0){
        let value = Math.ceil(textLength / wordsPerMinute);
        time = value;
    }
    return time 

}