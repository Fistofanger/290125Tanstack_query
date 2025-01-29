import { useMutation } from '@tanstack/react-query';
import { PlaceWithoutId } from '../type/type';
import { addPlace } from '../api';

const useAddPlace = (place: PlaceWithoutId) => {
  const { mutate, error, isPending } = useMutation({
    mutationKey: ['place'],
    mutationFn: () => addPlace(place),
    
  });
  return { mutate, error, isPending };
};

export default useAddPlace;
