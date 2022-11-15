import { useEffect, useState } from 'react';
import { HeaderComponent } from '../../components';
import CardComponent from './components/body-card/CardComponent';
import { useFetch } from './hooks/useFetch';

export const HomePage = () => {
  const { animalsData } = useFetch();

  return (
    <div>
      <HeaderComponent />
      {animalsData.map((animalInfo) => {
        return <CardComponent key={animalInfo.id} {...animalInfo} />;
      })}
    </div>
  );
};
