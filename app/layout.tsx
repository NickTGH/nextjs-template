import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BatBurger',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navigation">
          <Link className="navigation-logo" href="/">
            LOGO/HOME
          </Link>

          <Link className="navigation-link" href="/order">
            ORDER
          </Link>
          <Link className="navigation-link" href="/help">
            HELP
          </Link>
        </nav>
        <main className="main-container">{children}</main>
        <footer>Better than the Joker 🍔(Created by Nick)</footer>
      </body>
    </html>
  );
}
