import { fetchReviewsByProductId } from '@/app/lib/data';
import ProductReviewForm from './product-review-form';
import { Review } from '@/app/lib/definitions';

export default async function ProductReviews({ id }: { id: string }) {
  const reviews = await fetchReviewsByProductId(id);

  return (
    <div className="mx-3 mt-[3rem]">
      <ProductReviewForm productId={id} />
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Reviews</h2>
      {reviews.length < 1 ? (
        <p className="mb-8 text-light">
          No reviews yet. Be the first to review this product
        </p>
      ) : (
        <ul className="flex flex-col gap-4">
          {reviews.map((review: Review) => {
            const ratingStars = [];
            for (let i = 0; i < review.rating; i++) ratingStars.push('★');
            return (
              <li key={review.id} className="bg-white p-4">
                <div className="flex gap-6">
                  <p>{review.username}</p>
                  <p>{new Date(review.created_at).toLocaleDateString()}</p>
                </div>
                <div>
                  {ratingStars.map((star: string, index: number) => (
                    <span key={index} className={`text-2xl text-orange-300`}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-lg text-black-600">{review.comment}</p>
              </li>
            );
          })}
        </ul>
      )}
     
    </div>
  );
}
