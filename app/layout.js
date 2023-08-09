import './globals.css';

export const metadata = {
  title: 'The SJ Development - Professional Shopify Website Experts',
  description: 'We are nimble team of designers and developers who have more than 10 years of expereince in desigining and developing websites.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-slate-900">
        {children}
      </body>
    </html>
  )
}
