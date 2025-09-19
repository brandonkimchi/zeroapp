import zerologo from "../assets/images/zerologo.png"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center">
        {/* Logo on the left */}
        <img src={zerologo} alt="ZeroApp Doors" className="h-10" />

        {/* Copyright on the right */}
        <p className="text-sm text-white">
          © {new Date().getFullYear()} Zero. All rights reserved.
        </p>
      </div>
    </footer>
  )
}