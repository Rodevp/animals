import { useEffect, useState } from 'react';
import { HeaderComponent } from '../../components';
import CardComponent from './components/body-card/CardComponent';

export const HomePage = () => {
  // const animalsData = [
  //   {
  //     id: '014f341f-bf4c-416a-b8e7-5a1e920149cb',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://images.dog.ceo/breeds/weimaraner/n02092339_5292.jpg',
  //     kind: 'perro',
  //     name: 'camino',
  //     owner: 'Paul,Bronson',
  //     phoneNumber: '+57-311-56377438',
  //   },
  //   {
  //     id: '30355123-7f7a-4af8-b04e-070c90cb1bc5',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://cdn2.thecatapi.com/images/322.jpg',
  //     kind: 'gato',
  //     name: 'eisley',
  //     owner: 'Holly,Jones',
  //     phoneNumber: '+57-311-20437521',
  //   },
  //   {
  //     id: 'fd5b3a7b-0dfe-47fc-b8d5-e8a05efea7d4',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image:
  //       'https://images.unsplash.com/photo-1577099600565-e89ede2b9422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
  //     kind: 'roedor',
  //     name: "lit'l blue",
  //     owner: 'Marietta,Brown',
  //     phoneNumber: '+57-311-76693669',
  //   },
  //   {
  //     id: '87ea5263-9eb9-463b-a7ef-2779a6bf375e',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://images.dog.ceo/breeds/terrier-irish/n02093991_2923.jpg',
  //     kind: 'perro',
  //     name: 'lotti',
  //     owner: 'David,Whitehead',
  //     phoneNumber: '+57-311-5854578',
  //   },
  //   {
  //     id: 'f921b626-84be-4cb2-9cb2-3c414a5337d1',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/About_to_Launch_%2826075320352%29.jpg',
  //     kind: 'ave',
  //     name: 'chapo',
  //     owner: 'David,Adamson',
  //     phoneNumber: '+57-311-99689968',
  //   },
  //   {
  //     id: '7ed36622-4845-423c-b5e3-49c1e799c9cc',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image:
  //       'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
  //     kind: 'roedor',
  //     name: 'shane',
  //     owner: 'Emily,Wood',
  //     phoneNumber: '+57-311-9951253',
  //   },
  //   {
  //     id: '5c87ae80-7a6e-43c8-9ec3-c7fa41b506cf',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://cdn2.thecatapi.com/images/-zZZtANMV.jpg',
  //     kind: 'gato',
  //     name: 'cal',
  //     owner: 'Melissa,Roberts',
  //     phoneNumber: '+57-311-89858398',
  //   },
  //   {
  //     id: '4aadccbf-9ed6-4a5c-8097-5c5fef425ceb',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Raggiana_bird_of_paradise.jpg',
  //     kind: 'ave',
  //     name: 'keta',
  //     owner: 'Vernon,Frank',
  //     phoneNumber: '+57-311-60866773',
  //   },
  //   {
  //     id: '7580cc52-98bc-4256-b020-4acadf483abf',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://images.dog.ceo/breeds/terrier-wheaten/n02098105_2744.jpg',
  //     kind: 'perro',
  //     name: 'kayma',
  //     owner: 'Holly,Jones',
  //     phoneNumber: '+57-311-23001033',
  //   },
  //   {
  //     id: '66539474-9747-4f88-982e-89ff1473d9d1',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://cdn2.thecatapi.com/images/9gh.jpg',
  //     kind: 'gato',
  //     name: 'king louis',
  //     owner: 'Marietta,Brown',
  //     phoneNumber: '+57-311-125733',
  //   },
  //   {
  //     id: '198dc1aa-03ee-40e4-a350-cbd6a3e15a08',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://cdn2.thecatapi.com/images/5os.jpg',
  //     kind: 'gato',
  //     name: 'olive',
  //     owner: 'Mary,Smith',
  //     phoneNumber: '+57-311-71179418',
  //   },
  //   {
  //     id: 'e2a42e35-6199-49e4-bdfd-fa19a8e49b02',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Adult_Steller%27s_sea_eagle_fishing.jpg',
  //     kind: 'ave',
  //     name: 'korra',
  //     owner: 'Kelly,Marder',
  //     phoneNumber: '+57-311-11659455',
  //   },
  //   {
  //     id: '0a1ccfc1-4fb7-455f-9ddc-cb37b1a11556',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://images.dog.ceo/breeds/terrier-norwich/n02094258_2956.jpg',
  //     kind: 'perro',
  //     name: 'arya bark',
  //     owner: 'Mary,Smith',
  //     phoneNumber: '+57-311-67496897',
  //   },
  //   {
  //     id: 'ea0daf3f-e500-45c1-851d-dedaccdbbf6f',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://images.dog.ceo/breeds/terrier-toy/n02087046_7492.jpg',
  //     kind: 'perro',
  //     name: 'boy',
  //     owner: 'David,Adamson',
  //     phoneNumber: '+57-311-14177584',
  //   },
  //   {
  //     id: 'af32308c-0d1c-41c8-a431-976b9d15a597',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image:
  //       'https://images.unsplash.com/photo-1577099600565-e89ede2b9422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
  //     kind: 'roedor',
  //     name: 'kusko',
  //     owner: 'James,Johnson',
  //     phoneNumber: '+57-311-13541506',
  //   },
  //   {
  //     id: 'db164113-7fb2-4276-94b8-52b414f6dbf3',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://cdn2.thecatapi.com/images/ats.jpg',
  //     kind: 'gato',
  //     name: 'izzie',
  //     owner: 'Marietta,Brown',
  //     phoneNumber: '+57-311-74938652',
  //   },
  //   {
  //     id: '01bbddd6-dc88-48b5-a47c-0b6c16f0beb2',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image:
  //       'https://images.unsplash.com/photo-1577099600565-e89ede2b9422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
  //     kind: 'roedor',
  //     name: 'bara',
  //     owner: 'Emily,Manin',
  //     phoneNumber: '+57-311-80837564',
  //   },
  //   {
  //     id: '3176fd3c-7f8c-41a0-ab3c-29f8976809f6',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://images.dog.ceo/breeds/bluetick/n02088632_205.jpg',
  //     kind: 'perro',
  //     name: 'lilly',
  //     owner: 'Kenneth,Charles',
  //     phoneNumber: '+57-311-53645320',
  //   },
  //   {
  //     id: 'd7187d81-ed9c-4cf3-b06d-0deef7c7ec43',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image:
  //       'https://images.unsplash.com/photo-1618252903592-2b8c90c43a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  //     kind: 'roedor',
  //     name: 'weatherby',
  //     owner: 'Vernon,Frank',
  //     phoneNumber: '+57-311-5418798',
  //   },
  //   {
  //     id: 'fa8d435b-f547-4026-a7ed-0eee03184015',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_1798.jpg',
  //     kind: 'perro',
  //     name: 'dumpling',
  //     owner: 'Marietta,Brown',
  //     phoneNumber: '+57-311-30932835',
  //   },
  //   {
  //     id: 'ebdfc320-6c00-4c9a-9306-7e0d9540a811',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image:
  //       'https://images.unsplash.com/photo-1618252903592-2b8c90c43a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  //     kind: 'roedor',
  //     name: 'mowgly',
  //     owner: 'Emily,Manin',
  //     phoneNumber: '+57-311-71167317',
  //   },
  //   {
  //     id: '11f2e0c0-5386-4b4d-963c-dab92540b61d',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/6/63/African_penguin_side_profile.jpg',
  //     kind: 'ave',
  //     name: 'stitch',
  //     owner: 'Vernon,Frank',
  //     phoneNumber: '+57-311-48609897',
  //   },
  //   {
  //     id: 'e349277e-70f9-49c4-98c9-3a2f280a84f1',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image:
  //       'https://images.unsplash.com/photo-1618252903592-2b8c90c43a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  //     kind: 'roedor',
  //     name: '"beowulf ""boomer"""',
  //     owner: 'Sandy,Adams',
  //     phoneNumber: '+57-311-95537325',
  //   },
  //   {
  //     id: 'cd5c8e88-63f3-403d-8def-6bb66e7dbb36',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image:
  //       'https://images.unsplash.com/photo-1618252903592-2b8c90c43a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  //     kind: 'roedor',
  //     name: 'dazee',
  //     owner: 'Sandy,Adams',
  //     phoneNumber: '+57-311-89603599',
  //   },
  //   {
  //     id: '1cb67554-c9bc-4759-9eaf-27497e7175f4',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/2012-lappet-faced-vulture.jpg',
  //     kind: 'ave',
  //     name: 'noa',
  //     owner: 'Patricia,Milgrom',
  //     phoneNumber: '+57-311-11571776',
  //   },
  //   {
  //     id: '79f9702f-8246-4a77-bb19-2b2edf7ad757',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey_crowned_crane_at_Martin_Mere.JPG',
  //     kind: 'ave',
  //     name: 'henni',
  //     owner: 'Harold,Foster',
  //     phoneNumber: '+57-311-15983407',
  //   },
  //   {
  //     id: 'd7e0d048-b3eb-4d7a-96bb-e63d514c735d',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://images.dog.ceo/breeds/dhole/n02115913_2657.jpg',
  //     kind: 'perro',
  //     name: 'nicky',
  //     owner: 'Jose,Rodriguez',
  //     phoneNumber: '+57-311-66777999',
  //   },
  //   {
  //     id: 'ed976589-b271-4911-9273-38fe264b704a',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image:
  //       'https://images.unsplash.com/photo-1618252903592-2b8c90c43a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  //     kind: 'roedor',
  //     name: 'suzzy',
  //     owner: 'Mary,Smith',
  //     phoneNumber: '+57-311-16854551',
  //   },
  //   {
  //     id: '140445e6-ec82-4391-b3cd-c9ee8820c43d',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/c/c6/Tyto_alba_-British_Wildlife_Centre%2C_Surrey%2C_England-8a_%281%29.jpg',
  //     kind: 'ave',
  //     name: 'heidi',
  //     owner: 'Marietta,Brown',
  //     phoneNumber: '+57-311-40078625',
  //   },
  //   {
  //     id: '3291f94d-33d0-4732-80aa-5ed06c5d572e',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://images.dog.ceo/breeds/terrier-american/n02093428_16660.jpg',
  //     kind: 'perro',
  //     name: 'lakyn',
  //     owner: 'Kenneth,Charles',
  //     phoneNumber: '+57-311-34808006',
  //   },
  //   {
  //     id: '555d290f-8eec-49cd-b051-7308b8e6e60e',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://cdn2.thecatapi.com/images/386.jpg',
  //     kind: 'gato',
  //     name: 'mr. man',
  //     owner: 'Paul,Bronson',
  //     phoneNumber: '+57-311-15767601',
  //   },
  //   {
  //     id: 'a3a17909-81b5-494f-bf61-8498a7d8c957',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://images.dog.ceo/breeds/retriever-curly/n02099429_3193.jpg',
  //     kind: 'perro',
  //     name: 'chaco',
  //     owner: 'Emily,Wood',
  //     phoneNumber: '+57-311-89848863',
  //   },
  //   {
  //     id: '9f9db3a9-61c5-41b7-9208-13f3211bab10',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/c/c6/Tyto_alba_-British_Wildlife_Centre%2C_Surrey%2C_England-8a_%281%29.jpg',
  //     kind: 'ave',
  //     name: 'cici',
  //     owner: 'Holly,Jones',
  //     phoneNumber: '+57-311-7047704',
  //   },
  //   {
  //     id: '28ca82c7-37ad-47ee-96ec-1760391bac54',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image:
  //       'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
  //     kind: 'roedor',
  //     name: 'brittle',
  //     owner: 'Paul,Bronson',
  //     phoneNumber: '+57-311-9226836',
  //   },
  //   {
  //     id: 'c756f62a-e7c2-4b0b-8d19-a5ac09ec7e05',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey_crowned_crane_at_Martin_Mere.JPG',
  //     kind: 'ave',
  //     name: 'mattie',
  //     owner: 'Marietta,Brown',
  //     phoneNumber: '+57-311-39578083',
  //   },
  //   {
  //     id: 'a17f257b-335e-435a-ae65-a2c8a6f8a1fd',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://images.dog.ceo/breeds/malamute/n02110063_10768.jpg',
  //     kind: 'perro',
  //     name: 'gyspsy',
  //     owner: 'Paul,Bronson',
  //     phoneNumber: '+57-311-31067456',
  //   },
  //   {
  //     id: 'd58d06ca-a7ec-4a62-86cd-3b209f53fccd',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image:
  //       'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
  //     kind: 'roedor',
  //     name: 'rommel',
  //     owner: 'Vernon,Frank',
  //     phoneNumber: '+57-311-11903320',
  //   },
  //   {
  //     id: 'f4d5c8d2-8662-4bae-92e9-8972cab27295',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image:
  //       'https://images.unsplash.com/photo-1618252903592-2b8c90c43a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  //     kind: 'roedor',
  //     name: 'rudder',
  //     owner: 'Kelly,Marder',
  //     phoneNumber: '+57-311-5426490',
  //   },
  //   {
  //     id: '42fbe346-12be-484d-bfb4-fa79ee78a46e',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://cdn2.thecatapi.com/images/0m3_T6XH9.jpg',
  //     kind: 'gato',
  //     name: 'alley',
  //     owner: 'Emily,Manin',
  //     phoneNumber: '+57-311-90734740',
  //   },
  //   {
  //     id: '95cd0834-463e-46e2-a31d-58c95620722f',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://images.dog.ceo/breeds/schnauzer-giant/n02097130_4265.jpg',
  //     kind: 'perro',
  //     name: 'scooter',
  //     owner: 'Holly,Holmes',
  //     phoneNumber: '+57-311-29802512',
  //   },
  //   {
  //     id: '4f31f32e-31e2-4ae1-8bb0-1663141f0721',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://images.dog.ceo/breeds/tervuren/yoda_on_terrace.jpg',
  //     kind: 'perro',
  //     name: 'natsu',
  //     owner: 'Paul,Bronson',
  //     phoneNumber: '+57-311-69191709',
  //   },
  //   {
  //     id: '07ea0fc7-73c4-4688-b620-11a234ba5441',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://cdn2.thecatapi.com/images/990.jpg',
  //     kind: 'gato',
  //     name: 'glory',
  //     owner: 'William,Martin',
  //     phoneNumber: '+57-311-72991438',
  //   },
  //   {
  //     id: '9d0baef1-3f5a-426c-8d88-79bb19c54676',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image:
  //       'https://images.unsplash.com/photo-1577099600565-e89ede2b9422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
  //     kind: 'roedor',
  //     name: 'archer',
  //     owner: 'Mary,Smith',
  //     phoneNumber: '+57-311-35893057',
  //   },
  //   {
  //     id: '19715653-faec-4a1f-9c90-b80765a0149d',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://images.dog.ceo/breeds/terrier-cairn/n02096177_10959.jpg',
  //     kind: 'perro',
  //     name: 'winry',
  //     owner: 'Frank,Smith',
  //     phoneNumber: '+57-311-97834927',
  //   },
  //   {
  //     id: 'cebc84cb-dc7e-4250-8b2a-7edb937caaff',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://cdn2.thecatapi.com/images/4kl.gif',
  //     kind: 'gato',
  //     name: 'boogie',
  //     owner: 'Paul,Bronson',
  //     phoneNumber: '+57-311-41819157',
  //   },
  //   {
  //     id: '6027d1e1-7ce8-494f-bb40-f2446f5fe491',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://cdn2.thecatapi.com/images/ct3.jpg',
  //     kind: 'gato',
  //     name: 'tee',
  //     owner: 'David,Whitehead',
  //     phoneNumber: '+57-311-21681846',
  //   },
  //   {
  //     id: '2e375e68-807e-48fd-8975-9bae8f149a5d',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Larosterna_inca_-Lima%2C_Peru_-family-8.jpg',
  //     kind: 'ave',
  //     name: 'felix',
  //     owner: 'Harold,Foster',
  //     phoneNumber: '+57-311-8725721',
  //   },
  //   {
  //     id: 'ba9cc76a-f376-4ad4-a7e0-b942fc0d0842',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image:
  //       'https://images.unsplash.com/photo-1577099600565-e89ede2b9422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
  //     kind: 'roedor',
  //     name: 'rocketman',
  //     owner: 'Tracy,Coulter',
  //     phoneNumber: '+57-311-16887772',
  //   },
  //   {
  //     id: 'f7d9f7a1-8e0e-4b20-aaaf-0457bf17fa5a',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image:
  //       'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
  //     kind: 'roedor',
  //     name: 'bobber',
  //     owner: 'Harold,Foster',
  //     phoneNumber: '+57-311-24943036',
  //   },
  //   {
  //     id: 'ac1d9455-f8be-40d1-a850-25ccca412fab',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://images.dog.ceo/breeds/rottweiler/n02106550_11823.jpg',
  //     kind: 'perro',
  //     name: 'jru',
  //     owner: 'James,Johnson',
  //     phoneNumber: '+57-311-59868292',
  //   },
  //   {
  //     id: 'b2cf9d3b-152c-47b7-9b4a-e06a742f026b',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://images.dog.ceo/breeds/bulldog-english/jager-1.jpg',
  //     kind: 'perro',
  //     name: 'harper',
  //     owner: 'James,Johnson',
  //     phoneNumber: '+57-311-16298316',
  //   },
  //   {
  //     id: 'cc15807f-73c9-450a-b1fa-985b835f4cea',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://images.dog.ceo/breeds/pitbull/pitbull dog.jpg',
  //     kind: 'perro',
  //     name: 'krystal',
  //     owner: 'Emily,Wood',
  //     phoneNumber: '+57-311-25953623',
  //   },
  //   {
  //     id: '4948e946-f17b-4c8b-ae02-2d46aa537697',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://cdn2.thecatapi.com/images/e06.jpg',
  //     kind: 'gato',
  //     name: 'cheeky',
  //     owner: 'William,Martin',
  //     phoneNumber: '+57-311-66280977',
  //   },
  //   {
  //     id: '01c90d33-e385-47b4-955b-9a94e5b33b76',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://images.dog.ceo/breeds/kuvasz/n02104029_4494.jpg',
  //     kind: 'perro',
  //     name: 'pacino',
  //     owner: 'David,Whitehead',
  //     phoneNumber: '+57-311-54348902',
  //   },
  //   {
  //     id: 'da89efd9-4cbc-4d94-8a7f-f89dbd8469df',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://cdn2.thecatapi.com/images/rLKF3Yzcf.jpg',
  //     kind: 'gato',
  //     name: 'chewbacca',
  //     owner: 'David,Adamson',
  //     phoneNumber: '+57-311-83528391',
  //   },
  //   {
  //     id: '0712614f-aa6b-46f2-a82a-a76591827520',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://images.dog.ceo/breeds/pembroke/n02113023_3945.jpg',
  //     kind: 'perro',
  //     name: 'steak',
  //     owner: 'Harold,Foster',
  //     phoneNumber: '+57-311-85145346',
  //   },
  //   {
  //     id: '541fee92-a40d-45ea-bb56-82206b430f51',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image:
  //       'https://images.unsplash.com/photo-1618252903592-2b8c90c43a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  //     kind: 'roedor',
  //     name: 'finn boy',
  //     owner: 'Harold,Foster',
  //     phoneNumber: '+57-311-73824807',
  //   },
  //   {
  //     id: '02c686b0-b7dc-4584-a4c8-a6d2ffcea9e0',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://images.dog.ceo/breeds/chow/n02112137_6334.jpg',
  //     kind: 'perro',
  //     name: 'vayne',
  //     owner: 'Kenneth,Charles',
  //     phoneNumber: '+57-311-76549818',
  //   },
  //   {
  //     id: 'd9003dd1-49e7-4950-a677-027395f1a23b',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image:
  //       'https://images.unsplash.com/photo-1618252903592-2b8c90c43a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  //     kind: 'roedor',
  //     name: 'maximillian',
  //     owner: 'Vernon,Frank',
  //     phoneNumber: '+57-311-94566684',
  //   },
  //   {
  //     id: '33e8de67-be99-41a0-aa77-5649a6bddd98',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Pink_backed_pelican_side_view.jpg',
  //     kind: 'ave',
  //     name: 'arlington',
  //     owner: 'Holly,Jones',
  //     phoneNumber: '+57-311-58594356',
  //   },
  //   {
  //     id: '8bc4fd48-ec89-4d4f-ac0d-667d4ec6338c',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image:
  //       'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
  //     kind: 'roedor',
  //     name: 'truman',
  //     owner: 'Frank,Smith',
  //     phoneNumber: '+57-311-25899121',
  //   },
  //   {
  //     id: '8b0441d4-7200-4c88-81d6-d0cde816a46a',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image:
  //       'https://images.unsplash.com/photo-1577099600565-e89ede2b9422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
  //     kind: 'roedor',
  //     name: 'jill',
  //     owner: 'David,Adamson',
  //     phoneNumber: '+57-311-28471491',
  //   },
  //   {
  //     id: 'b67d6e43-438c-4330-bff6-d618bf074979',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image:
  //       'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
  //     kind: 'roedor',
  //     name: 'gustaf cornelius',
  //     owner: 'Emily,Wood',
  //     phoneNumber: '+57-311-40712157',
  //   },
  //   {
  //     id: '410204f9-7498-406b-a32f-29c9db393ce8',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey_crowned_crane_at_Martin_Mere.JPG',
  //     kind: 'ave',
  //     name: 'sol',
  //     owner: 'Sandy,Adams',
  //     phoneNumber: '+57-311-73790721',
  //   },
  //   {
  //     id: 'c9ebb7eb-acec-42f0-a8cf-e2e5d3bc68ba',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://images.dog.ceo/breeds/terrier-bedlington/n02093647_1156.jpg',
  //     kind: 'perro',
  //     name: 'patience',
  //     owner: 'Holly,Jones',
  //     phoneNumber: '+57-311-99402522',
  //   },
  //   {
  //     id: '38feb1f4-e48b-4770-bdd4-111b5c206669',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://cdn2.thecatapi.com/images/bbj.jpg',
  //     kind: 'gato',
  //     name: 'caicos',
  //     owner: 'Patricia,Rubin',
  //     phoneNumber: '+57-311-75745197',
  //   },
  //   {
  //     id: '6f98c4f3-0722-4e05-96b3-673e77848884',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image:
  //       'https://images.unsplash.com/photo-1577099600565-e89ede2b9422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
  //     kind: 'roedor',
  //     name: 'rosy',
  //     owner: 'Sandy,Adams',
  //     phoneNumber: '+57-311-9727602',
  //   },
  //   {
  //     id: '1119edc4-d20e-4e9e-901d-8f999b7a9480',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image:
  //       'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
  //     kind: 'roedor',
  //     name: 'montana',
  //     owner: 'Jose,Rodriguez',
  //     phoneNumber: '+57-311-66834030',
  //   },
  //   {
  //     id: 'a249d1b7-fa7d-41e0-8ae2-81ec6cee4b7e',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Buceros_rhinoceros_-Singapore_Zoo_-pair-8a.jpg',
  //     kind: 'ave',
  //     name: 'file',
  //     owner: 'Paul,Bronson',
  //     phoneNumber: '+57-311-65919048',
  //   },
  //   {
  //     id: '4f45fe63-0833-47f9-a6a4-d4076d63765d',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://images.dog.ceo/breeds/shihtzu/n02086240_4430.jpg',
  //     kind: 'perro',
  //     name: 'nerre',
  //     owner: 'Kenneth,Charles',
  //     phoneNumber: '+57-311-77418828',
  //   },
  //   {
  //     id: 'fa28850b-72bf-4831-975b-ee44580d6f92',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://cdn2.thecatapi.com/images/xD2mDDuDV.jpg',
  //     kind: 'gato',
  //     name: 'wrangell',
  //     owner: 'Frank,Smith',
  //     phoneNumber: '+57-311-57839259',
  //   },
  //   {
  //     id: 'f56c6ecc-e78c-4938-9632-5325ee1e8530',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://cdn2.thecatapi.com/images/5rp.jpg',
  //     kind: 'gato',
  //     name: 'jubilee',
  //     owner: 'David,Webster',
  //     phoneNumber: '+57-311-85111618',
  //   },
  //   {
  //     id: 'f294d53d-9d20-4697-8d45-a190cc24db45',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://cdn2.thecatapi.com/images/2nk.jpg',
  //     kind: 'gato',
  //     name: 'kofac',
  //     owner: 'Kelly,Marder',
  //     phoneNumber: '+57-311-47045336',
  //   },
  //   {
  //     id: '1858e1d4-ebe5-44c0-9e09-de1744c8da31',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://images.dog.ceo/breeds/papillon/n02086910_7698.jpg',
  //     kind: 'perro',
  //     name: 'ren',
  //     owner: 'Jose,Rodriguez',
  //     phoneNumber: '+57-311-91179377',
  //   },
  //   {
  //     id: '3f621502-f829-4a6f-a653-982baafd4e9d',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://images.dog.ceo/breeds/dhole/n02115913_1334.jpg',
  //     kind: 'perro',
  //     name: 'kodos',
  //     owner: 'David,Webster',
  //     phoneNumber: '+57-311-30987138',
  //   },
  //   {
  //     id: 'b4fcba31-f3ea-4749-bb24-67875f43b198',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image:
  //       'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
  //     kind: 'roedor',
  //     name: 'zotter',
  //     owner: 'Sandy,Adams',
  //     phoneNumber: '+57-311-98056306',
  //   },
  //   {
  //     id: 'b0a234fa-6987-4772-9635-8dae893abc73',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image:
  //       'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
  //     kind: 'roedor',
  //     name: 'kono',
  //     owner: 'William,Martin',
  //     phoneNumber: '+57-311-26172182',
  //   },
  //   {
  //     id: '9d38a31b-61ba-4241-8daf-b873c8836202',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image:
  //       'https://images.unsplash.com/photo-1577099600565-e89ede2b9422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
  //     kind: 'roedor',
  //     name: 'jericho',
  //     owner: 'James,Johnson',
  //     phoneNumber: '+57-311-64204601',
  //   },
  //   {
  //     id: 'd63bbc05-58f1-4e25-8f72-2e3b2f559647',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image:
  //       'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
  //     kind: 'roedor',
  //     name: 'tasha',
  //     owner: 'William,Martin',
  //     phoneNumber: '+57-311-18355225',
  //   },
  //   {
  //     id: '8dd46307-af3b-494a-9b07-a671913b4afc',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image:
  //       'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
  //     kind: 'roedor',
  //     name: 'aksel',
  //     owner: 'Emily,Wood',
  //     phoneNumber: '+57-311-98088773',
  //   },
  //   {
  //     id: 'fb839ca7-f5cf-4374-b307-91846996bc70',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image:
  //       'https://images.unsplash.com/photo-1618252903592-2b8c90c43a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  //     kind: 'roedor',
  //     name: 'foxy',
  //     owner: 'David,Webster',
  //     phoneNumber: '+57-311-80671683',
  //   },
  //   {
  //     id: '62d9c1dd-59d5-4590-8062-0b2517efff90',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://images.dog.ceo/breeds/hound-plott/hhh_plott002.JPG',
  //     kind: 'perro',
  //     name: 'bud',
  //     owner: 'Sandy,Johanson',
  //     phoneNumber: '+57-311-27066385',
  //   },
  //   {
  //     id: 'dcdedbf4-c763-4500-8457-70ca660ae36f',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://images.dog.ceo/breeds/setter-irish/n02100877_863.jpg',
  //     kind: 'perro',
  //     name: 'purdey',
  //     owner: 'Jose,Rodriguez',
  //     phoneNumber: '+57-311-84683047',
  //   },
  //   {
  //     id: 'e0c92664-f79e-478f-b042-18ff0cc0289a',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/6/63/African_penguin_side_profile.jpg',
  //     kind: 'ave',
  //     name: 'lycos',
  //     owner: 'Kenneth,Charles',
  //     phoneNumber: '+57-311-93790251',
  //   },
  //   {
  //     id: '8e2bf492-b347-4757-8d22-6c0c56a54392',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://cdn2.thecatapi.com/images/Jl7ZnjhiO.jpg',
  //     kind: 'gato',
  //     name: 'bonnie',
  //     owner: 'Patricia,Rubin',
  //     phoneNumber: '+57-311-12108116',
  //   },
  //   {
  //     id: '9daf2c6d-c02a-4090-8a84-f936cc56d825',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://cdn2.thecatapi.com/images/5pp.jpg',
  //     kind: 'gato',
  //     name: 'lugo',
  //     owner: 'Paul,Bronson',
  //     phoneNumber: '+57-311-41941054',
  //   },
  //   {
  //     id: '179c5ca1-61f7-4dd9-a231-43ff2a69e04b',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/0/00/R%C3%BCppell%27s_Vulture_%28Gyps_rueppelli%29_%2821160089681%29.jpg',
  //     kind: 'ave',
  //     name: 'dublin',
  //     owner: 'Kelly,Marder',
  //     phoneNumber: '+57-311-14637174',
  //   },
  //   {
  //     id: '8ee97eb7-3b70-4f1e-9461-d945ae0061d0',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Zwergsaeger_maenchen_weibchen.jpg',
  //     kind: 'ave',
  //     name: 'lovey',
  //     owner: 'Sandy,Johanson',
  //     phoneNumber: '+57-311-65518196',
  //   },
  //   {
  //     id: 'dd2daf31-8d92-4daa-978e-88d651099ee0',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://images.dog.ceo/breeds/deerhound-scottish/n02092002_7696.jpg',
  //     kind: 'perro',
  //     name: 'squall',
  //     owner: 'Frank,Smith',
  //     phoneNumber: '+57-311-87661699',
  //   },
  //   {
  //     id: '7e5b2c12-9586-4ed7-a759-1645f4a4f4ae',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://cdn2.thecatapi.com/images/66.jpg',
  //     kind: 'gato',
  //     name: 'flex',
  //     owner: 'Mary,Smith',
  //     phoneNumber: '+57-311-35552131',
  //   },
  //   {
  //     id: '3c46f8de-f99c-4862-b772-900a83e8824c',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://images.dog.ceo/breeds/ovcharka-caucasian/MVIMG_20190730_171335.jpg',
  //     kind: 'perro',
  //     name: 'doolin',
  //     owner: 'Harold,Foster',
  //     phoneNumber: '+57-311-79622085',
  //   },
  //   {
  //     id: 'fb22b454-f8f7-49c3-b266-0f678d7e2360',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://images.dog.ceo/breeds/terrier-patterdale/320px-05078045_Patterdale_Terrier.jpg',
  //     kind: 'perro',
  //     name: 'bebe',
  //     owner: 'Frank,Smith',
  //     phoneNumber: '+57-311-83801934',
  //   },
  //   {
  //     id: 'eeccad46-f924-4d8b-a6d4-53522ad64846',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image:
  //       'https://images.unsplash.com/photo-1577099600565-e89ede2b9422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
  //     kind: 'roedor',
  //     name: 'bitsy',
  //     owner: 'Kenneth,Charles',
  //     phoneNumber: '+57-311-79417967',
  //   },
  //   {
  //     id: '6da40313-29cf-4818-bcc3-2cde85a30857',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg',
  //     kind: 'perro',
  //     name: 'aqwla',
  //     owner: 'William,Martin',
  //     phoneNumber: '+57-311-68235433',
  //   },
  //   {
  //     id: '447284d7-c1b5-4c1e-bda2-84e6277cfe11',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://images.dog.ceo/breeds/terrier-wheaten/n02098105_91.jpg',
  //     kind: 'perro',
  //     name: 'rubert',
  //     owner: 'Patricia,Rubin',
  //     phoneNumber: '+57-311-12127168',
  //   },
  //   {
  //     id: '239a2316-9863-4b02-89dc-5c89b5c83c63',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://cdn2.thecatapi.com/images/bth.jpg',
  //     kind: 'gato',
  //     name: 'lefty',
  //     owner: 'Melissa,Roberts',
  //     phoneNumber: '+57-311-37256285',
  //   },
  //   {
  //     id: '203f3848-d84d-4e3f-8303-abe8148abc13',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'male',
  //     image: 'https://images.dog.ceo/breeds/poodle-toy/n02113624_2224.jpg',
  //     kind: 'perro',
  //     name: 'norbu chimpa',
  //     owner: 'Kelly,Marder',
  //     phoneNumber: '+57-311-69871959',
  //   },
  //   {
  //     id: 'faf02a86-05ed-4c95-a663-9ddb1c96a038',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Victoria_Crowned_Pigeon_CentralPark_Zoo.jpg',
  //     kind: 'ave',
  //     name: 'bowser',
  //     owner: 'James,Johnson',
  //     phoneNumber: '+57-311-69267219',
  //   },
  //   {
  //     id: '05e13f1c-9fce-4e47-a2de-13216ded232a',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Lake_Manyara_Bartvogel.jpg',
  //     kind: 'ave',
  //     name: 'lena',
  //     owner: 'Tracy,Coulter',
  //     phoneNumber: '+57-311-43440115',
  //   },
  //   {
  //     id: 'a50f80a6-ea43-47e7-8a4e-6ccaa41b0edb',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     gender: 'female',
  //     image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Pink_backed_pelican_side_view.jpg',
  //     kind: 'ave',
  //     name: 'emma emily',
  //     owner: 'Kelly,Marder',
  //     phoneNumber: '+57-311-98201046',
  //   },
  // ].json();

  const [animalsData, setAnimalsData] = useState([]);

  useEffect(() => {
    async function GetAnimalsData() {
      const res = await fetch('http://localhost:8000/api/v1/puppy');
      const json = await res.json();
      setAnimalsData(json.data);
    }
    GetAnimalsData();
  }, []);

  return (
    <div>
      <HeaderComponent />
      {animalsData.map((animalInfo) => {
        return <CardComponent key={animalInfo.id} {...animalInfo} />;
      })}
    </div>
  );
};
