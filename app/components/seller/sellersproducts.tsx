
import { fetchProducts, fetchSellers } from '@/app/lib/data';

import Image from 'next/image';

export default async function sellersproducts() {
  const sellers = await fetchSellers();
  const products = await fetchProducts();
  return (

    < >
      {sellers?.map((x) => (
        <div key={x.id} className="py-5  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

          <Image
            src={x.seller_image}
            width={200}
            height={200}
            alt={x.name}
            className="mx-auto w-full max-w-xs "
          />
          <div className="p-5">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {x.name}
            </h5>


            <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 mx-auto">
              {products.filter(product => product.seller_id === x.id).map((product) => (
                <div key={product.id}>
                  <Image src={product.image_url} width={100} height={100} alt={product.name} />
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.name}</p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${product.price}</p>
                  <hr/>
                </div>
              ))}
            </div>
          </div>

        </div>
      ))}
    </>

  );
};