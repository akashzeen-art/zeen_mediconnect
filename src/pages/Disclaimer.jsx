import { motion } from 'framer-motion';

export default function Disclaimer() {
  return (
    <div className="pt-20 bg-[#FAFAFA] min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f766e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
            Disclaimer
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
            The information below applies to{' '}
            <a href="https://zeenmediconnect.com/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-medium">
              https://zeenmediconnect.com/
            </a>{' '}
            and the Company — Zeen Mediconnect OPC Pvt. Ltd. The information provided on this Website, operated by Zeen Mediconnect OPC Pvt. Ltd. ("Company", "we", "our", or "us"), is for general informational and educational purposes only. By using this Website, you acknowledge and agree to the following disclaimers:
          </p>

          <hr className="border-gray-100" />

          {[
            {
              num: '01', title: 'No Medical Advice',
              points: [
                'The content on this Website, including articles, product information, and resources, is not a substitute for professional medical advice, diagnosis, or treatment.',
                'Always consult a qualified healthcare professional before starting any herbal, Ayurvedic, or dietary supplement regimen.',
                'Never disregard or delay seeking medical advice because of something you read on this Website.'
              ]
            },
            {
              num: '02', title: 'Product Disclaimer',
              points: [
                'Our products are based on traditional Ayurvedic and herbal practices. Results may vary from person to person.',
                'The Company does not claim to diagnose, treat, cure, or prevent any disease.',
                'Statements regarding our products have not been evaluated by medical authorities unless explicitly stated.'
              ]
            },
            {
              num: '03', title: 'Accuracy of Information',
              points: [
                'While we strive to keep information on this Website accurate and up to date, we make no representations or warranties regarding completeness, accuracy, or reliability.',
                'Any reliance you place on the information is strictly at your own risk.'
              ]
            },
            {
              num: '04', title: 'External Links',
              points: [
                'This Website may include links to third-party websites for informational purposes.',
                'We are not responsible for the content, accuracy, or practices of external sites and disclaim liability for any damages arising from their use.'
              ]
            },
            {
              num: '05', title: 'Limitation of Liability',
              points: [
                'To the fullest extent permitted by law, the Company, its directors, employees, affiliates, or partners shall not be held liable for any loss, injury, or damage (direct, indirect, incidental, or consequential) arising from:',
                '— Use of or reliance on Website content',
                '— Use of our products, or',
                '— Inability to access the Website.'
              ]
            },
            {
              num: '06', title: 'User Responsibility',
              points: [
                'By using this Website, you acknowledge that you are solely responsible for your health decisions and agree to use our content and products responsibly.',
                'You further agree that the Company shall not be held liable for your personal choices or outcomes resulting from use of our information or products.'
              ]
            },
            {
              num: '07', title: 'Consent',
              points: [
                'By accessing and using this Website, you consent to this Disclaimer and agree to all its terms.'
              ]
            }
          ].map((s, i) => (
            <div key={i}>
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center text-xs font-extrabold shrink-0 border border-teal-100">
                  {s.num}
                </span>
                <div className="flex-1">
                  <h2 className="text-base font-heading font-bold text-[#1e3a5f] mb-3">{s.title}</h2>
                  <ul className="space-y-2">
                    {s.points.map((p, j) => (
                      <li key={j} className="text-gray-600 text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-teal-400 shrink-0 mt-1">•</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {i < 6 && <hr className="border-gray-100 mt-6" />}
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
