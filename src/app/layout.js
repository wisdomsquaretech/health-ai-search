import './globals.css';

export const metadata = {
  title: 'Health AI Search',
  description: 'Search health topics using AI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: 'Poppins, sans-serif' }}>{children}</body>
    </html>
  );
}