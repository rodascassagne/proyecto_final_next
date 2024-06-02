
export type Product = {
  id: string;
  name: string;
  description: string;
  seller_id: string;
  seller_name: string;
  price: string;
  image_url: string;
};

export type Review = {
  id: string;
  user_id: string;
  product_id: string;
  rating: number;
  comment: string;
  created_at: string;
  username: string;
};
export type Sellers = {
  id: string;
  name: string;
  sellerThumbnail: string;
  sellerImage: string;
  sellerBio: string;
  email: string;
  password: string;
};

