import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

interface ReviewFormProps {
  productId: string;
  onReviewSubmitted: () => void;
}

export const ReviewForm = ({ productId, onReviewSubmitted }: ReviewFormProps) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const { toast } = useToast();
  const { user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Please login",
        description: "You need to be logged in to submit a review",
        variant: "destructive",
      });
      return;
    }

    if (rating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a star rating",
        variant: "destructive",
      });
      return;
    }

    // For now, we'll use mock data
    const review = {
      id: Math.random().toString(36).substr(2, 9),
      userId: user.id,
      productId,
      rating,
      comment,
      createdAt: new Date().toISOString(),
      userEmail: user.email,
    };

    // In a real app, this would be an API call
    console.log("Submitting review:", review);
    
    toast({
      title: "Review submitted",
      description: "Thank you for your feedback!",
    });
    
    setRating(0);
    setComment("");
    onReviewSubmitted();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className="focus:outline-none"
          >
            <Star
              className={`w-6 h-6 ${
                star <= (hoverRating || rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
      
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your review here..."
        className="min-h-[100px]"
      />
      
      <Button type="submit">Submit Review</Button>
    </form>
  );
};