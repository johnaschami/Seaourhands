import Image from "next/image"
import { Mail, MapPin, Clock } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#f8f4e3] to-[#e6d7b8] p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="w-full max-w-md mb-8 md:mb-12">
          <Image src="/logo.png" alt="NGO Logo" width={500} height={500} className="w-full h-auto" priority />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-[#8c6239] mb-4">Coming Soon</h1>

        <p className="text-xl md:text-2xl text-[#5a3e25] mb-8 max-w-2xl">
          We're working hard to bring our vision to life. Stay tuned for updates!
        </p>

        <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[#8c6239] mb-4">Contact Us</h2>

          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <Mail className="h-5 w-5 text-[#8c6239]" />
              <a href="mailto:tringoldie@gmail.com" className="text-[#5a3e25] hover:text-[#8c6239] transition-colors">
                tringoldie@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <MapPin className="h-5 w-5 text-[#8c6239]" />
              <span className="text-[#5a3e25]">Ocho Rios, Jamaica</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-[#8c6239]">
          <Clock className="h-5 w-5" />
          <p>Launch Date Coming Soon</p>
        </div>
      </div>

      <footer className="mt-auto pt-8 pb-4 text-center text-[#5a3e25] text-sm">
        <p>&copy; {new Date().getFullYear()} • All Rights Reserved</p>
      </footer>
    </div>
  )
}

