'use client';

import { reviewProduct } from '@/app/lib/actions';
import { lusitana } from '@/app/styles/fonts';
import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '../button';

export default function ProductReviewForm({
  productId,
}: {
  productId: string;
}) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const initialState = { message: null, errors: {} };
  const reviewProductWithId = reviewProduct.bind(null, productId);
  const [state, dispatch] = useFormState(reviewProductWithId, initialState);
  const { pending } = useFormStatus();

  return (
    <section className="my-4 max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Review form</h2>
      <form
        action={(payload) => {
          setRating(0);
          setComment('');
          setName('');
          dispatch(payload);
        }}
      >


        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">

          <div >
            <label className="text-gray-700 dark:text-gray-200" htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="true"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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





          <div >
            <label className="text-gray-700 dark:text-gray-200" htmlFor="rating">Select Rating:</label>
            <input
              type="text"
              id="rating"
              name="rating"
              value={rating}
              hidden
              readOnly

            />
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRatingChange(star)}
                  className={`text-2xl`}
                  style={{
                    cursor: 'pointer',
                    color: star <= rating ? 'gold' : 'gray',
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <div id="rating-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.rating &&
              state.errors.rating.map((error: string) => (
                <p className="mt-1 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>






          <div >
            <label className="text-gray-700 dark:text-gray-200" htmlFor="comment">Write a Review</label>
            <textarea
              id="comment"
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div id="comment-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.comment &&
              state.errors.comment.map((error: string) => (
                <p className="mt-1 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>


          

        </div>

        <div className="flex justify-end mt-6">
            <Button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Add Review here
            </Button>
          </div>

      </form>
    </section>
  );
}
