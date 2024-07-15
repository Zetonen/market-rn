export const latest: ILatestItems[] = [
  {
    uri: require('./autumn.jpg'),
    title: 'Golden Reflections: A Serene Autumn Afternoon',
    price: '420',
    category: 'Jobs',
  },
  {
    uri: require('./butterfly.jpg'),
    title: 'A Moment of Serenity',
    price: '210',
    category: 'House',
  },
  {
    uri: require('./flower.jpg'),
    title: 'Delicate petals',
    price: '560',
    category: 'Furniture',
  },
  {
    uri: require('./rocks.jpg'),
    title: "Nature's sculptures",
    price: '180',
    category: 'Horse',
  },
  {
    uri: require('./landscape.jpg'),
    title: 'enjoying the view',
    price: '890',
    category: 'Jobs',
  },
  {
    uri: require('./flowering.jpg'),
    title: 'A breathtaking sight',
    price: '100',
    category: 'Food',
  },
];

export interface ILatestItems {
  uri: string;
  title: string;
  price: string;
  category: string;
}
