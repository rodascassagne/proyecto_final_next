'use client';
import React, { useState } from 'react';
import Link from 'next/link';

function ProductFilterButtons({ maxPrice }: { maxPrice: string }) {
  const is50 = maxPrice === '50';
  const is100 = maxPrice === '100';
  const is200 = maxPrice === '200';
  const isAny = !is50 && !is100 && !is200;
  return (
    <>
      <div className='space-y-2" flex flex-col'>
        <div className="flex justify-center space-x-2 rounded bg-light p-3 text-dark">
          <label>
            <Link href="/products/filter/50" className=" me-3">
              under $50
              <input
                type="radio"
                name="priceFilter"
                value="50"
                defaultChecked={is50}
                className="mx-1"
              />
            </Link>
          </label>
          <label>
            <Link href="/products/filter/100" className=" me-3">
              under $100
              <input
                type="radio"
                name="priceFilter"
                value="100"
                defaultChecked={is100}
                className="mx-1"
              />
            </Link>
          </label>
          <label>
            <Link href="/products/filter/200" className=" me-3">
              under $200
              <input
                type="radio"
                name="priceFilter"
                value="200"
                defaultChecked={is200}
                className="mx-1"
              />
            </Link>
          </label>
          <label>
            <Link href="/products/">
              See All
              <input
                type="radio"
                name="priceFilter"
                value="all"
                defaultChecked={isAny}
                className="mx-1"
              />
            </Link>
          </label>
        </div>
      </div>
    </>
  );
}

export default ProductFilterButtons;
