import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/index.css';

export const metadata: Metadata = {
  title: 'FalconBridge Partners',
  description: 'Decision-led research and clarity for leaders at moments of consequence.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-brand-navy text-brand-grey font-primary antialiased overflow-x-hidden">
        <div className="app-wrapper">
          <div className="grain-overlay"></div>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
