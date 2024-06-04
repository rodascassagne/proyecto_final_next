
import { fetchSellers } from '@/app/lib/data';
import Image from 'next/image';

export default async function Sellers() {
  const user = await fetchSellers();
  /* const products =await fetchProducts(); */
  return (
    <>
      {user.map((x) => (
        <div key={x.id} className="py-5  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image
            src={x.seller_thumbnail}
            width={300}
            height={300}
            alt={x.name}
            className="mx-auto w-full max-w-xs "
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {x.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {x.seller_bio}
            </p>

          </div>
        </div>
      ))}

    </>
  );
};
