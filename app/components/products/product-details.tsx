import { fetchProductById } from '@/app/lib/data';
import Image from 'next/image';
import ProductReviews from './product-reviews';

export default async function ProductDetails({ id }: { id: string }) {
  const product = await fetchProductById(id);

  return (
    <>
      {product && (
        <div className="container mx-auto bg-lightGreen p-4 md:mt-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="mb-6 max-w-full md:mb-0">
              <Image
                src={product.image_url}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-md"
              />
            </div>
            <div className="col-span-2 flex flex-col justify-center rounded-lg border border-gray-300 bg-amber-50 p-6 text-center shadow-lg">
              <div>
                <h1 className="mb-2 text-2xl font-bold md:text-3xl">
                  {product.name}
                </h1>
                <p className="mb-4">{product.description}</p>
                <p className="mb-2">
                  <span>Seller:</span> {product.seller_name}
                </p>
                <p className="text-xl font-bold text-green-500">
                  ${product.price}
                </p>
              </div>
            </div>
          </div>
          <ProductReviews id={id} />
        </div>
      )}
    </>
  );
}
