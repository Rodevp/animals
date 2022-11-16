import { HeaderComponent } from '../../components';
import CardComponent from './components/body-card/CardComponent';
import { useFetch } from './hooks/useFetch';

export const HomePage = () => {
  const url = 'http://localhost:8000/api/v1/puppy';

  const { animalsData } = useFetch(url);

  return (
    <div>
      <HeaderComponent />
      {animalsData.puppies &&
        animalsData.puppies.map((animalInfo) => {
          return <CardComponent key={animalInfo._id} {...animalInfo} />;
        })}
    </div>
  );
};
