const text_truncate = (str, length, ending): any => {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = "...";
  }
  if (str?.length > length) {
    return str.substring(0, length - ending?.length) + ending;
  }
  return str;
};
export default text_truncate;
