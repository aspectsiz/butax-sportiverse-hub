import { useAuth } from "@/contexts/AuthContext";
import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

interface Review {
  id: string;
  productId: string;
  orderId: string;
  rating: number;
  comment: string;
  createdAt: string;
  productName: string;
  userEmail?: string;
}

export const UserReviews = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    // Load reviews from localStorage
    const allReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    const userReviews = allReviews.filter((review: Review) => review.userEmail === user?.email);
    setReviews(userReviews);
  }, [user?.email]);

  if (!user) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Reviews</h2>
        <span className="text-muted-foreground">
          {reviews.length} reviews
        </span>
      </div>

      <div className="grid gap-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardHeader>
              <CardTitle className="text-lg">{review.productName}</CardTitle>
              <CardDescription>
                {new Date(review.createdAt).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};