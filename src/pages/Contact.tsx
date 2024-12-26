import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">

   {/* Hero Section */}
    <div className="w-full hero-pattern">
      <div className="container mx-auto px-4 pt-24 pb-10">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-primary-foreground text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">BUTAX is here</h1>
            <p className="text-lg max-w-2xl mx-auto">
               Our door is always open for a good cup of coffe.
            </p>
          </div>
         </div>
       </div>
    </div>

  {/* Contact Information */}
    <div className="container mx-auto px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="space-y-6 text-left">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold">Our Location</h3>
                  <p className="text-muted-foreground">
                    Yenikent, 26. Cad. No:11, 06946 Sincan/Ankara
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-muted-foreground">info@butaxsports.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-muted-foreground">+90 (312) 123 4567</p>
                </div>
              </div>
            </div>

            {/* Google Maps Section */}
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.616026031276!2d32.50755840000001!3d39.9946854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d32f89bf751355%3A0x9e571493744bca2e!2sYenikent%2C%2026.%20Cad.%20No%3A11%2C%2006946%20Sincan%2FAnkara!5e0!3m2!1sen!2str!4v1710861720245!5m2!1sen!2str"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;