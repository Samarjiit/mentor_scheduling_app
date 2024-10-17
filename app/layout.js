//import localFont from "next/font/local"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import "./globals.css"
import Link from "next/link"
import { ClerkProvider } from "@clerk/nextjs"
export const metadata = {
  title: "Calendy",
  description: "   Meeting scheduling app",
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {children}
          </main>
          <footer className="bg-blue-100 py-8">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>
                Made with 💗 by{" "}
                <Link
                  className="text-cyan-700"
                  href="https://github.com/samarjiit"
                >
                  Samarjiit
                </Link>
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  )
}
