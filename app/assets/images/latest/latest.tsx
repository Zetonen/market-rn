export const latest: ILatestItems[] = [
  {
    uri: require('./autumn.jpg'),
    title: 'Golden Reflections: A Serene Autumn Afternoon',
    price: '420',
    category: 'Jobs',
    desc: 'A beautiful autumn landscape capturing the golden hues of fall.',
    userName: 'John Doe',
    userEmail: 'john.doe@gamil.com',
    userImg: 'A',
  },
  {
    uri: require('./butterfly.jpg'),
    title: 'A Moment of Serenity',
    price: '210',
    category: 'House',
    desc: 'A delicate butterfly resting on a flower, symbolizing peace and tranquility.',
    userName: 'Jane Smith',
    userEmail: 'jane.smith@gamil.com',
    userImg: 'A',
  },
  {
    uri: require('./flower.jpg'),
    title: 'Delicate Petals',
    price: '560',
    category: 'Furniture',
    desc: 'A close-up of a flower showcasing the intricate details of its petals.',
    userName: 'Alice Johnson',
    userEmail: 'alice.johnson@gamil.com',
    userImg: 'A',
  },
  {
    uri: require('./rocks.jpg'),
    title: "Nature's Sculptures",
    price: '180',
    category: 'Horse',
    desc: 'Unique rock formations created by the forces of nature over time.',
    userName: 'Michael Brown',
    userEmail: 'michael.brown@gamil.com',
    userImg: 'A',
  },
  {
    uri: require('./landscape.jpg'),
    title: 'Enjoying the View',
    price: '890',
    category: 'Jobs',
    desc: 'A stunning landscape view, perfect for relaxation and contemplation.',
    userName: 'Emily Davis',
    userEmail: 'emily.davis@gamil.com',
    userImg: 'A',
  },
  {
    uri: require('./flowering.jpg'),
    title: 'A Breathtaking Sight',
    price: '100',
    category: 'Food',
    desc: 'An array of blooming flowers, showcasing the vibrant beauty of nature.',
    userName: 'David Wilson',
    userEmail: 'david.wilson@gamil.com',
    userImg: 'A',
  },
];

export interface ILatestItems {
  uri: string;
  title: string;
  price: string;
  category: string;
  desc: string;
  userName: string;
  userEmail: string;
  userImg: string;
}
