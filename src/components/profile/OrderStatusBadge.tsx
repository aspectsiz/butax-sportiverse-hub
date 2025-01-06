import { Badge } from "@/components/ui/badge";
import { Order } from "@/types/order";

interface OrderStatusBadgeProps {
  status: Order["status"];
}

export const OrderStatusBadge = ({ status }: OrderStatusBadgeProps) => {
  const variants = {
    completed: "bg-green-500",
    pending: "bg-yellow-500",
    quote_requested: "bg-blue-500",
  };

  return (
    <Badge className={`${variants[status]} text-white`}>
      {status.replace("_", " ").toUpperCase()}
    </Badge>
  );
};