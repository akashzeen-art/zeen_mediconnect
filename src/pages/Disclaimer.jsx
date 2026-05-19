import LegalPage from '../components/ui/LegalPage';

const sections = [
  { num: '01', title: 'No Medical Advice', points: ['The content on this Website is not a substitute for professional medical advice, diagnosis, or treatment.', 'Always consult a qualified healthcare professional before starting any herbal or dietary supplement regimen.', 'Never disregard or delay seeking medical advice because of something you read on this Website.'] },
  { num: '02', title: 'Product Disclaimer', points: ['Our products are based on traditional herbal practices. Results may vary from person to person.', 'The Company does not claim to diagnose, treat, cure, or prevent any disease.', 'Statements regarding our products have not been evaluated by medical authorities unless explicitly stated.'] },
  { num: '03', title: 'Accuracy of Information', points: ['While we strive to keep information accurate and up to date, we make no representations or warranties regarding completeness, accuracy, or reliability.', 'Any reliance you place on the information is strictly at your own risk.'] },
  { num: '04', title: 'External Links', points: ['This Website may include links to third-party websites for informational purposes.', 'We are not responsible for the content, accuracy, or practices of external sites.'] },
  { num: '05', title: 'Limitation of Liability', points: ['To the fullest extent permitted by law, the Company shall not be held liable for any loss, injury, or damage arising from use of Website content, use of our products, or inability to access the Website.'] },
  { num: '06', title: 'User Responsibility', points: ['By using this Website, you acknowledge that you are solely responsible for your health decisions.', 'You agree that the Company shall not be held liable for your personal choices or outcomes.'] },
  { num: '07', title: 'Consent', points: ['By accessing and using this Website, you consent to this Disclaimer and agree to all its terms.'] }
];

export default function Disclaimer() {
  return <LegalPage title="Disclaimer" intro={`The information below applies to https://zeenmediconnect.com/ and the Company — Zeen Mediconnect OPC Pvt. Ltd. The information provided is for general informational and educational purposes only.`} sections={sections} />;
}
