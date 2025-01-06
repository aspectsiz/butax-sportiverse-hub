import { useState, useEffect } from "react";
import { ReviewedItems } from "@/types/order";

export const useReviewedItems = () => {
  const [reviewedItems, setReviewedItems] = useState<ReviewedItems>(new Set());

  useEffect(() => {
    const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    const reviewedSet = new Set<string>(
      reviews.map((review: { orderId: string; productId: string }) => 
        `${review.orderId}-${review.productId}`
      )
    );
    setReviewedItems(reviewedSet);
  }, []);

  const handleReviewSubmitted = (orderId: string, productId: string) => {
    setReviewedItems(prev => {
      const newSet = new Set(prev);
      newSet.add(`${orderId}-${productId}`);
      return newSet;
    });
  };

  const isItemReviewed = (orderId: string, productId: string) => {
    return reviewedItems.has(`${orderId}-${productId}`);
  };

  return {
    reviewedItems,
    handleReviewSubmitted,
    isItemReviewed
  };
};