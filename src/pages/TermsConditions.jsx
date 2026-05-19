import LegalPage from '../components/ui/LegalPage';

const sections = [
  { num: '01', title: 'Medical Disclaimer', points: ['The content on this website is for general informational and educational purposes only.', 'The Company does not provide medical advice, diagnosis, or treatment.', 'Always consult a qualified healthcare professional before starting any herbal or medical treatment.'] },
  { num: '02', title: 'Personal Information', points: ['We may collect personal information voluntarily for registration, order delivery, shipment tracking, and updates.', 'By providing this data, you consent to its collection and use in accordance with our Privacy Policy.'] },
  { num: '03', title: 'Intellectual Property / Copyright', points: ['All content is the property of Zeen Mediconnect OPC Pvt. Ltd.', 'Content may only be downloaded for personal, non-commercial use.', 'Reproduction or distribution without prior written consent is prohibited.'] },
  { num: '04', title: 'No Warranty & Limitation of Liability', points: ['This website is provided "AS IS" without warranties of any kind.', 'The Company shall not be liable for any direct, indirect, or consequential damages.'] },
  { num: '05', title: 'General Terms', points: ['The website is operated from India. Access outside India is at your own responsibility.', 'Users are responsible for compliance with their local laws.'] },
  { num: '06', title: 'Jurisdiction', points: ['All disputes shall be subject to the exclusive jurisdiction of the courts of Gurugram, Haryana, India.', 'These Terms & Conditions are governed by the laws of India.'] },
  { num: '07', title: 'Severability', points: ['If any provision is found invalid or unenforceable, the remaining provisions remain in full force.'] },
  { num: '08', title: 'User Responsibilities', points: ['Do not misuse or attempt unauthorized access to the website.', 'Do not use the website for unlawful or fraudulent purposes.', 'Comply with all applicable laws while using the website.'] },
  { num: '09', title: 'Third-Party Links', points: ['This website may contain links to third-party sites.', 'We are not responsible for their content, policies, or practices.'] },
  { num: '10', title: 'Entire Agreement', points: ['These Terms & Conditions, along with our Privacy Policy, constitute the complete agreement between you and Zeen Mediconnect OPC Pvt. Ltd.'] }
];

export default function TermsConditions() {
  return <LegalPage title="Terms & Conditions" intro="Welcome to https://zeenmediconnect.com/, managed by Zeen Mediconnect OPC Pvt. Ltd. By accessing or using this website, you agree to the following Terms & Conditions. We reserve the right to revise these terms at any time without prior notice." sections={sections} contact={false} />;
}
