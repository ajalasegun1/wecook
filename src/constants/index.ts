import one from '../assets/profiles/1.jpeg';
import two from '../assets/profiles/21.jpg';
import three from '../assets/profiles/25.jpg';
import four from '../assets/profiles/29.jpg';
import five from '../assets/profiles/3.jpg';
import six from '../assets/profiles/30.jpg';
import seven from '../assets/profiles/32.jpg';
import p1 from '../assets/images/Frame.png';
import p2 from '../assets/images/Frame1.png';
export const COMMENTS: {img: any; username: string; comment: string}[] = [
  {
    img: one,
    username: 'black234',
    comment: 'Banana Small',
  },
  {
    img: seven,
    username: 'kanalla222',
    comment: 'shayo',
  },
  {
    img: two,
    username: 'plies4',
    comment: 'carrot cake',
  },
  {
    img: three,
    username: 'jerry234',
    comment: 'Small Chicken',
  },
  {
    img: seven,
    username: 'kanalla222',
    comment: 'shayo',
  },
  {
    img: one,
    username: 'black234',
    comment: 'Banana Small',
  },
  {
    img: four,
    username: 'assijyat33',
    comment: 'macarroni',
  },
  {
    img: five,
    username: 'timbaer1',
    comment: 'mushrooms',
  },
  {
    img: seven,
    username: 'kanalla222',
    comment: 'shayo',
  },
  {
    img: one,
    username: 'black234',
    comment: 'Banana Small',
  },
  {
    img: six,
    username: 'fruda99',
    comment: 'truffles',
  },
  {
    img: seven,
    username: 'kanalla222',
    comment: 'shayo',
  },
];

export type DiscoverType = {name: string; age: string; city: string; img: any};

export const DISCOVER: DiscoverType[] = [
  {
    name: 'Sammy Zayn',
    age: '22',
    city: 'southampton',
    img: one,
  },
  {
    name: 'Clara Simps',
    age: '25',
    city: 'london',
    img: two,
  },
  {
    name: 'Joshzy',
    age: '19',
    city: 'florida',
    img: three,
  },
  {
    name: 'Aryan',
    age: '21',
    city: 'san diego',
    img: four,
  },
  {
    name: 'Samantha',
    age: '27',
    city: 'pakistan',
    img: five,
  },
];

export type PreferenceType = {
  name: string;
  desc: string;
  img: any;
};

export const PREFERENCES = [
  {
    name: 'Nini Cho',
    desc: 'Chief chef, Nini pastries',
    img: p1,
  },
  {
    name: 'Usman Ali',
    desc: 'Seus chef, Al-am eatry',
    img: p2,
  },
  {
    name: 'Abiya Stones',
    desc: 'Head chef, Sweet cooks',
    img: p1,
  },
];
