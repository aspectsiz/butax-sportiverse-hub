import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ReviewModal } from "@/components/shop/ReviewModal";
import { OrderStatusBadge } from "./OrderStatusBadge";
import { useReviewedItems } from "@/hooks/useReviewedItems";
import { Order } from "@/types/order";

const mockOrders: Order[] = [
  {
    id: "1",
    created_at: new Date().toISOString(),
    total: 299.99,
    status: "completed",
    items: [
      {
        id: "item1",
        name: "Professional Treadmill",
        quantity: 1,
        price: 299.99,
        quoteOnly: false,
        imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      },
    ],
  },
  {
    id: "2",
    created_at: new Date(Date.now() - 86400000).toISOString(),
    total: 0,
    status: "quote_requested",
    items: [
      {
        id: "item2",
        name: "Commercial Gym Setup",
        quantity: 1,
        price: 0,
        quoteOnly: true,
        imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      },
    ],
  },
];

export const OrdersList = () => {
  const { user } = useAuth();
  const [selectedItem, setSelectedItem] = useState<{
    productId: string;
    productName: string;
    productImage: string;
    orderId: string;
  } | null>(null);

  const { isItemReviewed, handleReviewSubmitted } = useReviewedItems();

  const { data: orders, isLoading } = useQuery({
    queryKey: ["orders", user?.id],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return mockOrders;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const handleReviewClick = (item: Order["items"][0], orderId: string) => {
    setSelectedItem({
      productId: item.id,
      productName: item.name,
      productImage: item.imageUrl,
      orderId,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Orders & Quotes</h2>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders?.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">#{order.id}</TableCell>
                <TableCell>
                  {format(new Date(order.created_at), "MMM dd, yyyy")}
                </TableCell>
                <TableCell>
                  <ul className="list-disc list-inside">
                    {order.items.map((item) => (
                      <li key={item.id}>
                        {item.name} x {item.quantity}
                      </li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell>
                  {order.status === "quote_requested"
                    ? "Quote Requested"
                    : `$${order.total.toFixed(2)}`}
                </TableCell>
                <TableCell>
                  <OrderStatusBadge status={order.status} />
                </TableCell>
                <TableCell>
                  {order.items.map((item) => {
                    const reviewed = isItemReviewed(order.id, item.id);
                    return (
                      <Button
                        key={item.id}
                        variant={reviewed ? "secondary" : "outline"}
                        size="sm"
                        onClick={() => handleReviewClick(item, order.id)}
                        disabled={reviewed}
                      >
                        {reviewed ? "Reviewed" : "Review"}
                      </Button>
                    );
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {selectedItem && (
        <ReviewModal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          productId={selectedItem.productId}
          productName={selectedItem.productName}
          productImage={selectedItem.productImage}
          orderId={selectedItem.orderId}
          hasReviewed={isItemReviewed(selectedItem.orderId, selectedItem.productId)}
          onReviewSubmitted={() => {
            handleReviewSubmitted(selectedItem.orderId, selectedItem.productId);
          }}
        />
      )}
    </div>
  );
};
