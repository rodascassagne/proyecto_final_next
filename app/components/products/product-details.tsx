import { fetchProductById } from '@/app/lib/data';
import Image from 'next/image';
import ProductReviews from './product-reviews';

export default async function ProductDetails({ id }: { id: string }) {
  const product = await fetchProductById(id);

  return (
    <>
      {product && (
        <div className="container mx-auto  p-4  bg-gray-200">
          <div className="flex  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

            <Image
              src={product.image_url}
              alt={product.name}
              width={500}
              height={500}
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.name}
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {product.description}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <span>Seller:</span> {product.seller_name}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                ${product.price}
              </p>
            </div>

          </div>
          <ProductReviews id={id} />
        </div>
      )}
    </>
  );
}
