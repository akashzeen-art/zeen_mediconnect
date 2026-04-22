import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPreview() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 92175 28957"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["bd@zeenmediconnect.com"]
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: ["417, 4th Floor, Tower A1,", "Spaze i Tech Park, Sohna Road", "Gurgaon, 122018, India"]
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FAFAFA] rounded-3xl p-8 md:p-12 lg:p-16 border border-gray-100 shadow-xl relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-bl-[100px] -z-0"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-50 rounded-tr-[100px] -z-0"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* CTA Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0A2540] mb-6">
                Ready to Start Your Health Journey?
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Whether you're looking for world-class medical treatments, seeking premium Herbal wellness, or inquiring about our global supply chain, our dedicated team is here to assist you 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://pu.playtonight.fun/com/checkout/?id=1029&clickid=clickid" target="_blank" rel="noopener noreferrer">
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0A2540] text-white rounded-full font-bold hover:bg-[#1E3A8A] transition-colors shadow-lg">
                    Buy Now
                  </motion.button>
                </a>
                <Button to="/contact" variant="outline">Contact Us</Button>
              </div>
            </motion.div>

            {/* Contact Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {contactInfo.map((info, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-[#0f766e] mb-4">
                    <info.icon size={20} />
                  </div>
                  <h4 className="font-heading font-bold text-[#0A2540] mb-2">{info.title}</h4>
                  <div className="text-sm text-gray-500 leading-relaxed font-medium">
                    {info.details.map((detail, i) => (
                      <div key={i}>{detail}</div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
