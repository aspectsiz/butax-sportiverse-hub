
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

    const emailData = {
      to: 'info@butaxsports.com',
      subject: 'Yeni Teklif Talebi',
      items,
      customerDetails: formData,
      total,
    };

    try {
      console.log('Email gönderiliyor:', emailData);
      
      toast({
        title: 'Teklif Talebi Gönderildi',
        description: "En kısa sürede size geri dönüş yapacağız!",
      });

      clearCart();
      navigate('/');
    } catch (error) {
      toast({
        title: 'Hata',
        description: 'Teklif talebi gönderilemedi. Lütfen tekrar deneyin.',
        variant: 'destructive',
      });
    }
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-12 pt-24 w-full">
        <p className="text-lg text-muted-foreground">Sepetiniz boş</p>
        <Button onClick={() => navigate('/shop')} className="mt-4">
          Alışverişe Devam Et
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 pt-24 w-full">Ödeme</h2>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Sepet Özeti</h3>
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <span>{item.name} x {item.quantity}</span>
            <span>{item.quoteOnly ? 'Teklif İstendi' : `₺${(item.price * item.quantity).toFixed(2)}`}</span>
          </div>
        ))}
        {!items.every(item => item.quoteOnly) && (
          <div className="text-xl font-bold mt-4">
            Toplam: ₺{total.toFixed(2)}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Ad"
            required
            value={formData.firstName}
            onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
          />
          <Input
            placeholder="Soyad"
            required
            value={formData.lastName}
            onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
          />
        </div>
        <Input
          type="email"
          placeholder="E-posta"
          required
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
        <Input
          type="tel"
          placeholder="Telefon Numarası"
          required
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
        />
        <Textarea
          placeholder="Ek Notlar"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
        />
        <Button type="submit" className="w-full">
          {items.some(item => item.quoteOnly) ? 'Teklif İste' : 'Siparişi Tamamla'}
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
