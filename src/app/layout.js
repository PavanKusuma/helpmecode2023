import './globals.css'

export const metadata = {
  title: 'HelpMeCode',
  description: 'One stop place for your programming needs!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
