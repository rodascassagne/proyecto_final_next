import { Metadata } from 'next';
import SellerDetails from '../components/seller/seller-details';


export const metadata: Metadata = {
  title: 'Seller Profile',
};

export default function Page() {
  return(
    <SellerDetails />
  ) 
}
