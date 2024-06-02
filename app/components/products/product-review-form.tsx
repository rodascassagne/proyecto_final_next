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
    <form
      action={(payload) => {
        setRating(0);
        setComment('');
        setName('');
        dispatch(payload);
      }}
      className="mt-8"
    >
      <div className="rounded-lg bg-light px-6 py-4 md:max-w-[32%]">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>Review form</h1>
        <div className="mt-2 flex flex-col">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="true"
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
        <div className="mt-2 flex items-center gap-1">
          <label htmlFor="rating">Rating:</label>
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
        <div className="mt-2 flex flex-col">
          <label htmlFor="comment">Review:</label>
          <textarea
            id="comment"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
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
        <Button
          type="submit"
          className="mt-4 rounded-md bg-brown px-4 py-2 text-light"
          aria-disabled={pending}
        >
          Add Review
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
