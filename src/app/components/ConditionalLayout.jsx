"use client";

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  
  // Routes where header and footer should be hidden
  const hideHeaderFooterRoutes = [
    '/admin-login',
    '/admin-dashboard',
    '/login'
  ];
  
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(pathname);
  
  if (shouldHideHeaderFooter) {
    return (
      <main className="min-h-screen">
        {children}
      </main>
    );
  }
  
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
