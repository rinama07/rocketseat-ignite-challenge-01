export function getListWithItemUpdated<T>(
  list: T[],
  itemIndex: number,
  newItem: T
): T[] {
  if (list.length) {
    return [
      ...list.slice(0, itemIndex),
      newItem,
      ...list.slice(itemIndex + 1, list.length),
    ];
  }

  return list;
}
