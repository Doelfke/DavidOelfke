import Navigation from '../navigation/Navigation';
import { Figtree } from 'next/font/google';

const figree = Figtree({ subsets: ['latin'] });

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={figree.className}>
      <Navigation />
      {children}
    </div>
  );
}
