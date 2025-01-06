import { useAuth } from "@/contexts/AuthContext";
import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Mock data - in a real app, this would come from an API
const mockReviews = [
  {
    id: "1",
    productId: "1",
    rating: 4,
    comment: "Great product, very durable!",
    createdAt: "2024-01-05T10:00:00Z",
    productName: "Professional Dumbbell Set",
  },
  {
    id: "2",
    productId: "3",
    rating: 5,
    comment: "Perfect fit and comfortable",
    createdAt: "2024-01-04T15:30:00Z",
    productName: "Performance T-Shirt",
  },
];

export const UserReviews = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Reviews</h2>
        <span className="text-muted-foreground">
          {mockReviews.length} reviews
        </span>
      </div>

      <div className="grid gap-4">
        {mockReviews.map((review) => (
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