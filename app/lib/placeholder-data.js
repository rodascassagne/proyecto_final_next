
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
  }
];

const reviews = [];

module.exports = {
  products,
  sellers
};
