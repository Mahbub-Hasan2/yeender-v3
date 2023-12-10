import './globals.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';


export const metadata = {
  title: 'My Site',
  description: 'This is my site',
  image: 'https://example.com/image.png',
  url: 'https://example.com',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}