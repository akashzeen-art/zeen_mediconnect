import LegalPage from '../components/ui/LegalPage';

const sections = [
  { num: '01', title: 'Order Cancellation', points: ['Orders can be cancelled within 24 hours of placing the order, provided the order has not already been processed or shipped.', 'To request cancellation, contact us immediately at bd@zeenmediconnect.com / +91 124 4477054 with your order details.', 'Once an order is shipped, it cannot be cancelled.'] },
  { num: '02', title: 'Refund Eligibility', intro: 'Refunds are applicable only under the following conditions:', points: ['You received a wrong product that does not match your order.', 'The product was damaged during delivery (requires proof such as photos at the time of delivery).', 'The product is expired or defective upon arrival.', 'Note: Refunds are not applicable for opened, used, or partially consumed products.'] },
  { num: '03', title: 'Refund Process', points: ['To initiate a refund, you must notify us within 2 days of receiving the product.', 'Once your request is verified and approved, refunds will be processed within 7–10 working days.', 'In some cases, you may be asked to return the product before a refund is issued.'] },
  { num: '04', title: 'Non-Refundable Items', intro: 'We do not accept returns or issue refunds for:', points: ['Opened or partially used herbal products.', 'Products purchased during promotional sales or discounts.', 'Digital or downloadable content (if applicable).'] },
  { num: '05', title: 'Shipping & Return Costs', points: ['If the return is due to our error, we will bear the return shipping charges.', 'If the return is due to customer reasons, the customer must bear the return shipping cost.'] }
];

export default function RefundPolicy() {
  return <LegalPage title="Refund & Cancellation Policy" intro="This Refund & Cancellation Policy applies to all purchases made through https://zeenmediconnect.com/, managed by Zeen Mediconnect OPC Pvt. Ltd. Please read it carefully before placing an order." sections={sections} />;
}
