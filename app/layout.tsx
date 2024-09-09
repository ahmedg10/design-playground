import Providers from '@components/Providers';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='theme-light'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
