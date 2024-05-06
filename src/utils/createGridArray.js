export function createGridArray(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 4) {
    const item = {
      main: arr[i],
      fourth: [arr[i + 1], arr[i + 2], arr[i + 3], arr[i + 4]],
      isReverse: i % 2 === 0 ? false : true,
    };
    i++;
    result.push(item);
  }
  return result;
}
