import Providers from '@components/Providers';
import BlobCursor from '@system/animations/BlobCursor';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='theme-light'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
