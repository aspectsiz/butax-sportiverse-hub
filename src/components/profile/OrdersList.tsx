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
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface Order {
  id: string;
  created_at: string;
  total: number;
  status: "pending" | "completed" | "quote_requested";
  items: {
    id: string;
    name: string;
    quantity: number;
    price: number;
    quoteOnly: boolean;
  }[];
}

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
      },
    ],
  },
];

export const OrdersList = () => {
  const { user } = useAuth();

  const { data: orders, isLoading } = useQuery({
    queryKey: ["orders", user?.id],
    queryFn: async () => {
      // In a real application, this would fetch from your backend
      // For now, we'll use mock data
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
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

  const getStatusBadge = (status: Order["status"]) => {
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
                <TableCell>{getStatusBadge(order.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};