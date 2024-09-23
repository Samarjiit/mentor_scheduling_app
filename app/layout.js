//import localFont from "next/font/local"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import "./globals.css"

export const metadata = {
  title: "Calendy",
  description: "   Meeting scheduling app",
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          {children}
        </main>
        <footer className="bg-blue-100 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>
              Made with 💗 by{" "}
              <a className="text-cyan-700" href="https://github.com/samarjiit">
                Samarjiit
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
