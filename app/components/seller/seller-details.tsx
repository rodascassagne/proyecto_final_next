import { fetchProductsBySeller, fetchSellerById } from '@/app/lib/data';
import Image from 'next/image';
import ProductCard from '../products/product-card';

import { auth } from '@/auth';
import AddProductForm from './add-product-form';
import {/*  UpdateProduct, */ DeleteProduct } from '../buttons';


export default async function SellerDetails() {
  const session = await auth();
  const seller = await fetchSellerById(session?.user?.id || 'default');
  const products = await fetchProductsBySeller(session?.user?.id || 'default');
  return (
    <>
      {seller && (
        <>
          <div className=" flex flex-col mx-auto  p-4 md:mt-6">
            <Image
              src={seller.seller_image}
              alt={seller.name}
              width={200}
              height={200}
            />
            <h1 className="mb-2 text-2xl font-bold md:text-3xl">
              {seller.name}
            </h1>
          </div>
          <div>
            <AddProductForm />
          </div>

          <div >
            {products && (

              <div className="mt-6 flow-root">
                <div className="inline-block min-w-full align-middle">
                  <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <table className="hidden min-w-full text-gray-900 md:table">

                      {/*  ------------------------------------HEAD------------------------------------------------------ */}
                      <thead className="rounded-lg text-left text-sm font-normal">
                        <tr>
                          <th scope="col" className="px-1 py-5 font-medium sm:pl-6">
                            Product
                          </th>
                          <th scope="col" className="px-1 py-5 font-medium">
                            Name
                          </th>
                          <th scope="col" className="px-1 py-5 font-medium">
                            Description
                          </th>
                          <th scope="col" className="px-1 py-5 font-medium">
                            Price
                          </th>

                          <th scope="col" className="px-1 py-5 font-medium">
                            <span >Edit</span>
                          </th>
                        </tr>
                      </thead>
                      {/*  ------------------------------------BODY------------------------------------------------------ */}
                      <tbody className="bg-white">
                        {products?.map((x) => (
                          <tr
                            key={x.id}
                            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                          >

                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                              <div className="flex items-center gap-3">
                                <Image
                                  src={x.image_url}
                                  width={80}
                                  height={80}
                                  alt={`${x.name}'s profile picture`}
                                />
                              </div>
                            </td>

                            <td className=" px-3 py-3">
                              {x.name}
                            </td>


                            <td className=" px-3 py-3">
                              {x.description}
                            </td>

                            <td className=" px-3 py-3">
                              {x.price}
                            </td>


                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                              <div className="flex justify-end gap-3">
                                <DeleteProduct id={x.id} />
                              </div>
                            </td>

                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
