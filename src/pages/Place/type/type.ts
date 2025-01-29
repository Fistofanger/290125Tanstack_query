export interface IPlace {
  id: number;
  name: string;
  description: string;
  latitude: string;
  longitude: string;
}

export type PlaceId = IPlace['id'];

export type PlaceWithoutId = Omit<IPlace, 'id'>;

export interface IPlaceResponse {
  places?: IPlace[];
  message: string;
  place?: IPlace;
  placeId?: PlaceId;
}
