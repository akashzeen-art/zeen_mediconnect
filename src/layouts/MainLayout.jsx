import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingCallButton from '../components/ui/FloatingCallButton';
import FloatingBuyButton from '../components/ui/FloatingBuyButton';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingCallButton />
      <FloatingBuyButton />
    </div>
  );
}
