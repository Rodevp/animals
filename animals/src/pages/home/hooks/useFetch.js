import { useState } from 'react';
import { fetchPetsInfo } from './services';

export function useFetch() {
  const animalsData = fetchPetsInfo();

  return { animalsData };
}
