import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_telephone: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e) => { //React.FormEvent deleted
    e.preventDefault();
    
    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      toast.error("Lütfen reCAPTCHA doğrulamasını yapın.");
      return;
    }

    setIsSubmitting(true);

    try {
        await emailjs.sendForm(
          'service_7asx2wr',
          'template_etcz4o2',
          e.target, // e.target instead of formRef.current!
          'M2IlryvIugq40vxvc'
        );

      toast.success("Thank you! We will get back to you as soon as possible.");
      setFormData({
        from_name: "",
        from_telephone: "",
        from_email: "",
        subject: "",
        message: ""
      });
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("An error has occurred. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6"> {/*formRef deleted*/}
      <div>
        <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
      </div>

      <div className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Your Name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Input
            type="tel"
            placeholder="Your Phone Number"
            name="from_telephone"
            value={formData.from_telephone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Input
            type="email"
            placeholder="Your Email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Input
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="min-h-[150px]"
          />
        </div>

        <div className="flex justify-center my-4">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LcERncqAAAAAIZfd99hXQNWuQu6chykOiXz5pW5"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Gönderiliyor..." : "Mesajı Gönder"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;