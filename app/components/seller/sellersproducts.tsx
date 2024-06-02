
import { fetchProducts, fetchSellers } from '@/app/lib/data';

import Image from 'next/image';

export default async function sellersproducts() {
  const sellers = await fetchSellers();
  const products =await fetchProducts();
  return (
    <div>
      <div className="sellers-container">
        {sellers?.map((x) => (
          <div key={x.id} className="seller-card px-6">
            <Image
              src={x.seller_image}
              width={200}
              height={200}
              alt={x.name}
            />
            <h2 className="my-4 font-semibold">{x.name}</h2>
            
            <div className="products-container">
              {products.filter(product => product.seller_id === x.id).map((product) => (
                <div key={product.id}>
                  <Image src={product.image_url} width={100} height={100} alt={product.name} />
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};