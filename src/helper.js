

export function searchList(list, key) {
  for (let i = 0, l = list.length; i < l; i += 1) {
    if (list[i][0] === key) {
      return i;
    }
  }

  return -1;
}