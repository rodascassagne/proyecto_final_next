'use client';

import { addProduct } from '@/app/lib/actions';
import { lusitana } from '@/app/styles/fonts';
import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '../button';

export default function AddProductForm() {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(addProduct, initialState);
  const { pending } = useFormStatus();

  return (
    <form
      action={(payload) => {
        setPrice('');
        setDescription('');
        setImageUrl('');
        setName('');
        dispatch(payload);
      }}
      className="mt-8"
    >
      <div className="m-auto rounded-lg bg-amber-50 px-6 py-4 md:max-w-[25%]">
        <h1
          className={`${lusitana.className} mb-4 text-center text-3xl font-semibold underline`}
        >
          Add New Product
        </h1>

        <div className="mt-2 flex flex-col">
          <label htmlFor="comment">Product Name</label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div id="name-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.name &&
            state.errors.name.map((error: string) => (
              <p className="mt-1 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>








        <div className="mt-2 flex flex-col">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div id="description-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.description &&
            state.errors.description.map((error: string) => (
              <p className="mt-1 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>









        <div className="mt-2 flex flex-col">
          <label htmlFor="comment">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div id="price-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.price &&
            state.errors.price.map((error: string) => (
              <p className="mt-1 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>







        <div className="mt-2 flex flex-col">
          <label htmlFor="imageUrl">Image Url</label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="file"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <div id="imageUrl-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.imageUrl &&
            state.errors.imageUrl.map((error: string) => (
              <p className="mt-1 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>






        <Button
          type="submit"
          className="mt-4 rounded-md bg-brown px-4 py-2 text-light"
          aria-disabled={pending}
        >
          Add Product
        </Button>
      </div>
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      ></div>
    </form>
  );
}
