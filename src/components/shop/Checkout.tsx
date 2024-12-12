import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/store/useCart';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckoutFormData } from '@/types/product';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const { toast } = useToast();
  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send this to your backend
    const emailData = {
      to: 'info@enveks.com',
      subject: 'New Quote Request',
      items,
      customerDetails: formData,
      total,
    };

    try {
      // Mock API call - replace with your actual email sending logic
      console.log('Sending email with data:', emailData);
      
      toast({
        title: 'Quote Request Sent',
        description: "We'll get back to you soon with a quote!",
      });

      clearCart();
      navigate('/');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send quote request. Please try again.',
        variant: 'destructive',
      });
    }
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">Your cart is empty</p>
        <Button onClick={() => navigate('/shop')} className="mt-4">
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Cart Summary</h3>
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <span>{item.name} x {item.quantity}</span>
            <span>{item.quoteOnly ? 'Quote Requested' : `$${(item.price * item.quantity).toFixed(2)}`}</span>
          </div>
        ))}
        {!items.every(item => item.quoteOnly) && (
          <div className="text-xl font-bold mt-4">
            Total: ${total.toFixed(2)}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="First Name"
            required
            value={formData.firstName}
            onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
          />
          <Input
            placeholder="Last Name"
            required
            value={formData.lastName}
            onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
          />
        </div>
        <Input
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
        <Input
          type="tel"
          placeholder="Phone Number"
          required
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
        />
        <Textarea
          placeholder="Additional Notes"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
        />
        <Button type="submit" className="w-full">
          {items.some(item => item.quoteOnly) ? 'Request Quote' : 'Place Order'}
        </Button>
      </form>
    </div>
  );
};

export default Checkout;