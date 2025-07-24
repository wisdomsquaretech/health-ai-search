import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'Health AI Search',
  description: 'Search health topics using AI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">      
      <body className={poppins.className}>{children}</body>
    </html>
  );
}