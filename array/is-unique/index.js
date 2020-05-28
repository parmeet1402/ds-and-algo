const isUnique = str => {
  // 1. convert str into array
  const strArr = str.split("");
  // 2. find unique items wrt first item of index
  const uniqueArr = strArr.filter(
    (item, index, arr) => arr.indexOf(item) === index
  );
  return uniqueArr.length === str.length;
};

console.log(isUnique("heyaaa"));

export default isUnique;
