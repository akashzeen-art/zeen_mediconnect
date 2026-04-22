import { motion } from 'framer-motion';
import BackButton from '../components/ui/BackButton';

const sections = [
  {
    num: '01', title: 'Medical Disclaimer',
    points: [
      'The content on this website is for general informational and educational purposes only.',
      'The Company does not provide medical advice, diagnosis, or treatment.',
      'Always consult a qualified healthcare professional before starting any herbal, Herbal, or medical treatment.'
    ]
  },
  {
    num: '02', title: 'Personal Information',
    points: [
      'We may collect personal information voluntarily for registration, order delivery, shipment tracking, and updates via call, SMS, or email.',
      'By providing this data, you consent to its collection and use in accordance with our Privacy Policy.'
    ]
  },
  {
    num: '03', title: 'Intellectual Property / Copyright',
    points: [
      'All content — including text, graphics, images, videos, logos, and designs — is the property of Zeen Mediconnect OPC Pvt. Ltd.',
      'Content may only be downloaded if explicitly marked and solely for personal, non-commercial use.',
      'Reproduction, distribution, or exploitation without prior written consent is prohibited.'
    ]
  },
  {
    num: '04', title: 'No Warranty & Limitation of Liability',
    points: [
      'This website is provided "AS IS" without warranties of any kind.',
      'The Company shall not be liable for any direct, indirect, or consequential damages arising from the use of this website.'
    ]
  },
  {
    num: '05', title: 'General Terms',
    points: [
      'The website is operated from India. Access outside India is at your own responsibility.',
      'Users are responsible for compliance with their local laws when accessing this website.',
      'Certain provisions (indemnity, liability, jurisdiction) survive termination of these Terms & Conditions.'
    ]
  },
  {
    num: '06', title: 'Jurisdiction',
    points: [
      'All disputes shall be subject to the exclusive jurisdiction of the courts of Gurugram, Haryana, India.',
      'These Terms & Conditions are governed by the laws of India.'
    ]
  },
  {
    num: '07', title: 'Severability',
    points: [
      'If any provision is found invalid or unenforceable, the remaining provisions remain in full force and effect.'
    ]
  },
  {
    num: '08', title: 'User Responsibilities',
    points: [
      'Do not misuse or attempt unauthorized access to the website.',
      'Do not use the website for unlawful or fraudulent purposes.',
      'Comply with all applicable laws while using the website.'
    ]
  },
  {
    num: '09', title: 'Third-Party Links',
    points: [
      'This website may contain links to third-party sites.',
      'We are not responsible for their content, policies, or practices.'
    ]
  },
  {
    num: '10', title: 'Entire Agreement',
    points: [
      'These Terms & Conditions, along with our Privacy Policy, constitute the complete agreement between you and Zeen Mediconnect OPC Pvt. Ltd.'
    ]
  }
];

export default function TermsConditions() {
  return (
    <div className="pt-20 bg-[#FAFAFA] min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0f766e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-start mb-6"><BackButton /></div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
            Terms & Conditions
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
            Welcome to{' '}
            <a href="https://zeenmediconnect.com/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-medium">
              https://zeenmediconnect.com/
            </a>
            , a website created and managed by Zeen Mediconnect OPC Pvt. Ltd. ("Company", "we", "us", or "our"). By accessing or using this website, you agree to the following Terms & Conditions.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm">
            Zeen Mediconnect OPC Pvt. Ltd. reserves the right to revise, modify, or update these Terms & Conditions at any time without prior notice. Continued use of the website indicates your acceptance of any changes.
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

        </motion.div>
      </section>
    </div>
  );
}
