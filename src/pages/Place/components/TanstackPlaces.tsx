import PlacesList from './PlacesList';
import useLoadPlaces from '../hooks/useLoadPlaces';

const TanstackPlaces = (): JSX.Element => {
  const { data, error, isLoading } = useLoadPlaces();
  return (
    <>
      {}
      {isLoading && <p>Loading Places...</p>}
      {error && <p>Error fetching Places</p>}
      {data && <PlacesList places={data} />}
    </>
  );
};

export default TanstackPlaces;
