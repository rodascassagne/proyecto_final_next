
const sellers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'James',
    sellerThumbnail:
      'https://cdn-icons-png.flaticon.com/128/2202/2202112.png',
    sellerImage:
      'https://cdn-icons-png.flaticon.com/128/2202/2202112.png',
    sellerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    email: 'james@gmail.com',
    password: '123456',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Mia',
    sellerThumbnail:
      'https://cdn-icons-png.flaticon.com/128/706/706830.png',
    sellerImage:
      'https://cdn-icons-png.flaticon.com/128/706/706830.png',
    sellerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
    email: 'mia@gmail.com',
    password: '123456',
  },
  {
    id: '50ca3e20-62cd-11ee-8c99-0242ac120002',
    name: 'Michael',
    sellerThumbnail:
      'https://cdn-icons-png.flaticon.com/128/4333/4333609.png',
    sellerImage:
      'https://cdn-icons-png.flaticon.com/128/4333/4333609.png',
    sellerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
    email: 'michael@gmail.com',
    password: '123456',
  }
];

const products = [
  {
    sellerId: sellers[0].id,
    name: 'Nice paint',
    description: 'painted with acrilic material.',
    price: 350.20,
    imageUrl:
      'https://cdn-icons-png.flaticon.com/128/3157/3157837.png',
  },
  {
    sellerId: sellers[1].id,
    name: 'Human figure',
    description: 'it is made of plastic.',
    price: 220.30,
    imageUrl:
      'https://cdn-icons-png.flaticon.com/128/3205/3205261.png',
  },
  {
    sellerId: sellers[2].id,
    name: 'Nice flower',
    description:
      'it is made of recliced carboard.',
    price: 60.0,
    imageUrl:
      'https://cdn-icons-png.flaticon.com/128/14460/14460695.png',
  }
];

const reviews = [];

module.exports = {
  products,
  sellers
};
