
import { fetchSellers } from '@/app/lib/data';
import Image from 'next/image';

export default async function Sellers() {
  const aja = await fetchSellers();
  /* const products =await fetchProducts(); */
  return (
    <div>
      <div className="sellers-container ">

        {aja.map((x) => (
          <div key={x.id} className="seller-card px-6 bg-amber-50">
            <Image
              src={x.seller_thumbnail}
              width={300}
              height={300}
              alt={x.name}
            />
            <h2 className="my-4 font-semibold">{x.name}</h2>
            <p>{x.seller_bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};