import { AttributeValue } from '../types/attributeValue';

export function useFilterByProductAttributeName(
  arr: AttributeValue[],
  filterName: string
) {
  return arr.filter(item => {
    const { productAttribute } = item;
    const { name } = productAttribute;
    return filterName.toLowerCase() === name.toLowerCase();
  });
}
