import { motion } from 'framer-motion';

const sections = [
  {
    num: '01', title: 'Information We Collect',
    points: [
      'Personal Information: Name, email address, phone number, billing/shipping address, and payment details (when you place an order or contact us).',
      'Non-Personal Information: Browser type, device details, IP address, cookies, and usage data when you interact with the Website.',
      'Voluntary Submissions: Information you provide through forms, surveys, or direct communication with us.'
    ]
  },
  {
    num: '02', title: 'How We Use Your Information',
    points: [
      'Processing and fulfilling your orders.',
      'Providing customer support and responding to inquiries.',
      'Sending updates, promotions, or service-related communications (if you opt-in).',
      'Improving our Website\'s functionality, user experience, and services.',
      'Legal and security purposes, such as fraud prevention and compliance with applicable laws.'
    ]
  },
  {
    num: '03', title: 'Sharing of Information',
    points: [
      'Service Providers: Trusted third parties (e.g., payment processors, delivery partners) who assist in running our services.',
      'Legal Requirements: Authorities, if required by law, regulation, or legal process.',
      'Business Transfers: In the event of a merger, acquisition, or restructuring, your data may be transferred to the new entity.'
    ]
  },
  {
    num: '04', title: 'Cookies & Tracking Technologies',
    points: [
      'Enhance user experience.',
      'Track website traffic and performance.',
      'Store user preferences.',
      'You can adjust your browser settings to decline cookies, but some features of the Website may not function properly.'
    ]
  },
  {
    num: '05', title: 'Data Security',
    points: [
      'We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, misuse, loss, or alteration.',
      'However, no method of online transmission or storage is 100% secure.'
    ]
  },
  {
    num: '06', title: 'Data Retention',
    points: [
      'We retain your personal information only as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce agreements.'
    ]
  },
  {
    num: '07', title: 'Your Rights',
    points: [
      'Access, update, or correct your personal information.',
      'Request deletion of your personal data.',
      'Withdraw consent for marketing communications.',
      'Restrict or object to certain data processing activities.',
      'To exercise these rights, contact us at bd@zeenmediconnect.com.'
    ]
  },
  {
    num: '08', title: 'Third-Party Links',
    points: [
      'Our Website may contain links to third-party websites.',
      'We are not responsible for the privacy practices or content of those external sites.'
    ]
  },
  {
    num: '09', title: "Children's Privacy",
    points: [
      'Our Website and services are not intended for children under 18 years of age.',
      'We do not knowingly collect personal information from minors.'
    ]
  },
  {
    num: '10', title: 'Changes to this Privacy Policy',
    points: [
      'We may update this Privacy Policy from time to time.',
      'Any changes will be posted on this page with the updated effective date.',
      'Continued use of our Website after changes indicates your acceptance of the revised policy.'
    ]
  }
];

export default function PrivacyPolicy() {
  return (
    <div className="pt-20 bg-[#FAFAFA] min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f766e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
            Privacy Policy
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
            This Privacy Policy describes how Zeen Mediconnect OPC Pvt. Ltd. ("Company", "we", "our", or "us") collects, uses, stores, and protects your personal information when you use{' '}
            <a href="https://zeenmediconnect.com/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-medium">
              https://zeenmediconnect.com/
            </a>{' '}
            (the "Website"). By accessing or using our Website, you agree to the terms of this Privacy Policy.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm">
            We are committed to safeguarding your privacy and ensuring your personal data is handled responsibly and transparently.
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
