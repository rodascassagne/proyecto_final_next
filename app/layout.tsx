import '@/app/styles/global.css';
import NavBarWrapper from './components/nav-wrapper';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <NavBarWrapper />
        <main >{children}</main>
      </body>
    </html>
  );
}
