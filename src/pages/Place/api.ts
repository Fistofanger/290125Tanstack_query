// import { IPlace } from './type/type';

import { IPlaceResponse, PlaceWithoutId } from './type/type';

const baseUrl = '/api/places';
export const loadPlaces = async ({
  signal,
}: {
  signal: AbortSignal;
}): Promise<IPlaceResponse> => {
  const response = await fetch(baseUrl, { signal });
  return await response.json();
};

export const addPlace = async (
  place: PlaceWithoutId,

  signal: AbortSignal
): Promise<IPlaceResponse> => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(place),
    signal,
  });
  return await response.json();
};
