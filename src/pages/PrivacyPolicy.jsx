import LegalPage from '../components/ui/LegalPage';

const sections = [
  { num: '01', title: 'Information We Collect', points: ['Personal Information: Name, email address, phone number, billing/shipping address, and payment details.', 'Non-Personal Information: Browser type, device details, IP address, cookies, and usage data.', 'Voluntary Submissions: Information you provide through forms, surveys, or direct communication.'] },
  { num: '02', title: 'How We Use Your Information', points: ['Processing and fulfilling your orders.', 'Providing customer support and responding to inquiries.', 'Sending updates, promotions, or service-related communications (if you opt-in).', 'Improving our Website functionality, user experience, and services.', 'Legal and security purposes, such as fraud prevention.'] },
  { num: '03', title: 'Sharing of Information', points: ['Service Providers: Trusted third parties who assist in running our services.', 'Legal Requirements: Authorities, if required by law, regulation, or legal process.', 'Business Transfers: In the event of a merger or acquisition, your data may be transferred.'] },
  { num: '04', title: 'Cookies & Tracking Technologies', points: ['Enhance user experience.', 'Track website traffic and performance.', 'Store user preferences.', 'You can adjust your browser settings to decline cookies.'] },
  { num: '05', title: 'Data Security', points: ['We implement appropriate technical and organizational measures to protect your personal information.', 'However, no method of online transmission or storage is 100% secure.'] },
  { num: '06', title: 'Data Retention', points: ['We retain your personal information only as long as necessary to provide services and comply with legal obligations.'] },
  { num: '07', title: 'Your Rights', points: ['Access, update, or correct your personal information.', 'Request deletion of your personal data.', 'Withdraw consent for marketing communications.', 'To exercise these rights, contact us at bd@zeenmediconnect.com.'] },
  { num: '08', title: 'Third-Party Links', points: ['Our Website may contain links to third-party websites.', 'We are not responsible for the privacy practices or content of those external sites.'] },
  { num: '09', title: "Children's Privacy", points: ['Our Website and services are not intended for children under 18 years of age.', 'We do not knowingly collect personal information from minors.'] },
  { num: '10', title: 'Changes to this Privacy Policy', points: ['We may update this Privacy Policy from time to time.', 'Continued use of our Website after changes indicates your acceptance of the revised policy.'] }
];

export default function PrivacyPolicy() {
  return <LegalPage title="Privacy Policy" intro="This Privacy Policy describes how Zeen Mediconnect OPC Pvt. Ltd. collects, uses, stores, and protects your personal information when you use https://zeenmediconnect.com/. By accessing our Website, you agree to the terms of this Privacy Policy." sections={sections} />;
}
