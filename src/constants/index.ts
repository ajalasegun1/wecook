import one from '../assets/profiles/1.jpeg';
import two from '../assets/profiles/21.jpg';
import three from '../assets/profiles/25.jpg';
import four from '../assets/profiles/29.jpg';
import five from '../assets/profiles/3.jpg';
import six from '../assets/profiles/30.jpg';
import seven from '../assets/profiles/32.jpg';
import p1 from '../assets/images/Frame.png';
import p2 from '../assets/images/Frame1.png';
import l1 from '../assets/images/Frame2.png';
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

export type LiveType = {
  username: string;
  city: string;
  title: string;
  desc: string;
  img: any;
};

export const LIVEUSERS: LiveType[] = [
  {
    username: 'Freddy_cooker',
    city: 'Florida',
    title: 'Outdoor cooks',
    desc: 'I’ll be showing how I prepare outdoor meals at home with my friends.',
    img: l1,
  },
  {
    username: "Lilly 'n' Tina",
    city: 'Texas',
    title: 'Veggies fries',
    desc: 'Lilly and Tina shows us a secret recipe on fried veggies',
    img: l1,
  },
];

export type Detail = 'delivered' | 'read' | 'new';

export type ChatListType = {
  username: string;
  message: string;
  time: string;
  img: any;
  detail: Detail;
};

export const CHATLIST: ChatListType[] = [
  {
    username: 'Lagatha_24',
    message: "Yea, I'll be free by 3.",
    time: '05:51 am',
    img: one,
    detail: 'new',
  },
  {
    username: 'Warri71',
    message: 'Where my money?',
    time: '05:51 am',
    img: two,
    detail: 'delivered',
  },
  {
    username: 'Bubu12',
    message: 'How you de?',
    time: '05:51 am',
    img: three,
    detail: 'read',
  },
  {
    username: 'Love22',
    message: 'Boss needs to speak with you',
    time: '05:51 am',
    img: four,
    detail: 'delivered',
  },
  {
    username: 'Cap112',
    message: 'Wash your clothes',
    time: '05:51 am',
    img: five,
    detail: 'new',
  },
  {
    username: 'Teaser12',
    message: 'Remember to come home early',
    time: '05:51 am',
    img: six,
    detail: 'delivered',
  },
  {
    username: 'Lookman98',
    message: 'TerryG is good',
    time: '05:51 am',
    img: seven,
    detail: 'read',
  },
];
