import { useState } from "react";
import { Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  productId: string;
  productName: string;
  productImage: string;
  orderId: string;
  onReviewSubmitted: () => void;
  hasReviewed?: boolean;
}

export const ReviewModal = ({
  isOpen,
  onClose,
  productId,
  productName,
  productImage,
  orderId,
  onReviewSubmitted,
  hasReviewed = false,
}: ReviewModalProps) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const { toast } = useToast();
  const { user } = useAuth();

  if (!user) return null;

  const handleSubmit = async () => {
    if (rating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a star rating",
        variant: "destructive",
      });
      return;
    }

    const review = {
      id: Math.random().toString(36).substr(2, 9),
      productId,
      productName, // Add product name to the review
      orderId,
      rating,
      comment,
      createdAt: new Date().toISOString(),
      userEmail: user.email,
    };

    // Store review in localStorage
    const existingReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    localStorage.setItem('reviews', JSON.stringify([...existingReviews, review]));
    
    toast({
      title: "Review submitted",
      description: "Thank you for your feedback!",
    });
    
    setRating(0);
    setComment("");
    onReviewSubmitted();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Review {productName}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <img
            src={productImage}
            alt={productName}
            className="w-full h-48 object-cover rounded-md"
          />
          
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="focus:outline-none"
                disabled={hasReviewed}
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
            disabled={hasReviewed}
          />
          
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={hasReviewed}>
              Submit Review
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};