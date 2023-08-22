import './globals.css';

export const metadata = {
  title: 'Dalio - Nextjs Template',
  description: 'Professional react/nextjs template created with clean code with modern design and animations.',
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
