import './globals.css';

export const metadata = {
  title: 'Lainey',
  description: 'Quiet essays, reading lists, and notes from the table.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
