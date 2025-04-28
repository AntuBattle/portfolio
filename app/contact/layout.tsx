import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}
  <Toaster/>
  </>;
}
