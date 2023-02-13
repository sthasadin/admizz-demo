export default (text) => {
  const wordsPerMinute = 200;
  let time;
  const textLength = text?.split(" ").length; // Split by words
  if (textLength > 0) {
    const value = Math.ceil(textLength / wordsPerMinute);
    time = value;
  }
  return time;
};
