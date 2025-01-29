// import './PlacesList.css';

import { IPlace } from '../type/type';
import PlaceCard from './PlaceCard';

type PlacesListProps = {
  places: IPlace[];
};

const PlacesList = ({ places }: PlacesListProps): JSX.Element => {
  return (
    <div className="PlacesList">
      {places?.map((place) => (
        <PlaceCard place={place} />
      ))}
    </div>
  );
};

export default PlacesList;
