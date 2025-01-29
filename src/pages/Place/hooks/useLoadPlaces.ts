import { useQuery } from '@tanstack/react-query';
import { loadPlaces } from '../api';

const useLoadPlaces = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['places'],
    queryFn: loadPlaces,
    select: (data) => data.places,
  });
  return { data, error, isLoading };
};

export default useLoadPlaces;
