import { useSearchParams } from 'react-router-dom';

export function useFilterBySearch(arrayForFiltering: any[], keyArr: string[]) {
  const [searchParams] = useSearchParams();
  const searchedWord = searchParams.get('search')?.toLowerCase();
  if (!searchedWord) return arrayForFiltering;
  const filteredArray = arrayForFiltering.filter(item => {
    return keyArr.some(key => item[key]?.toLowerCase().includes(searchedWord));
  });
  return filteredArray;
}
