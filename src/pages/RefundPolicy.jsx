import { motion } from 'framer-motion';

const sections = [
  {
    num: '01', title: 'Order Cancellation',
    points: [
      'Orders can be cancelled by customers within 24 hours of placing the order, provided the order has not already been processed or shipped.',
      'To request cancellation, please contact us immediately at bd@zeenmediconnect.com / +91 124 4477054 with your order details.',
      'Once an order is shipped, it cannot be cancelled.'
    ]
  },
  {
    num: '02', title: 'Refund Eligibility',
    intro: 'Refunds are applicable only under the following conditions:',
    points: [
      'You received a wrong product that does not match your order.',
      'The product was damaged during delivery (requires proof such as photos at the time of delivery).',
      'The product is expired or defective upon arrival.',
      'Note: Refunds are not applicable for opened, used, or partially consumed products due to the nature of herbal and Ayurvedic consumables.'
    ]
  },
  {
    num: '03', title: 'Refund Process',
    points: [
      'To initiate a refund, you must notify us within 2 days of receiving the product.',
      'Once your request is verified and approved, refunds will be processed to your original payment method within 7–10 working days.',
      'In some cases, you may be asked to return the product (unused and in original packaging) before a refund is issued.'
    ]
  },
  {
    num: '04', title: 'Non-Refundable Items',
    intro: 'We do not accept returns or issue refunds for:',
    points: [
      'Opened or partially used herbal/Ayurvedic products.',
      'Products purchased during promotional sales or discounts.',
      'Digital or downloadable content (if applicable).'
    ]
  },
  {
    num: '05', title: 'Shipping & Return Costs',
    points: [
      'If the return is due to our error (wrong, damaged, or expired product), we will bear the return shipping charges.',
      'If the return is due to customer reasons (e.g., order placed by mistake, change of mind), the customer must bear the return shipping cost.'
    ]
  }
];

export default function RefundPolicy() {
  return (
    <div className="pt-20 bg-[#FAFAFA] min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f766e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
            Refund & Cancellation Policy
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-blue-100 text-lg">
            Zeen Mediconnect OPC Pvt. Ltd.
          </motion.p>
        </div>
      </section>

      {/* All content in ONE single div */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 md:p-12 space-y-8">

          <p className="text-gray-600 leading-relaxed text-sm">
            This Refund & Cancellation Policy applies to all purchases made through{' '}
            <a href="https://zeenmediconnect.com/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-medium">
              https://zeenmediconnect.com/
            </a>
            , managed by Zeen Mediconnect OPC Pvt. Ltd. ("Company", "we", "our", or "us"). Please read it carefully before placing an order.
          </p>

          <hr className="border-gray-100" />

          {sections.map((s, i) => (
            <div key={i}>
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center text-xs font-extrabold shrink-0 border border-teal-100">
                  {s.num}
                </span>
                <div className="flex-1">
                  <h2 className="text-base font-heading font-bold text-[#1e3a5f] mb-3">{s.title}</h2>
                  {s.intro && <p className="text-gray-600 text-sm mb-2">{s.intro}</p>}
                  <ul className="space-y-2">
                    {s.points.map((p, j) => (
                      <li key={j} className="text-gray-600 text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-teal-400 shrink-0 mt-1">•</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {i < sections.length - 1 && <hr className="border-gray-100 mt-6" />}
            </div>
          ))}

          <hr className="border-gray-100" />

          {/* Contact */}
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center text-xs font-extrabold shrink-0 border border-teal-100">
              ✉
            </span>
            <div>
              <h2 className="text-base font-heading font-bold text-[#1e3a5f] mb-3">Contact Us</h2>
              <div className="space-y-1 text-sm text-gray-600">
                <p>417, 4th Floor, Tower A1, Spaze i Tech Park, Sohna Road, Gurgaon, 122018, India</p>
                <p>+91 92175 28957</p>
                <a href="mailto:bd@zeenmediconnect.com" className="text-teal-600 hover:underline">bd@zeenmediconnect.com</a>
              </div>
            </div>
          </div>

        </motion.div>
      </section>
    </div>
  );
}
